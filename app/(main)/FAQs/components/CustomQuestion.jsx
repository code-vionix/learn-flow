"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSendNewFaqMutation } from "@/store/api/faqApi";

function CustomQuestion({ customQuestion, setCustomQuestion }) {
  const [sendNewFaq] = useSendNewFaqMutation();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmitQuestion = async () => {
    setLoading(true);
    try {
      await sendNewFaq({
        subject: customQuestion.subject,
        question: customQuestion.message,
      }).unwrap();
      setLoading(false);
      setCustomQuestion({ subject: "", message: "" });
      setMessage({ type: "success", text: "Question submitted successfully!" });

    } catch (error) {
      setLoading(false);
      setMessage({ type: "error", text: "Failed to submit question. Try again." });
    }

    setTimeout(() => {
      setMessage({ type: "", text: "" });
    }, 4000);
  };

  return (
    <div className="lg:col-span-3 text-center lg:text-start lg:w-[21rem]">
      <div className="rounded-lg shadow p-5 bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Don&apos;t find your answer?
        </h2>
        <p className="text-gray-600 mb-6">
          Don&apos;t worry, write your question here and our support team will help you.
        </p>

        <div className="space-y-4">
          <Input
            placeholder="Subject"
            className="bg-white h-11"
            value={customQuestion.subject}
            onChange={(e) =>
              setCustomQuestion({
                ...customQuestion,
                subject: e.target.value,
              })
            }
          />
          <Textarea
            placeholder="Message"
            value={customQuestion.message}
            onChange={(e) =>
              setCustomQuestion({
                ...customQuestion,
                message: e.target.value,
              })
            }
            className="min-h-[120px] bg-white"
          />

          {/* ✅ Success/Error Message */}
          {message.text && (
            <div
              className={`text-sm font-medium text-center ${message.type === "success" ? "text-green-600" : "text-red-600"
                }`}
            >
              {message.text}
            </div>
          )}

          <Button
            disabled={loading}
            onClick={handleSubmitQuestion}
            className="w-[145px] font-semibold text-base py-4 h-10 bg-primary-500 hover:bg-primary-600 text-white"
          >
            {loading ? "Submitting..." : "Submit Question"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CustomQuestion;
