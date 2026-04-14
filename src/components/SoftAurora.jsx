import { Renderer, Program, Mesh, Triangle } from 'ogl';
import { useEffect, useRef, useMemo, useCallback } from 'react';

// Cache pour les conversions de couleur
const colorCache = new Map();

function hexToVec3(hex) {
  if (colorCache.has(hex)) return colorCache.get(hex);
  
  const h = hex.replace('#', '');
  const result = [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255
  ];
  
  colorCache.set(hex, result);
  return result;
}

// Vertex shader simplifié
const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

// Fragment shader optimisé
const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform float uSpeed;
uniform float uScale;
uniform float uBrightness;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uNoiseFreq;
uniform float uNoiseAmp;
uniform float uBandHeight;
uniform float uBandSpread;
uniform float uOctaveDecay;
uniform float uLayerOffset;
uniform float uColorSpeed;
uniform vec2 uMouse;
uniform float uMouseInfluence;
uniform bool uEnableMouse;

#define TAU 6.28318

// Optimisation : précalculer les gradients
vec3 gradientHash(vec3 p) {
  p = vec3(
    dot(p, vec3(127.1, 311.7, 234.6)),
    dot(p, vec3(269.5, 183.3, 198.3)),
    dot(p, vec3(169.5, 283.3, 156.9))
  );
  vec3 h = fract(sin(p) * 43758.5453123);
  float phi = acos(2.0 * h.x - 1.0);
  float theta = TAU * h.y;
  return vec3(cos(theta) * sin(phi), sin(theta) * cos(phi), cos(phi));
}

float quinticSmooth(float t) {
  float t2 = t * t;
  float t3 = t * t2;
  return 6.0 * t3 * t2 - 15.0 * t2 * t2 + 10.0 * t3;
}

vec3 cosineGradient(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(TAU * (c * t + d));
}

// Perlin 3D optimisé
float perlin3D(float amplitude, float frequency, float px, float py, float pz) {
  float x = px * frequency;
  float y = py * frequency;
  float z = pz;

  float fx = floor(x); float fy = floor(y); float fz = floor(z);
  float cx = ceil(x);  float cy = ceil(y);  float cz = ceil(z);

  // Calcul des vecteurs de gradient
  vec3 g000 = gradientHash(vec3(fx, fy, fz));
  vec3 g100 = gradientHash(vec3(cx, fy, fz));
  vec3 g010 = gradientHash(vec3(fx, cy, fz));
  vec3 g110 = gradientHash(vec3(cx, cy, fz));
  vec3 g001 = gradientHash(vec3(fx, fy, cz));
  vec3 g101 = gradientHash(vec3(cx, fy, cz));
  vec3 g011 = gradientHash(vec3(fx, cy, cz));
  vec3 g111 = gradientHash(vec3(cx, cy, cz));

  // Interpolation
  float sx = quinticSmooth(x - fx);
  float sy = quinticSmooth(y - fy);
  float sz = quinticSmooth(z - fz);

  // Optimisation: précalculer les différences
  float dx = x - fx;
  float dy = y - fy;
  float dz = z - fz;
  float cx_diff = x - cx;
  float cy_diff = y - cy;
  float cz_diff = z - cz;

  float d000 = dot(g000, vec3(dx, dy, dz));
  float d100 = dot(g100, vec3(cx_diff, dy, dz));
  float d010 = dot(g010, vec3(dx, cy_diff, dz));
  float d110 = dot(g110, vec3(cx_diff, cy_diff, dz));
  float d001 = dot(g001, vec3(dx, dy, cz_diff));
  float d101 = dot(g101, vec3(cx_diff, dy, cz_diff));
  float d011 = dot(g011, vec3(dx, cy_diff, cz_diff));
  float d111 = dot(g111, vec3(cx_diff, cy_diff, cz_diff));

  // Interpolation bilinéaire
  float lx00 = mix(d000, d100, sx);
  float lx10 = mix(d010, d110, sx);
  float lx01 = mix(d001, d101, sx);
  float lx11 = mix(d011, d111, sx);

  float ly0 = mix(lx00, lx10, sy);
  float ly1 = mix(lx01, lx11, sy);

  return amplitude * mix(ly0, ly1, sz);
}

