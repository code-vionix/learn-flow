import { useState } from "react";

export default function PopularKeyword({ keywords, setSelectedKeyword }) {
  const [selectedKeyword, setSelectedStateKeyword] = useState(null);

  return (
    <div className="pt-10 pb-20 flex items-center gap-6 flex-wrap">
      <h3 className="text-[18px] font-medium text-gray-600">
        Popular keywords:
      </h3>
      <div className="flex flex-wrap gap-2 cursor-pointer">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            onClick={() => {
              setSelectedStateKeyword(keyword); 
              setSelectedKeyword(keyword); 
            }}
            className={`${
              selectedKeyword === keyword
                ? "bg-primary-500 text-white"
                : "bg-gray-100 text-gray-700"
            } py-1.5 px-3 gap-2.5 rounded-md text-sm font-medium`}
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}