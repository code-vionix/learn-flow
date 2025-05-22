import React from "react";

function QuestionSet({selectedTopic,setSelectedTopic,topics,role}) {
  return (
    <div className="lg:col-span-3">
      <div className="bg-white  shadow">
      {topics[role].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`w-full text-center sm:text-start   px-4 py-3 border-b last:border-b-0 hover:bg-gray-50 transition-colors ${
                    selectedTopic === topic
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'text-gray-700'
                  }`}
                >
                  {topic}
                </button>
              ))}
      </div>
    </div>
  );
}

export default QuestionSet;
