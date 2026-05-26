// src/app/projets/[slug]/page.jsx
import { projets } from "../../../lib/projets";
import ProjetDetail from "../../../components/ProjetDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = projets.find((p) => p.slug === slug);
  if (!item) return {};

  return {
    title: item.title, // → "Titre | AMS Agency" via le template du layout
    description: item.intro || `Projet ${item.title} signé AMS Agency.`,
    alternates: { canonical: `/projets/${slug}` },
    openGraph: {
      title: `${item.title} | AMS Agency`,
      description: item.intro,
      url: `https://www.agencyams.com/projets/${slug}`,
      type: "article",
      images: item.images?.[0] ? [{ url: item.images[0], alt: item.title }] : undefined,
    },
  };
}

export default async function ProjetPage({ params }) {
  const { slug } = await params;
  const item = projets.find((p) => p.slug === slug);

  if (!item) notFound();

  return <ProjetDetail projet={item} />;
}