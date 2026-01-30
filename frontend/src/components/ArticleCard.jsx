import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <Link
      to={`/article/${article._id}`}
      className="block border-b py-4 hover:bg-gray-50"
    >
      <h2 className="text-lg font-bold">{article.title}</h2>
      <p className="text-gray-600">{article.excerpt}</p>
      <p className="text-sm text-gray-500">
        {article.date} – Written by {article.author}
      </p>
    </Link>
  );
}
