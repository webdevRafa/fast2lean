import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    const fetchArticles = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));
      const articleList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data() as Article,
      }));
      setArticles(articleList);
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

  return (
    <main className="max-w-[1600px] mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Explore Articles</h1>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        Real insights backed by science and experience. Discover what fasting,
        diet, and nutrition can really do for your health.
      </p>

      {/* Tag Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {tagOptions.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? "" : tag)}
            className={`cursor-pointer px-4 py-2 rounded-full border transition ${
              activeTag === tag
                ? "bg-green-700 text-white"
                : "bg-green-100 text-green-700"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-10">
        <input
          type="text"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          placeholder="Search by keyword or tag..."
          className="w-full md:w-2/3 mx-auto block px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Articles Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.length > 0 ? (
          filteredArticles.map(({ id, data }) => (
            <Link
              to={`/articles/${id}`}
              key={id}
              className="bg-white p-6 rounded-lg border hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
              <p className="text-gray-700 mb-4">{data.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-2">
            No articles match that tag or keyword.
          </p>
        )}
      </div>

      {/* Optional Scroll Box Alternative */}
      {/* <div className="h-[600px] overflow-y-scroll pr-4">
        // insert articles grid here if you'd prefer scrollable
      </div> */}
    </main>
  );
};

export default Articles;
