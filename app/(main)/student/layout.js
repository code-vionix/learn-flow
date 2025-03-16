import StudentLayout from "./_components/StudentLayout";

export default function ProfilePage({ children }) {
  return (
    <>
      <StudentLayout />
      <div className="container p-10 mx-auto  mt-5 mb-20">{children}</div>
    </>
  );
}
