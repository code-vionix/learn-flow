import Link from "next/link";

function GiftCourse() {
  return (
    <div className="h-36 w-full bg-gray-200">
      <div className="flex items-center justify-center flex-col px-72 py-10 gap-4">
        <h3 className="text-xl text-gray-900 font-semibold">Gift Course</h3>
        <span className="flex gap-2 flex-row text-sm text-gray-600">
          <Link href="/"> Home / </Link>
          <Link href="/courses"> Courses / </Link>
          <Link href="/">Complete Web...design /</Link>
          <Link href="/" className="text-gray-900">
            Gift Course
          </Link>
        </span>
      </div>
    </div>
  );
}

export default GiftCourse;
