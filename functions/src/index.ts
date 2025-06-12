import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

interface ProductInput {
  name: string;
  price: number;
  tags: string[];
  link: string;
  image?: string;
}

export const addProduct = functions.https.onCall(async (data, context) => {
  // ✅ Confirm data was received and is an object
  if (!data || typeof data !== "object") {
    console.error("❌ No data received.");
    throw new functions.https.HttpsError("invalid-argument", "No data received.");
  }

  const product = data as unknown as ProductInput;


  console.log("📥 Raw product input:", product);

  // ✅ Safe field validation
  if (
    typeof product.name !== "string" || product.name.trim() === "" ||
    typeof product.price !== "number" || isNaN(product.price) ||
    !Array.isArray(product.tags) || product.tags.length === 0 ||
    typeof product.link !== "string" || product.link.trim() === ""
  ) {
    console.error("❌ Validation failed:", product);
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Missing or invalid product fields: name, price, tags, or link"
    );
  }

  const productData = {
    name: product.name.trim(),
    price: product.price,
    tags: product.tags.map(tag => tag.trim()),
    link: product.link.trim(),
    image: product.image || null,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  console.log("📤 productData to save:", productData);

  try {
    const newProductRef = await db.collection("products").add(productData);
    console.log("✅ Product saved with ID:", newProductRef.id);
    return { success: true, id: newProductRef.id };
  } catch (error) {
    console.error("🔥 Firestore write error:", error);
    throw new functions.https.HttpsError("internal", "Failed to add product");
  }
});
