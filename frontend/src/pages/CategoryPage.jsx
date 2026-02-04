import React from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

export default function CategoryPage() {
  const { catName } = useParams();

  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/articles?category=${catName}`)
      .then((r) => r.json())
      .then(setArticles);
  }, [catName]);

  return (
    <div className="p-4">
      <h2 className="text-white text-2xl font-bold mb-4">{catName}</h2>

      {articles.length === 0 ? (
        <p className="text-gray-400">No articles in this category yet.</p>
      ) : (
        articles.map((a) => <ArticleCard key={a._id} article={a} />)
      )}
    </div>
  );
}
