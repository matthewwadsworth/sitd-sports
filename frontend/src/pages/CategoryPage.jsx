import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { fetchArticles } from "../api";

export default function CategoryPage({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      const allArticles = await fetchArticles();
      const filtered = allArticles.filter(
        (article) =>
          article.category &&
          article.category.toLowerCase() === category.toLowerCase()
      );
      setArticles(filtered);
      setLoading(false);
    }
    loadArticles();
  }, [category]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-4 mt-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        {category} Articles
      </h1>

      {articles.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          No articles found for this category yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
