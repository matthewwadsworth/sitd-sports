import { useEffect, useState } from "react";
import { API } from "../api";
import ArticleCard from "../components/ArticleCard";
import Loader from "../components/Loader";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/articles/page/${page}`).then((res) => {
      setArticles(res.data);
      setLoading(false);
    });
  }, [page]);

  if (loading) return <Loader />;

  return (
    <div>
      <input
        placeholder="Search articles..."
        className="w-full border p-2 mb-6"
        onKeyDown={(e) => {
          if (e.key === "Enter")
            window.location.href = `/category/search?q=${e.target.value}`;
        }}
      />

      {articles.map((a) => (
        <ArticleCard key={a._id} article={a} />
      ))}

      {page < 5 ? (
        <button
          onClick={() => setPage(page + 1)}
          className="bg-black text-yellow-400 px-4 py-2 rounded mt-6"
        >
          More
        </button>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          Use search to find older content.
        </p>
      )}
    </div>
  );
}
