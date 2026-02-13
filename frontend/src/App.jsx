import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ArticleCard from "./components/ArticleCard";
import Footer from "./components/Footer";

import CategoryPage from "./pages/CategoryPage";
import AdminPage from "./pages/AdminPage";   // ✅ ADD THIS

export default function App() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  // Filter articles by search text
  const filteredArticles = articles.filter((a) =>
    [a.title, a.excerpt, a.body, a.author]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Router>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <div className="p-4">
              {filteredArticles.map((a) => (
                <ArticleCard key={a._id} article={a} />
              ))}
            </div>
          }
        />

        {/* Category Routes */}
        <Route path="/category/MLB" element={<CategoryPage category="MLB" />} />
        <Route path="/category/NFL" element={<CategoryPage category="NFL" />} />
        <Route path="/category/NHL" element={<CategoryPage category="NHL" />} />
        <Route path="/category/CFB" element={<CategoryPage category="CFB" />} />
        <Route path="/category/Reviews" element={<CategoryPage category="Reviews" />} />

        {/* ✅ ADMIN ROUTE (THIS FIXES YOUR ISSUE) */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

