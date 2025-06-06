import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";

interface Review {
  id: string;
  user: string;
  review: string;
  createdAt: any;
}

export default function ReviewList({ recipeId }: { recipeId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const q = query(collection(db, "reviews"), where("id", "==", recipeId));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const result: Review[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.(),
      })) as Review[];

      result.sort((a, b) => b.createdAt - a.createdAt);
      setReviews(result);
    });

    return () => unsubscribe();
  }, [recipeId]);

  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className="review-list">
      <h3>Reviews</h3>
      <ul>
        {reviews.map((r, index) => (
          <li key={index}>
            <strong>{r.user}:</strong> {r.review}
          </li>
        ))}
      </ul>
    </div>
  );
}
