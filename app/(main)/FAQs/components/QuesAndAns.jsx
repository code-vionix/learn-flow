'use client';


import { Accordion3, AccordionContent3, AccordionItem3, AccordionTrigger3 } from '@/components/ui/accordion3';
import { useGetFaqByIdQuery } from '@/store/api/faqApi';
import React from 'react';

function QuesAndAns({ selectedTopic }) {
  const { data, isLoading, isError, error } = useGetFaqByIdQuery(selectedTopic);

  if (isLoading) {
    return (
      <div className="lg:col-span-6 space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-gray-100 animate-pulse space-y-2"
          >
            <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="lg:col-span-6 text-red-600 p-4 bg-red-50 rounded-lg border border-red-200">
        <p>⚠️ Failed to load FAQs. Please try again later.</p>
        {error?.data?.message && (
          <p className="text-sm mt-1">{error.data.message}</p>
        )}
      </div>
    );
  }

  return (
    <div className="lg:col-span-6">
      {data?.data?.faqs?.length === 0 ? (
        <p className="text-gray-500">No FAQs available for this topic.</p>
      ) : (
        <Accordion3 type="single" collapsible className="space-y-4">
          {data?.data?.faqs?.map((item, index) => (
            <AccordionItem3 value={`item-${index}`} key={index}>
              <AccordionTrigger3 className="text-start text-base py-3 px-2 font-medium">
                {item?.question}
              </AccordionTrigger3>
              <AccordionContent3 className="text-sm p-2 pb-3 text-gray-700">
                {item?.answer}
              </AccordionContent3>
            </AccordionItem3>
          ))}
        </Accordion3>
      )}
    </div>
  );
}

export default QuesAndAns;
