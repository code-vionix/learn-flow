import { useSearchParams } from "next/navigation";

const CourseSuggestionSection = ({ courseCount }) => {
  const searchParams = useSearchParams();

  console.log("Search Params:", searchParams.toString() ? searchParams.get("query") : "No search params");
  return (
    <div className="flex justify-between items-center border-b pb-4">
      <p className="text-xs mr-5">
        Suggestion:
        <span className="text-xs text-primary-400 mr-4 ml-4">UI Design</span>
        <span className="text-xs text-primary-400 mr-4">Web Design</span>
        <span className="text-xs text-primary-400 mr-4">App UI</span>
        <span className="text-xs text-primary-400 mr-4">UX Research</span>
      </p>
      <div>
        <p>
          <span className="text-xs">
            {courseCount} results found {searchParams.toString() ? `for "${searchParams.get("query")}"` : ""}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CourseSuggestionSection;
