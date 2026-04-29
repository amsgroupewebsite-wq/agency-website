export const projets = [
{
  slug: "inpha-medis-film-corporate",
  title: "Film corporate – Inpha Medis",
  expertise: ["Production audiovisuelle", "Contenu","Identité"],
  secteur: "Pharmaceutique",
  tags: ["Audiovisuel", "Corporate"],
  siteUrl: "https://www.youtube.com/watch?v=wjIVlFwG72I",
  description:
    "Réalisation d’un film corporate pour Inpha Medis, à l’occasion de l’inauguration de sa nouvelle usine de production de médicaments. Ce projet met en lumière le savoir-faire industriel de l’entreprise ainsi que son engagement pour le développement du secteur pharmaceutique.",
  images: ["/projets/p2.png", "/projets/p4.png"],
  featured: true,
},
 {
  slug: "site-web-ams-groupe",
  title: "Conception du site web Ams Groupe",
  expertise: "Developpement web",
  secteur: "Institutionnel",
  tags: ["Web", "Corporate"],
  siteUrl: "https://www.amsgroupes.com/",
  description:
    "Conception et développement du site web d’Ams Groupe, visant à valoriser ses différentes filiales, présenter ses services et renforcer sa présence digitale avec une image moderne et professionnelle.",
  images: ["/projets/p10.png","/projets/p9.png"],
  featured: false,
},
{
  slug: "inpha-medis-production-audiovisuelle",
  title: "Production audiovisuelle – Inpha Medis",
  expertise: ["Production audiovisuelle", "Contenu","Identité"],
  secteur: "Pharmaceutique",
  tags: ["Audiovisuel", "Pharma"],
  description:
    "Réalisation d’une production audiovisuelle complète pour Inpha Medis, incluant interviews, reportages internes et films institutionnels, afin de valoriser son activité et renforcer sa communication.",
  images: ["/projets/p3.png", "/projets/p5.png"],
  featured: false,
},

  
  
];

export function getProjectBySlug(slug) {
  return projets.find((p) => p.slug === slug) ?? null;
}