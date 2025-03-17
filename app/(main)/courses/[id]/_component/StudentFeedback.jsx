import StudentFeedBackCard from "./StudentFeedBackCard";

export const StudentFeedback = ({ reviews }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <StudentFeedBackCard reviews={reviews} />
    </div>
  );
};
