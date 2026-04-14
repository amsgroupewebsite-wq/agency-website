import { articles } from "../../../lib/articles";
import ArticleDetail from "../../../components/ArticleDetail";
import { notFound } from "next/navigation";

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();

  return <ArticleDetail article={article} />;
}