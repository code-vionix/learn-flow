import { ArrowDown } from 'lucide-react'
import React from 'react'

function QuesAndAns({selectedTopic,expandedQuestion,setExpandedQuestion,role,questions}) {
  return (
    <div className="lg:col-span-6">
            <div className="space-y-4">
            {questions[role][selectedTopic]?.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-lg shadow transition-all `}
                >
                  <button
                    onClick={() =>
                      setExpandedQuestion(
                        expandedQuestion === index ? null : index
                      )
                    }
                    className="w-full flex justify-between items-center text-left"
                  >
                    <div
                      className={` w-full flex justify-between  p-4 ${
                        expandedQuestion === index ? "bg-gray-900" : "bg-white"
                      }`}
                    >
                      <span
                      key={index}
                        className={` font-medium ${
                          expandedQuestion === index
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {item.question}
                      </span>
                      {expandedQuestion === index ? (
                        <ArrowDown
                          className={`transition-all h-5 w-5 ${
                            expandedQuestion === index
                              ? "text-white"
                              : "text-gray-500"
                          }`}
                        />
                      ) : (
                        <ArrowDown
                          className={`rotate-180 transition-all h-5 w-5 ${
                            expandedQuestion === index
                              ? "text-white"
                              : "text-gray-500"
                          }`}
                        />
                      )}
                    </div>
                  </button>
                  {expandedQuestion === index && (
                    <div className="px-4 pb-4 py-6 text-black">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
  )
}

export default QuesAndAns