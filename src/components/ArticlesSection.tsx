import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; // adjust the path if needed

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
}

const ArticlesSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  // Fetch from Firestore
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const snapshot = await getDocs(collection(db, "articles"));
        const articleList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articleList as Article[]);
      } catch (err) {
        console.error("Error loading articles:", err);
      }
    };

    fetchArticles();
  }, []);

  // Autoscroll
  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const offset = dir === "left" ? -320 : 320;
    sliderRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section
      className={`py-5 md:py-10 px-6 hero transition duration-1000 ease-in-out`}
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Articles worth reading
      </h2>

      {/* Navigation buttons */}
      <div className="flex justify-between max-w-6xl mx-auto mb-4 px-2">
        <button
          onClick={() => scroll("left")}
          className="text-xl px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="text-xl px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          →
        </button>
      </div>

      {/* Horizontal scrollable list */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 max-w-6xl mx-auto"
      >
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/articles/${article.id}`}
            className="snap-start min-w-[300px] bg-gray-100 p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-700">{article.excerpt}</p>
          </Link>
        ))}
      </div>

      <Link
        to="/articles"
        className="block mt-10 text-center text-blue-700 underline font-medium"
      >
        Browse All Articles →
      </Link>
    </section>
  );
};

export default ArticlesSection;
