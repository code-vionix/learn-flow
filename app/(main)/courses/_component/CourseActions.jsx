export default function CourseActions() {
  return (
    <div className="space-y-4">
      <button className="w-full bg-primatext-primary-500 text-white py-4  font-semibold hover:bg-primary-600 transition">
        Add To Cart
      </button>
      <button className="w-full bg-primary-900 text-primary-500 py-4  font-semibold hover:bg-primary-300 transition">
        Buy Now
      </button>
      <div className="flex gap-3">
        <button className="flex-1 py-2 px-4 border border-gray-200  text-gray-700 font-medium hover:bg-gray-100 transition">
          Add To Wishlist
        </button>
        <button className="flex-1 py-2 px-4 border border-gray-200  text-gray-700 font-medium hover:bg-gray-100 transition">
          Gift Course
        </button>
      </div>
      <p className="text-sm text-gray-600 text-center">
        Note: All courses have a 30-day money-back guarantee
      </p>
    </div>
  );
}
