import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../api";
import ArticleCard from "../components/ArticleCard";
import Loader from "../components/Loader";

export default function Category() {
  const { name } = useParams();
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    API.get(`/articles/search/${name}`).then((res) => {
      setArticles(res.data);
    });
  }, [name]);

  if (!articles) return <Loader />;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">{name}</h1>

      {articles.map((a) => (
        <ArticleCard key={a._id} article={a} />
      ))}
    </div>
  );
}
