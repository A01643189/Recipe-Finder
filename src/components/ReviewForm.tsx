import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { useAuth } from "../context/AuthContext";

export default function ReviewForm({ recipeId }: { recipeId: string }) {
  const { user } = useAuth();
  const [review, setReview] = useState("");

  const handleSubmit = async () => {
    if (!review.trim() || !user) return;

    await addDoc(collection(db, "reviews"), {
      id: recipeId,
      user: user.displayName || user.email,
      review,
      createdAt: serverTimestamp(),
    });

    setReview("");
  };

  if (!user) return null;

  return (
    <div className="review-form">
      <textarea
        className="review-textarea"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review..."
      />
      <button className="review-submit-button" onClick={handleSubmit}>
        Submit Review
      </button>
    </div>
  );
}
