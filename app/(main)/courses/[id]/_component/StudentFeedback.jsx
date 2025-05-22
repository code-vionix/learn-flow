import StudentFeedBackCard from "./StudentFeedBackCard";

export const StudentFeedback = ({ reviews }) => {
  return (
    <div className="py-6">
      <StudentFeedBackCard reviews={reviews.reviews} />
    </div>
  );
};
