// src/components/RelatedArticles.tsx
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  limit,
  Timestamp,
} from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";

interface ArticleCardData {
  id: string; // slug / doc ID
  title: string;
  excerpt: string;
  bannerImageUrl?: string;
  createdAt: Timestamp;
}

interface RelatedArticlesProps {
  currentSlug: string;
  tags: string[];
  maxShown?: number; // default: 3
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  currentSlug,
  tags,
  maxShown = 3,
}) => {
  const [related, setRelated] = useState<ArticleCardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!tags?.length) {
      setLoading(false);
      return;
    }

    const fetchRelated = async () => {
      try {
        // Firestore lets you match up to 10 values with array-contains-any
        const q = query(
          collection(db, "articles"),
          where("tags", "array-contains-any", tags.slice(0, 10)),
          limit(maxShown + 1) // grab one extra in case the current article sneaks in
        );

        const snap = await getDocs(q);

        const items: ArticleCardData[] = [];
        snap.forEach((doc) => {
          if (doc.id === currentSlug) return; // skip the current article
          const data = doc.data() as DocumentData;
          items.push({
            id: doc.id,
            title: data.title,
            excerpt: data.excerpt,
            bannerImageUrl: data.bannerImageUrl,
            createdAt: data.createdAt,
          });
        });

        // pick the first N after filtering
        setRelated(items.slice(0, maxShown));
      } catch (err) {
        console.error("Could not fetch related articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRelated();
  }, [currentSlug, tags, maxShown]);

  if (loading) return null;
  if (!related.length) return null;

  return (
    <>
      <div className="w-full py-10">
        <section className="mt-16 px-4 max-w-[1400px]  mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((art) => (
              <Link
                data-aos="fade-up"
                key={art.id}
                to={`/articles/${art.id}`}
                className="block bg-white rounded-lg shadow-sm hover:shadow-md transition"
              >
                {art.bannerImageUrl && (
                  <img
                    src={art.bannerImageUrl}
                    alt={art.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
