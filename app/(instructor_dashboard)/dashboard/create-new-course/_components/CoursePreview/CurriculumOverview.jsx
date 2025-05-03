import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CurriculumOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Curriculum Overview</CardTitle>
        <Button variant="ghost" size="sm" className="h-8 gap-1">
          Edit
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Loop through the sections (replace with dynamic data) */}
          <div className="space-y-2">
            <h5 className="text-lg font-semibold">Section 1: Introduction</h5>
            <ul className="list-disc pl-6">
              <li>Lecture 1: Course Overview</li>
              <li>Lecture 2: Getting Started with React</li>
              <li>Lecture 3: Building Your First Component</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="text-lg font-semibold">
              Section 2: Advanced Concepts
            </h5>
            <ul className="list-disc pl-6">
              <li>Lecture 1: React Hooks</li>
              <li>Lecture 2: State Management with Redux</li>
              <li>Lecture 3: React Router and Navigation</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="text-lg font-semibold">Section 3: Project</h5>
            <ul className="list-disc pl-6">
              <li>Lecture 1: Planning the Project</li>
              <li>Lecture 2: Implementing the Features</li>
              <li>Lecture 3: Final Touches and Deployment</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
