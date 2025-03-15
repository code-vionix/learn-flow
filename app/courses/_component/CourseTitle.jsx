export default function CourseTitle({ title, subtitle }) {
  return (
    <div className="py-2">
      <h3 className="text-3xl font-semibold text-gray-900 max-w-[700px]">
        {title}
      </h3>
      <p className="text-xl text-gray-700">{subtitle}</p>
    </div>
  );
}
