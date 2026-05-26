// src/app/robots.js  ← à la racine de app/, à côté du layout
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.agencyams.com/sitemap.xml",
  };
}