import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit } from "lucide-react";

export default function BasicInformation({ formData }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Basic Information</CardTitle>
        <Button variant="ghost" size="sm" className="h-8 gap-1">
          <Edit className="h-4 w-4" />
          Edit
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold ">Course Title</h4>
            <p className="text-lg font-medium">{formData.title}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold ">Sub-Title</h4>
            <p className="text-lg font-medium">{formData.subtitle}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold ">Category</h4>
            <p className="text-lg font-medium">{formData.category}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold ">Sub-Category</h4>
            <p className="text-lg font-medium">{formData.subcategory}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold ">Topic</h4>
            <p className="text-lg font-medium">{formData.topic}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold ">Course Language</h4>
            <p className="text-lg font-medium text-red-500">
              {formData.language}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold ">Subtitle Language</h4>
            <p className="text-lg font-medium text-red-500">
              {formData.subtitleLang}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold ">Course Level</h4>
            <p className="text-lg font-medium text-red-500">{formData.level}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold ">Duration</h4>
            <p className="text-lg font-medium text-red-500">
              {formData.duration}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold ">Duration Type</h4>
            <p className="text-lg font-medium text-red-500">
              {formData.durationType}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
