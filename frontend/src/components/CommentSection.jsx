import { useEffect, useState } from "react";
import { API } from "../api";

export default function CommentSection({ articleId }) {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    API.get(`/comments/${articleId}`).then((res) => {
      setComments(res.data);
    });
  }, [articleId]);

  const submit = async () => {
    if (!input) return;
    await API.post(`/comments/${articleId}`, { comment: input });
    setInput("");
    const updated = await API.get(`/comments/${articleId}`);
    setComments(updated.data);
  };

  return (
    <div className="mt-10">
      <h3 className="text-lg font-bold mb-3">Comments</h3>

      <textarea
        className="w-full border p-2 mb-3"
        rows={3}
        placeholder="Write a comment..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={submit}
        className="bg-black text-yellow-400 px-4 py-2 rounded font-bold"
      >
        Post Comment
      </button>

      <div className="mt-6 space-y-4">
        {comments.map((c, i) => (
          <div key={i} className="border p-3 rounded">
            <p>{c.comment}</p>
            <p className="text-xs text-gray-500">{new Date(c.date).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
