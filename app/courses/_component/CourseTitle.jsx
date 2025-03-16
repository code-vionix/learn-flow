export default function CourseTitle({ title, subtitle }) {
  return (
    <div className=" py-4 ">
      <h3 className="text-3xl py-4 h-[80px] font-semibold text-gray-900 max-w-[700px]">
        {title}
      </h3>
      <p className="text-xl py-4 h-[64px] text-gray-700">{subtitle}</p>
    </div>
  );
}
