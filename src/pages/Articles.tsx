import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

interface Article {
  title: string;
  excerpt: string;
  tags: string[];
}

const tagOptions = [
  "fasting",
  "mental health",
  "keto",
  "energy",
  "productivity",
  "weight loss",
  "gut health",
];

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<{ id: string; data: Article }[]>([]);
  const [searchTag, setSearchTag] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "articles"));
        const articleList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data() as Article,
        }));
        setArticles(articleList);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(({ data }) => {
    const tagMatch =
      activeTag === "" || data.tags.includes(activeTag.toLowerCase());
    const searchMatch =
      searchTag.trim() === "" ||
      data.tags.some((tag) =>
        tag.toLowerCase().includes(searchTag.toLowerCase())
      );
    return tagMatch && searchMatch;
  });

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <main className="max-w-[1600px] mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-4 tracking-tight">
        Explore Articles
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Real insights backed by science and experience. Discover what fasting,
        diet, and nutrition can really do for your health.
      </p>

      {/* Tag Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tagOptions.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? "" : tag)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
              activeTag === tag
                ? "bg-green-700 text-white"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
            data-aos="fade-up"
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative md:w-2/3 mx-auto mb-12">
        <input
          type="text"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          placeholder="Search articles by keyword or tag..."
          className="w-full px-12 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>

      {/* Articles Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleArticles.length > 0 ? (
          visibleArticles.map(({ id, data }) => (
            <Link
              to={`/articles/${id}`}
              key={id}
              className="bg-white border rounded-lg p-6 hover:shadow-xl hover:scale-[1.015] transition-all duration-200"
              data-aos="fade-up"
            >
              <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
              <p className="text-gray-700 text-sm mb-4">{data.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-1 rounded-full ${
                      tag === activeTag
                        ? "bg-green-700 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 mt-6">
            <p className="text-xl">😕 No articles found.</p>
            <p className="text-sm">Try another tag or keyword.</p>
          </div>
        )}
      </div>

      {/* Load More */}
      {filteredArticles.length > visibleCount && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
            data-aos="fade-up"
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
};

export default Articles;
