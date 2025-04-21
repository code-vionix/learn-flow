"use client";
import { useCallback, useEffect, useState } from "react";

export default function useUserTriggeredProgress(initialProgress = 0) {
  const [progress, setProgress] = useState(initialProgress);
  const [hasProgressed, setHasProgressed] = useState(false);

  // Function to safely update progress based on user interaction
  const updateProgress = useCallback(
    (change) => {
      if (change === 0) return; // Don't update progress if there's no change

      const newProgress = progress + change;
      setProgress(newProgress);
      setHasProgressed(true);
    },
    [progress]
  );

  // Reset progress on tab navigation or reset
  useEffect(() => {
    if (!hasProgressed) {
      setProgress(initialProgress);
    }
  }, [initialProgress, hasProgressed]);

  return { progress, updateProgress };
}
