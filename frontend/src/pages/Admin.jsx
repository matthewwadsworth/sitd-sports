import { useState } from "react";
import { API } from "../api";

export default function Admin() {
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    body: "",
    author: "",
    date: "",
    category: "",
    isPaid: true,
  });

  const submit = async () => {
    await API.post("/articles", form, {
      headers: { "x-admin-password": "YOUR_ADMIN_PASSWORD" },
    });

    alert("Article posted!");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          className="w-full border p-2 mb-3"
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        />
      ))}

      <button
        onClick={submit}
        className="bg-black text-yellow-400 px-4 py-2 rounded"
      >
        Publish Article
      </button>
    </div>
  );
}
