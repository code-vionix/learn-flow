import React from "react";

const CourseSuggestionSection = () => {
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
            3,145,684 results found for <strong>&quot;UI/UX Design&quot;</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default CourseSuggestionSection;
