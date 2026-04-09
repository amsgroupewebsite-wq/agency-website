import { projets } from "../../../lib/projets";
import ProjetDetail from "../../../components/ProjetDetail";
import { notFound } from "next/navigation";

export default async function ProjetPage({ params }) {
  const { slug } = await params;
  const projet = projets.find((p) => p.slug === slug);
  if (!projet) return notFound();

  return <ProjetDetail projet={projet} isModal={false} />;
}