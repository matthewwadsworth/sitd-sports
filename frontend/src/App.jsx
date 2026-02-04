import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ArticleCard from "./components/ArticleCard";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";

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
        <Route path="/category/:catName" element={<CategoryPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
