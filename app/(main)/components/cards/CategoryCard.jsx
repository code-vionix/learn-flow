import { Card } from "@/components/ui/card";
import { cn, nameToColor } from "@/lib/utils";
import Link from "next/link";

export default function CategoryCard({
  icon,
  title,
  courses,
  bgColor,
  textColor,
}) {
  return (
    <Link href="#">
      <Card
        className={cn(`flex items-center space-x-4 p-5`)}
        style={{ backgroundColor: nameToColor(bgColor) }}
      >
        <div className={`${textColor} p-3 bg-white`}>{icon}</div>
        <div>
          <h3 className="font-semibold text-md text-gray-900">{title}</h3>
          <p className="text-xs text-gray-600">{courses}</p>
        </div>
      </Card>
    </Link>
  );
}
