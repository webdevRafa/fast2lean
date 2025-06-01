import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";

interface Article {
  title: string;
  excerpt: string;
  tags: string[];
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<{ id: string; data: Article }[]>([]);
  const [searchTag, setSearchTag] = useState("");

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

  // Filter articles by tag
  const filteredArticles = articles.filter(({ data }) =>
    searchTag.trim() === ""
      ? true
      : data.tags.some((tag) =>
          tag.toLowerCase().includes(searchTag.toLowerCase())
        )
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Articles</h1>

      {/* Search Bar */}
      <div className="max-w-[1500px] mx-auto mb-10 sticky top-10 bg-body py-2">
        <input
          type="text"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          placeholder="Search by tag (e.g. keto, fasting, health)..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Articles Grid */}
      <section className="grid md:grid-cols-3 gap-8">
        {filteredArticles.length > 0 ? (
          filteredArticles.map(({ id, data }) => (
            <Link
              to={`/articles/${id}`}
              key={id}
              className="border rounded-lg p-6 hover:shadow-md transition duration-200 bg-white"
            >
              <h2 className="text-2xl font-semibold mb-2">{data.title}</h2>
              <p className="text-gray-700 mb-2">{data.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-2 text-gray-500">
            No articles found with that tag.
          </p>
        )}
      </section>
    </main>
  );
};

export default Articles;
