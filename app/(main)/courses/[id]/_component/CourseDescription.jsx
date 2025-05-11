/* eslint-disable react/no-unescaped-entities */
export default function CourseDescription({description}) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Description</h2>
      <p className="text-gray-700 leading-relaxed">
      {description}
      </p>
    </div>
  );
}
