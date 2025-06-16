import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; // your db setup
import { Timestamp } from "firebase/firestore";
import { RelatedProducts } from "../components/RelatedProducts";
import { RelatedArticles } from "../components/RelatedArticles";

interface Article {
  title: string;
  excerpt: string;
  author: string;
  createdAt: Timestamp;
  bannerImageUrl?: string;
  slug?: string;
  tags: string[];
  productTags?: string[]; // ✅ add this line
  content: string;
}

const ArticlePage: React.FC = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;

      const docRef = doc(db, "articles", slug);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setArticle(docSnap.data() as Article);
      } else {
        console.error("No such article!");
      }
    };

    fetchArticle();
  }, [slug]);

  if (!article) return <p className="text-center mt-20">Loading article...</p>;

  return (
    <>
      <main
        data-aos="fade-up"
        className="max-w-[1400px]  mx-auto px-4 md:px-20 py-12 text-gray-900  shadow-lg mt-10"
      >
        {article.bannerImageUrl && (
          <img
            src={article.bannerImageUrl}
            alt={article.title}
            className="rounded-lg mb-6 w-full max-h-[400px] object-cover"
          />
        )}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 ">
          {article.title}
        </h1>
        <p className="text-gray-600 text-sm mb-2">
          By {article.author} •{" "}
          {article.createdAt.toDate().toLocaleDateString()}
        </p>
        <p className="text-md text-gray-700 mb-10 italic">{article.excerpt}</p>

        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
          <div
            className="prose prose-lg max-w-none "
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>
        </p>
      </main>
      <RelatedProducts productTags={article.productTags ?? []} />
      <RelatedArticles currentSlug={slug!} tags={article.tags} />
    </>
  );
};

export default ArticlePage;
