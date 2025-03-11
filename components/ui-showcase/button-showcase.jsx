import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ButtonShowcase() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Buttons</h2>

      {/* Size Variants */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Size</h3>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" className="bg-primary-400 hover:bg-primary-600">
            Small
          </Button>
          <Button className="bg-primary-500 hover:bg-primary-600">
            Medium
          </Button>
          <Button size="lg" className="bg-primary-500 hover:bg-primary-600">
            Large
          </Button>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-primary-500 hover:bg-primary-600">
            No Icon
          </Button>
          <Button className="bg-primary-500 hover:bg-primary-600">
            Right Icon <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button className="bg-primary-500 hover:bg-primary-600">
            <ArrowRight className="mr-2 h-4 w-4" /> Left Icon
          </Button>
        </div>
      </div>

      {/* Primary/Primary */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Primary/Primary</h3>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-primary-500 hover:bg-primary-600">
            Normal
          </Button>
          <Button className="bg-primary-600">Hover</Button>
          <Button
            className="bg-primary-200 text-slate-100 hover:bg-primary-600 cursor-not-allowed"
            disabled
          >
            Disable
          </Button>
        </div>
      </div>

      {/* Primary/Secondary */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Primary/Secondary</h3>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-secondary-600 hover:bg-secondary-700">
            Normal
          </Button>
          <Button className="bg-secondary-700">Hover</Button>
          <Button
            className="bg-secondary-300 text-secondary-600 cursor-not-allowed"
            disabled
          >
            Disable
          </Button>
        </div>
      </div>

      {/* Primary/Gray */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Primary/Gray</h3>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-gray-900 hover:bg-gray-800">Normal</Button>
          <Button className="bg-gray-800">Hover</Button>
          <Button
            className="bg-gray-400 text-gray-700 cursor-not-allowed"
            disabled
          >
            Disable
          </Button>
        </div>
      </div>

      {/* Secondary/Primary */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Secondary/Primary</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="border-primary-500 text-primary-500 hover:bg-primary-50 hover:text-primary-600"
          >
            Normal
          </Button>
          <Button
            variant="outline"
            className="border-primary-500 text-primary-600 bg-primary-50"
          >
            Hover
          </Button>
          <Button
            variant="outline"
            className="border-primary-200 text-primary-300 cursor-not-allowed"
            disabled
          >
            Disable
          </Button>
        </div>
      </div>

      {/* Secondary/Secondary */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Secondary/Secondary</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="border-secondary-500 text-secondary-500 hover:bg-secondary-50 hover:text-secondary-600"
          >
            Normal
          </Button>
          <Button
            variant="outline"
            className="border-secondary-500 text-secondary-600 bg-secondary-50"
          >
            Hover
          </Button>
          <Button
            variant="outline"
            className="border-secondary-200 text-secondary-300 cursor-not-allowed"
            disabled
          >
            Disable
          </Button>
        </div>
      </div>

      {/* Secondary/Gray */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Secondary/Gray</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="border-gray-500 text-gray-700 hover:bg-gray-100"
          >
            Normal
          </Button>
          <Button
            variant="outline"
            className="border-gray-500 text-gray-800 bg-gray-100"
          >
            Hover
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-400 cursor-not-allowed"
            disabled
          >
            Disable
          </Button>
        </div>
      </div>

      {/* Tertiary/Primary */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Tertiary/Primary</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="ghost"
            className="text-primary-500 hover:bg-primary-50 hover:text-primary-600"
          >
            Normal
          </Button>
          <Button variant="ghost" className="text-primary-600 bg-primary-50">
            Hover
          </Button>
          <Button
            variant="ghost"
            className="text-primary-300 cursor-not-allowed"
            disabled
          >
            Disable
          </Button>
        </div>
      </div>

      {/* Tertiary/Secondary */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Tertiary/Secondary</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="ghost"
            className="text-secondary-500 hover:bg-secondary-50 hover:text-secondary-600"
          >
            Normal
          </Button>
          <Button
            variant="ghost"
            className="text-secondary-600 bg-secondary-50"
          >
            Hover
          </Button>
          <Button
            variant="ghost"
            className="text-secondary-300 cursor-not-allowed"
            disabled
          >
            Disable
          </Button>
        </div>
      </div>

      {/* Tertiary/Gray */}
      <div className="space-y-2">
        <h3 className="text-base font-medium">Tertiary/Gray</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="ghost"
            className="text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Normal
          </Button>
          <Button variant="ghost" className="text-gray-900 bg-gray-100">
            Hover
          </Button>
          <Button
            variant="ghost"
            className="text-gray-400 cursor-not-allowed"
            disabled
          >
            Disable
          </Button>
        </div>
      </div>
    </div>
  );
}
