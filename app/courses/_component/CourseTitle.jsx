export default function CourseTitle({ title, subtitle }) {
  return (
    <div className=" ">
      <h3 className="text-3xl h-[80px] font-semibold text-gray-900 max-w-[700px]">
        {title}
      </h3>
      <p className="text-xl h-[64px] text-gray-700">{subtitle}</p>
    </div>
  );
}
