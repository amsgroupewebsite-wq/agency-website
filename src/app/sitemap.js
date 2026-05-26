// src/app/sitemap.js
import { projets } from "../lib/projets";
import { articles } from "../lib/articles";

const BASE = "https://www.agencyams.com";

export default function sitemap() {
  const pagesStatiques = ["", "/offre", "/projets", "/actu", "/equipe", "/contact"].map(
    (path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.8,
    })
  );

  const fichesProjets = projets.map((p) => ({
    url: `${BASE}/projets/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const fichesArticles = articles.map((a) => ({
    url: `${BASE}/actu/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pagesStatiques, ...fichesProjets, ...fichesArticles];
}