float auroraGlow(float t, vec2 shift) {
  vec2 uv = gl_FragCoord.xy / uResolution.y;
  uv += shift;

  float noiseVal = 0.0;
  float freq = uNoiseFreq;
  float amp = uNoiseAmp;
  vec2 samplePos = uv * uScale;

  // Réduction des octaves pour améliorer les performances
  for (float i = 0.0; i < 2.0; i += 1.0) {
    noiseVal += perlin3D(amp, freq, samplePos.x, samplePos.y, t);
    amp *= uOctaveDecay;
    freq *= 2.0;
  }

  float yBand = uv.y * 8.0 - uBandHeight * 8.0;
  float glow = max(exp(uBandSpread * (1.0 - 1.2 * abs(noiseVal + yBand))), 0.0);
  return 0.4 * glow;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float t = uSpeed * 0.3 * uTime;

  vec2 shift = vec2(0.0);
  if (uEnableMouse) {
    shift = (uMouse - 0.5) * uMouseInfluence;
  }

  // Optimisation: calcul unique du temps
  float timeOffset1 = uv.x + uTime * uSpeed * 0.15 * uColorSpeed;
  float timeOffset2 = uv.x + uTime * uSpeed * 0.08 * uColorSpeed;

  vec3 col1 = auroraGlow(t, shift) * cosineGradient(timeOffset1, vec3(0.5), vec3(0.5), vec3(1.0), vec3(0.3, 0.20, 0.20)) * uColor1;
  vec3 col2 = auroraGlow(t + uLayerOffset, shift) * cosineGradient(timeOffset2, vec3(0.5), vec3(0.5), vec3(2.0, 1.0, 0.0), vec3(0.5, 0.20, 0.25)) * uColor2;
  
  vec3 col = col1 + col2;
  col *= uBrightness;
  
  float alpha = clamp(length(col), 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
}
`;

export default function SoftAurora({
  speed = 0.6,
  scale = 1.5,
  brightness = 1.0,
  color1 = '#f7f7f7',
  color2 = '#e100ff',
  noiseFrequency = 2.5,
  noiseAmplitude = 1.0,
  bandHeight = 0.5,
  bandSpread = 1.0,
  octaveDecay = 0.1,
  layerOffset = 0,
  colorSpeed = 1.0,
  enableMouseInteraction = true,
  mouseInfluence = 0.25,
  lowPerformanceMode = false,
  quality = 'medium', // 'low', 'medium', 'high'
  className = '' // Ajout pour permettre des classes personnalisées
}) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const meshRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Optimisation des paramètres selon la qualité
  const qualitySettings = useMemo(() => {
    switch(quality) {
      case 'low':
        return { octaves: 1, glowIntensity: 0.3, bandFactor: 8 };
      case 'medium':
        return { octaves: 2, glowIntensity: 0.4, bandFactor: 8 };
      case 'high':
        return { octaves: 3, glowIntensity: 0.5, bandFactor: 10 };
      default:
        return { octaves: 2, glowIntensity: 0.4, bandFactor: 8 };
    }
  }, [quality]);

  // Détection automatique des performances
  useEffect(() => {
    if (lowPerformanceMode) return;
    
    let timeoutId;
    const checkPerformance = () => {
      const startTime = performance.now();
      let frames = 0;
      
      const testInterval = setInterval(() => {
        frames++;
        if (frames > 60) {
          clearInterval(testInterval);
          const endTime = performance.now();
          const fps = frames / ((endTime - startTime) / 1000);
          
          if (fps < 30 && quality !== 'low') {
            console.warn('Low performance detected, consider using lowPerformanceMode');
          }
        }
      }, 1000);
      
      timeoutId = setTimeout(() => {
        clearInterval(testInterval);
      }, 2000);
    };
    
    checkPerformance();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lowPerformanceMode, quality]);

  const resize = useCallback(() => {
    if (!containerRef.current || !rendererRef.current) return;
    
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    if (width === 0 || height === 0) return;
    
    // Limiter la résolution pour les performances
    const maxDimension = lowPerformanceMode ? 720 : 1920;
    const scaledWidth = Math.min(width, maxDimension);
    const scaledHeight = Math.min(height, maxDimension);
    
    rendererRef.current.setSize(scaledWidth, scaledHeight);
    
    if (meshRef.current?.program?.uniforms?.uResolution) {
      meshRef.current.program.uniforms.uResolution.value = [
        rendererRef.current.gl.canvas.width,
        rendererRef.current.gl.canvas.height,
        rendererRef.current.gl.canvas.width / rendererRef.current.gl.canvas.height
      ];
    }
  }, [lowPerformanceMode]);

  const handleMouseMove = useCallback((e) => {
    if (!meshRef.current?.program?.uniforms?.uMouse) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height;
    
    meshRef.current.program.uniforms.uMouse.value[0] = Math.min(Math.max(x, 0), 1);
    meshRef.current.program.uniforms.uMouse.value[1] = Math.min(Math.max(y, 0), 1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!meshRef.current?.program?.uniforms?.uMouse) return;
    meshRef.current.program.uniforms.uMouse.value[0] = 0.5;
    meshRef.current.program.uniforms.uMouse.value[1] = 0.5;
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const renderer = new Renderer({ 
      alpha: true, 
      premultipliedAlpha: false,
      antialias: quality !== 'low'
    });
    
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    
    // Optimisation WebGL
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    
    rendererRef.current = renderer;
    
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height] },
        uSpeed: { value: speed },
        uScale: { value: scale },
        uBrightness: { value: brightness },
        uColor1: { value: hexToVec3(color1) },
        uColor2: { value: hexToVec3(color2) },
        uNoiseFreq: { value: noiseFrequency },
        uNoiseAmp: { value: noiseAmplitude },
        uBandHeight: { value: bandHeight },
        uBandSpread: { value: bandSpread },
        uOctaveDecay: { value: octaveDecay },
        uLayerOffset: { value: layerOffset },
        uColorSpeed: { value: colorSpeed },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uMouseInfluence: { value: mouseInfluence },
        uEnableMouse: { value: enableMouseInteraction && !lowPerformanceMode }
      }
    });
    
    const mesh = new Mesh(gl, { geometry, program });
    meshRef.current = mesh;
    
    // S'assurer que le canvas est correctement positionné
    gl.canvas.style.position = 'absolute';
    gl.canvas.style.top = '0';
    gl.canvas.style.left = '0';
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.display = 'block';
    gl.canvas.style.pointerEvents = enableMouseInteraction ? 'auto' : 'none';
    
    container.appendChild(gl.canvas);
    
    // Utiliser ResizeObserver pour une meilleure détection des changements de taille
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    
    resizeObserver.observe(container);
    
    // Premier resize
    setTimeout(() => resize(), 0);
    
    if (enableMouseInteraction && !lowPerformanceMode) {
      gl.canvas.addEventListener('mousemove', handleMouseMove);
      gl.canvas.addEventListener('mouseleave', handleMouseLeave);
    }
    
    // Animation avec throttling pour les performances
    let lastTime = 0;
    const targetFPS = lowPerformanceMode ? 30 : 60;
    const frameInterval = 1000 / targetFPS;
    
    let animationFrameId;
    
    function update(currentTime) {
      animationFrameId = requestAnimationFrame(update);
      
      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) return;
      
      lastTime = currentTime;
      
      if (meshRef.current?.program?.uniforms?.uTime) {
        meshRef.current.program.uniforms.uTime.value = currentTime * 0.001;
      }
      
      renderer.render({ scene: mesh });
    }
    
    animationFrameId = requestAnimationFrame(update);
    animationFrameRef.current = animationFrameId;
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      resizeObserver.disconnect();
      
      if (enableMouseInteraction && !lowPerformanceMode && gl.canvas) {
        gl.canvas.removeEventListener('mousemove', handleMouseMove);
        gl.canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
      
      const loseContext = gl.getExtension('WEBGL_lose_context');
      if (loseContext) loseContext.loseContext();
      
      rendererRef.current = null;
      meshRef.current = null;
    };
  }, [speed, scale, brightness, color1, color2, noiseFrequency, noiseAmplitude, 
      bandHeight, bandSpread, octaveDecay, layerOffset, colorSpeed, 
      enableMouseInteraction, mouseInfluence, lowPerformanceMode, quality, 
      resize, handleMouseMove, handleMouseLeave]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full absolute inset-0 overflow-hidden ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%'
      }}
    />
  );
}