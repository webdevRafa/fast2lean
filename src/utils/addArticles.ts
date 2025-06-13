import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

import articles from "../../articles.json"; // make sure each object has an `id` field

export const uploadArticles = async () => {
  try {
    const colRef = collection(db, "articles");

    for (const article of articles) {
      const { id, ...data } = article;        // pull slug out
      if (!id) {
        console.warn("⚠️  Skipping article with missing id:", article.title);
        continue;
      }

      await setDoc(
        doc(colRef, id),                      // /articles/<slug>
        { ...data, slug: id }                 // save slug inside doc (optional but helpful)
      );

      console.log(`✅ Uploaded: /articles/${id}`);
    }

    console.log("🎉 All articles uploaded with manual IDs!");
  } catch (error) {
    console.error("❌ Upload error:", error);
  }
};