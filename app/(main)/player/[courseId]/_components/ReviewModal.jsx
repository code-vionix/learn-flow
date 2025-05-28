'use client'

import { useState } from "react";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { fetchWithAuth } from "@/lib/fetchWithAuth";

export default function ReviewModal({ isOpen, onClose, instructorId, onSuccess }) {
  const [rating, setRating] = useState(4.5);
  const [hoveredRating, setHoveredRating] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const getRatingText = (rating) => {
    if (rating >= 4.5) return "Good/Amazing";
    if (rating >= 3.5) return "Good";
    if (rating >= 2.5) return "Average";
    if (rating >= 1.5) return "Below Average";
    return "Poor";
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/instructor-ratings`, {
        method: "POST",
        body: JSON.stringify({
          instructorId,
          rating,
          comment: feedback,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to submit review");
      }

      const data = await res.json();
      onClose();
      if (onSuccess) onSuccess(data); // Optional: callback on success
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog className="!rounded-0" open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md !rounded-0">
        <DialogHeader className="text-start">
          <DialogTitle className="text-center">Write a Review</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-4 py-4">
          <div className="text-center">
            <div className="text-lg font-medium">
              {(hoveredRating ?? rating).toFixed(1)}{" "}
              {getRatingText(hoveredRating ?? rating)}
            </div>
            <div className="flex items-center justify-center mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 cursor-pointer ${
                    star <= (hoveredRating ?? rating)
                      ? "fill-primary-500 text-primary-500"
                      : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(null)}
                />
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="text-sm font-medium mb-2">Feedback</div>
            <Textarea
              placeholder="Write down your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          {error && (
            <div className="text-sm text-red-500 text-center w-full">{error}</div>
          )}
        </div>

        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={onClose} disabled={submitting}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-primary-500 hover:bg-primary-600 text-white"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Review"} <span className="ml-1">→</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
