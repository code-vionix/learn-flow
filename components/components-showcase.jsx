import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Switch } from "../components/ui/switch";

export default function ComponentsShowcase() {
  return (
    <div className="space-y-12">
      {/* Buttons Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Buttons</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Default</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button
                variant="default"
                className="bg-destructive hover:bg-destructive/90"
              >
                Destructive
              </Button>
              <Button
                variant="default"
                className="bg-warning hover:bg-warning/90"
              >
                Warning
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Secondary</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary">Secondary</Button>
              <Button
                variant="secondary"
                className="bg-secondary/80 hover:bg-secondary/70"
              >
                Secondary
              </Button>
              <Button
                variant="secondary"
                className="bg-secondary/60 hover:bg-secondary/50"
              >
                Secondary
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Primary/Secondary</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="default"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Primary
              </Button>
              <Button
                variant="default"
                className="bg-purple-600 hover:bg-purple-700"
              >
                Secondary
              </Button>
              <Button
                variant="default"
                className="bg-violet-400 hover:bg-violet-500"
              >
                Tertiary
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Outline</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline">Default</Button>
              <Button
                variant="outline"
                className="border-destructive text-destructive hover:bg-destructive/10"
              >
                Destructive
              </Button>
              <Button
                variant="outline"
                className="border-gray-400 text-gray-700 hover:bg-gray-100"
              >
                Gray
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Ghost</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost">Default</Button>
              <Button
                variant="ghost"
                className="text-blue-600 hover:bg-blue-50"
              >
                Primary
              </Button>
              <Button
                variant="ghost"
                className="text-purple-600 hover:bg-purple-50"
              >
                Secondary
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Disabled</h3>
            <div className="flex flex-wrap gap-2">
              <Button disabled>Default</Button>
              <Button variant="outline" disabled>
                Outline
              </Button>
              <Button variant="ghost" disabled>
                Ghost
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Form Elements Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Form elements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="text-input">Text Input</Label>
              <Input id="text-input" placeholder="Enter text..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter email..." />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Last name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="select-example">Select</Label>
              <Select>
                <SelectTrigger id="select-example">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="textarea-example">Message</Label>
              <Textarea
                id="textarea-example"
                placeholder="Type your message here..."
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Search for options</Label>
              <div className="relative">
                <Input placeholder="Search..." />
                <Button className="absolute right-0 top-0" variant="ghost">
                  Search
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Checkboxes</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox-1" />
                  <Label htmlFor="checkbox-1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox-2" />
                  <Label htmlFor="checkbox-2">Option 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox-3" />
                  <Label htmlFor="checkbox-3">Option 3</Label>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Radio Group</Label>
              <RadioGroup defaultValue="option-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-1" id="option-1" />
                  <Label htmlFor="option-1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-2" id="option-2" />
                  <Label htmlFor="option-2">Option 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-3" id="option-3" />
                  <Label htmlFor="option-3">Option 3</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label>Toggle</Label>
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Color Palette</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Primary</h3>
            <div className="grid grid-cols-9 gap-2 text-blue-500 text-xs *:flex *:items-center *:justify-center">
              <div className="h-12 bg-primary-900 rounded">primary-100</div>
              <div className="h-12 bg-primary-800 rounded"> primary-200 </div>
              <div className="h-12 bg-primary-700 rounded"> primary-300</div>
              <div className="h-12 bg-primary-600 rounded"> primary-400</div>
              <div className="h-12 bg-primary-500 rounded"> primary-500</div>
              <div className="h-12 bg-primary-400 rounded"> primary-600</div>
              <div className="h-12 bg-primary-300 rounded"> primary-700</div>
              <div className="h-12 bg-primary-200 rounded"> primary-800</div>
              <div className="h-12 bg-primary-100 rounded"> primary-900</div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Secondary</h3>
            <div className="grid grid-cols-9 text-xs text-white gap-2 *:flex *:items-center *:justify-center">
              <div className="h-12 bg-secondary-900 rounded">secondary-900</div>
              <div className="h-12 bg-secondary-800 rounded">secondary-800</div>
              <div className="h-12 bg-secondary-700 rounded">secondary-700</div>
              <div className="h-12 bg-secondary-600 rounded">secondary-600</div>
              <div className="h-12 bg-secondary-500 rounded">secondary-500</div>
              <div className="h-12 bg-secondary-400 rounded">secondary-400</div>
              <div className="h-12 bg-secondary-300 rounded">secondary-300</div>
              <div className="h-12 bg-secondary-200 rounded">secondary-200</div>
              <div className="h-12 bg-secondary-100 rounded">secondary-100</div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Success</h3>
            <div className="grid grid-cols-9 text-xs text-white gap-2 *:flex *:items-center *:justify-center">
              <div className="h-12 bg-success-900 rounded"> success-900 </div>
              <div className="h-12 bg-success-800 rounded"> success-800 </div>
              <div className="h-12 bg-success-700 rounded"> success-700 </div>
              <div className="h-12 bg-success-600 rounded"> success-600 </div>
              <div className="h-12 bg-success-500 rounded"> success-500 </div>
              <div className="h-12 bg-success-400 rounded"> success-400 </div>
              <div className="h-12 bg-success-300 rounded"> success-300 </div>
              <div className="h-12 bg-success-200 rounded"> success-200 </div>
              <div className="h-12 bg-success-100 rounded"> success-100 </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Warning</h3>
            <div className="grid grid-cols-9 gap-2 text-pink-700 text-xs *:flex *:items-center *:justify-center">
              <div className="h-12 bg-warning-900 rounded"> warning-950</div>
              <div className="h-12 bg-warning-800 rounded"> warning-800</div>
              <div className="h-12 bg-warning-700 rounded"> warning-700</div>
              <div className="h-12 bg-warning-600 rounded"> warning-600</div>
              <div className="h-12 bg-warning-500 rounded"> warning-500</div>
              <div className="h-12 bg-warning-400 rounded"> warning-400</div>
              <div className="h-12 bg-warning-300 rounded"> warning-300</div>
              <div className="h-12 bg-warning-200 rounded"> warning-200</div>
              <div className="h-12 bg-warning-100 rounded"> warning-100</div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Denger</h3>
            <div className="grid grid-cols-9 gap-2 text-pink-700 text-xs *:flex *:items-center *:justify-center">
              <div className="h-12 bg-danger-900 rounded"> danger-900</div>
              <div className="h-12 bg-danger-800 rounded"> danger-800</div>
              <div className="h-12 bg-danger-700 rounded"> danger-700</div>
              <div className="h-12 bg-danger-600 rounded"> danger-600</div>
              <div className="h-12 bg-danger-500 rounded"> danger-500</div>
              <div className="h-12 bg-danger-400 rounded"> danger-400</div>
              <div className="h-12 bg-danger-300 rounded"> danger-300</div>
              <div className="h-12 bg-danger-200 rounded"> danger-200</div>
              <div className="h-12 bg-danger-100 rounded"> danger-100</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
