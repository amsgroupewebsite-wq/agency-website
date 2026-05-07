// src/app/projets/[slug]/page.jsx
import { projets} from "../../../lib/projets";
import ProjetDetail from "../../../components/ProjetDetail"
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = projets.find((p) => p.slug === slug);
  if (!item) return {};

  return {
    title: `${item.title} — AMS Agency`,
    description: item.intro,
  };
}

export default async function ProjetPage({ params }) {
  const { slug } = await params;
  const item = projets.find((p) => p.slug === slug);

  if (!item) notFound();

  return <ProjetDetail projet={item} />;
}