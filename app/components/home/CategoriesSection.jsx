import { categories } from "@/data";
import CategoryCard from "../cards/CategoryCard";

export default function CategoryGrid() {
  return (
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
  );
}
