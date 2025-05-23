import ComponentsShowcase from "@/components/components-showcase";
import ButtonShowcase from "@/components/ui-showcase/button-showcase";
export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Component Library</h1>
      <div className="flex justify-between">
        <ButtonShowcase />
        <ComponentsShowcase />
      </div>
    </main>
  );
}
