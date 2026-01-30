import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-yellow-400 py-4 shadow-md z-50">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Shots In The Dark - Sports Takes & Updates
        </Link>
      </div>
    </header>
  );
}
