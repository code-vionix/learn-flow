import StudentLayout from "./_components/StudentLayout";

export default function ProfilePage({ children }) {
  return (
    <>
      <StudentLayout />
      <div className="container mx-auto mt-32 mb-20">{children}</div>
    </>
  );
}
