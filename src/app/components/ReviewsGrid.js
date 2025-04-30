"use client";

import { useEffect, useState } from "react";

export default function ReviewsGrid() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch("/api/reviews");
      const data = await res.json();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  if (!reviews.length) return <p className="text-center py-8">No reviews found.</p>;

  return (
    <section className="px-6 py-8 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">All Reviews ({reviews.length})</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-yellow-500">
                {"★".repeat(Math.floor(review.rating)) + (review.rating % 1 ? "½" : "")}
              </div>
              <span className="font-semibold text-gray-800">{review.name}</span>
              <span className="text-green-500 text-xs ml-1">● Verified</span>
            </div>
            <p className="text-sm text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
