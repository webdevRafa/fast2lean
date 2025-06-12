// src/components/AddProductFormWrapper.tsx
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseConfig"; // Make sure you export auth from firebase.ts
import { Navigate } from "react-router-dom";
import AddProductForm from "./AddProductForm";
import React from "react";

const AddProductFormWrapper: React.FC = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!user || user.email !== "devnetiks@gmail.com") {
    return <Navigate to="/" replace />;
  }

  return <AddProductForm />;
};

export default AddProductFormWrapper;
