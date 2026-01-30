import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../api";
import PaywallModal from "../components/PaywallModal";
import CommentSection from "../components/CommentSection";
import Loader from "../components/Loader";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [showPay, setShowPay] = useState(false);

  useEffect(() => {
    API.get(`/articles/${id}`).then((res) => {
      setArticle(res.data);
    });
  }, [id]);

  const handlePayment = async () => {
    setShowPay(false);
    const create = await API.post("/payments/create");
    const orderId = create.data.id;

    const capture = await API.post(`/payments/capture/${orderId}`, {
      articleId: id,
    });

    if (capture.data.success) {
      const refreshed = await API.get(`/articles/${id}`);
      setArticle(refreshed.data);
    }
  };

  if (!article) return <Loader />;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">{article.title}</h1>
      <p className="text-gray-600 mb-4">
        {article.date} — Written by {article.author}
      </p>

      <p className="mb-6 whitespace-pre-wrap">{article.body}</p>

      {article.isPaid && !article.unlocked && (
        <button
          onClick={() => setShowPay(true)}
          className="bg-yellow-400 text-black px-4 py-2 rounded font-bold"
        >
          Unlock Article ($1.09)
        </button>
      )}

      {showPay && (
        <PaywallModal
          onPay={handlePayment}
          onClose={() => setShowPay(false)}
        />
      )}

      {article.unlocked && <CommentSection articleId={id} />}
    </div>
  );
}
