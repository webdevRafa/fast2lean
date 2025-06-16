// src/components/RelatedArticles.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";

interface RelatedArticlesProps {
  tags: string[];
  currentSlug: string;
  maxShown?: number; // defaults to 3
}

interface ArticleCardData {
  id: string;
  title: string;
  excerpt: string;
  bannerImageUrl?: string;
  createdAt?: string;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  tags,
  currentSlug,
  maxShown = 3,
}) => {
  const [related, setRelated] = useState<ArticleCardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // bail if the current article has no tags
    if (!tags?.length) {
      setLoading(false);
      return;
    }

    const fetchRelated = async () => {
      try {
        // Firestore won’t random-order for us, so:
        // 1. pull a chunk (15 by default)
        // 2. shuffle in the browser
        const CANDIDATE_POOL = maxShown * 5;

        const q = query(
          collection(db, "articles"),
          where("tags", "array-contains-any", tags.slice(0, 10)), // Firestore max 10 values
          limit(CANDIDATE_POOL + 1) // +1 in case current article is included
        );

        const snap = await getDocs(q);

        const items: ArticleCardData[] = [];
        snap.forEach((doc) => {
          if (doc.id === currentSlug) return; // never show the article you’re on
          const data = doc.data() as DocumentData;
          items.push({
            id: doc.id,
            title: data.title,
            excerpt: data.excerpt,
            bannerImageUrl: data.bannerImageUrl,
            createdAt: data.createdAt,
          });
        });

        // ——— Fisher-Yates shuffle ———
        for (let i = items.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [items[i], items[j]] = [items[j], items[i]];
        }
        // ————————————————

        setRelated(items.slice(0, maxShown));
      } catch (err) {
        console.error("Could not fetch related articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRelated();
  }, [tags, currentSlug, maxShown]);

  if (loading || related.length === 0) return null;

  return (
    <section className="mt-16 mb-10 max-w-[1400px] mx-auto px-2 md:px-0">
      <h2 className="text-2xl font-semibold text-center mb-6">
        More Articles You Might Like
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {related.map((art) => (
          <Link
            key={art.id}
            to={`/articles/${art.id}`}
            className="block rounded-lg shadow hover:shadow-md transition"
          >
            {art.bannerImageUrl && (
              <img
                src={art.bannerImageUrl}
                alt={art.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
            )}

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-2 bg-white p-1">
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
  );
};
