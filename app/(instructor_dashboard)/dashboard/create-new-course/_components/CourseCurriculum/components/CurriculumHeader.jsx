import { Button } from "@/components/ui/button";

export default function CurriculumHeader(){
    return (
        <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Course Curriculum</h1>
                <div className="space-x-2">
                  <Button
                    variant="outline"
                    className="bg-primary-100 text-primary-500 hover:bg-primary-100-100 border-0 rounded-none"
                  >
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white text-orange-500 hover:bg-primary-100 border-0  rounded-none"
                  >
                    Save & Preview
                  </Button>
                </div>
              </div>
    );
}