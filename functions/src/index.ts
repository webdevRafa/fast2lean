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
  // ✅ The actual product is inside data.data due to { data: product } shape
  const raw = (data as any).data;

  const product: ProductInput = {
    name: String(raw.name),
    price: parseFloat(raw.price),
    tags: Array.isArray(raw.tags) ? raw.tags : String(raw.tags).split(',').map(t => t.trim()),
    link: String(raw.link),
    image: raw.image ? String(raw.image) : undefined
  };



  console.log("✅ Parsed product:", product);

  // ✅ Validation (adjust to ensure all required fields are present)
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
    image: product.image?.trim() || null,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  try {
    const newProductRef = await db.collection("products").add(productData);
    console.log("✅ Product saved with ID:", newProductRef.id);
    return { success: true, id: newProductRef.id };
  } catch (error) {
    console.error("🔥 Firestore write error:", error);
    throw new functions.https.HttpsError("internal", "Failed to add product");
  }
});
