import { categories } from "@/data";
import CategoryCard from "../cards/CategoryCard";

export default function CategoriesSection() {
  return (
    <div className="lg:w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Browse top category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            courses={category.courses}
            bgColor={category.bgColor}
            textColor={category.textColor}
          />
        ))}
      </div>
    </div>
  );
}
