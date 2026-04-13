export const projets = [
  {
    slug: "inpha-medis-corporate-film",
    title: "Inpha Medis Preview corporate film",
    expertise: "Contenu",
    secteur: "Pharmaceutique",
    tags: ["Audio Visuel", "Corporate"],
    siteUrl:"https://www.youtube.com/watch?v=wjIVlFwG72I",
    description:
      "Une vitrine conçue avec et pour l'interne, pour unir les voix d'un acteur des mobilités durables. Elle projette les attributs de marque, renforce la marque employeur et aligne collaborateurs et futurs talents autour de valeurs communes.",
    images: ["/projets/p2.png", "/projets/p4.png"],
    featured: true,
  },
  {
    slug: "inpha-medis-prod-audio-visuels",
    title: "Inpha Medis Prod Audio Visuels",
    expertise: "Contenu",
    secteur: "Pharmaceutique",
    tags: ["Audio Visuels", "Pharma"],
    description:
      "Production audiovisuelle complète pour Inpha Medis, couvrant interviews, reportages internes et films institutionnels.",
    images: ["/projets/p3.png", "/projets/p5.png"],
    featured: false,
  },
  {
    slug: "inpha-medis-prod-audio-visuels2",
    title: "Inpha Medis Prod Audio Visuels",
    expertise: "Contenu",
    secteur: "Pharmaceutique",
    tags: ["Audio Visuels", "Pharma"],
    description:
      "Production audiovisuelle complète pour Inpha Medis, couvrant interviews, reportages internes et films institutionnels.",
    images: ["/projets/p3.png", "/projets/p5.png"],
    featured: false,
  },
  {
    slug: "inpha-medis-prod-audio-visuels3",
    title: "Inpha Medis Prod Audio Visuels",
    expertise: "Contenu",
    secteur: "Pharmaceutique",
    tags: ["Audio Visuels", "Pharma"],
    description:
      "Production audiovisuelle complète pour Inpha Medis, couvrant interviews, reportages internes et films institutionnels.",
    images: ["/projets/p3.png", "/projets/p5.png"],
    featured: false,
  },
  
];

export function getProjectBySlug(slug) {
  return projets.find((p) => p.slug === slug) ?? null;
}