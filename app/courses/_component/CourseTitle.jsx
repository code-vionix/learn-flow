export default function CourseTitle({ title, subtitle }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
      <p className="text-xl text-gray-700">{subtitle}</p>
    </div>
  );
}
