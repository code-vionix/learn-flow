import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit } from "lucide-react";
import Image from "next/image";

export default function AdvancedInformation() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Advanced Information</CardTitle>
        <Button variant="ghost" size="sm" className="h-8 gap-1">
          <Edit className="h-4 w-4" />
          Edit
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg">
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Course Image"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Trailer Section */}
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded-lg">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Course Trailer"
              className="rounded-lg"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="space-y-6 mt-6">
          {/* Description */}
          <div>
            <h5 className="text-xl font-semibold">Course Description</h5>
            <p>
              This course covers advanced topics in React and JavaScript,
              including hooks, state management, and component architecture.
              Learn how to build scalable applications and integrate advanced
              features like authentication and routing.
            </p>
          </div>

          {/* What You'll Learn */}
          <div>
            <h5 className="text-xl font-semibold">What Youll Learn</h5>
            <ul className="list-disc pl-6">
              <li>React Hooks</li>
              <li>State Management with Redux</li>
              <li>Component Design Patterns</li>
              <li>Authentication and Routing</li>
            </ul>
          </div>

          {/* Audience */}
          <div>
            <h5 className="text-xl font-semibold">Who This Course is For</h5>
            <ul className="list-disc pl-6">
              <li>Intermediate JavaScript developers</li>
              <li>React developers looking to deepen their knowledge</li>
              <li>Developers interested in building scalable web apps</li>
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h5 className="text-xl font-semibold">Requirements</h5>
            <ul className="list-disc pl-6">
              <li>Basic understanding of JavaScript</li>
              <li>Experience with React (Intermediate level)</li>
              <li>Willingness to learn and experiment with new concepts</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
