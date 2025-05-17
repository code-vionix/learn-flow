"use client"


import React, { useEffect, useState } from "react";
import QuestionSet from "./components/QuestionSet";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import QuesAndAns from "./components/QuesAndAns";
import CustomQuestion from "./components/CustomQuestion";
import FaqNav from "./components/FaqNav";
import { useGetAllFaqCategoryQuery, useGetAllFaqQuery, useGetFaqByRoleQuery } from "@/store/api/faqApi";

function FAQsPage() {


  const topics = {
    student: [
      'Getting Started',
      'Course Access',
      'Assignments',
      'Technical Support',
      'Mobile App',
      'Certifications',
      'Payment',
      'Account Settings',
    ],
    instructor: [
      'Course Creation',
      'Content Management',
      'Student Analytics',
      'Grading System',
      'Live Sessions',
      'Revenue',
      'Support',
      'Settings',
    ],
  };

  const questions = {
    student: {
      'Getting Started': [
        {
          question: 'How do I create a student account?',
          answer: 'Creating an account is simple. Click the "Sign Up" button, select "Student", and follow the prompts to enter your information.',
        },
        {
          question: 'What are the system requirements?',
          answer: 'Our platform works best on modern browsers like Chrome, Firefox, Safari, or Edge. Make sure your browser is up to date.',
        },
      ],
      'Course Access': [
        {
          question: 'How do I enroll in a course?',
          answer: 'Browse our course catalog, select your desired course, and click "Enroll". You can pay using various payment methods.',
        },
        {
          question: 'Can I access courses offline?',
          answer: 'Yes, you can download course materials for offline viewing using our mobile app.',
        },
      ],
    },
    instructor: {
      'Course Creation': [
        {
          question: 'How do I create my first course?',
          answer: 'Click on "Create Course" in your dashboard, fill in the course details, and start adding your content modules.',
        },
        {
          question: 'What file formats are supported?',
          answer: 'We support video (MP4, WebM), audio (MP3, WAV), documents (PDF, DOCX), and presentations (PPT, PPTX).',
        },
      ],
      'Content Management': [
        {
          question: 'How do I organize my course content?',
          answer: 'Use modules and sections to organize your content. You can drag and drop to reorder items.',
        },
        {
          question: 'Can I schedule content release?',
          answer: 'Yes, you can set specific dates for content to become available to students.',
        },
      ],
    },
  };

  // const { data, isLoading, isError } = useGetFaqByRoleQuery("student");


  const [role, setRole] = useState('student');
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [customQuestion, setCustomQuestion] = useState({
    subject: "",
    message: ""
  })
  const { data: faqCategory, isLoading: faqCategoryLoading, isError: faqCategoryError } = useGetFaqByRoleQuery(role);
  
  const [selectedTopic, setSelectedTopic] = useState(faqCategory?.data[0]?.id);
  useEffect(() => {
    setSelectedTopic(faqCategory?.data[0]?.id);
  }, [faqCategory]);

  console.log("role", role)

  return (
    <div>
      <CustomBreadcrumb title={"FAQs"} />

      <div className=" px-2 py-2 sm:px-8 md:px-16 lg:px-32 2xl:72  lg:py-12">
        <div className=" mx-auto ">
          <FaqNav role={role} setRole={setRole} setSelectedTopic={setSelectedTopic} topics={topics} setExpandedQuestion={setExpandedQuestion} />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="lg:col-span-3 ">
              {faqCategoryLoading
                ? (
                  <div className="bg-gray-50 lg:h-full h-[400px] flex items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-10 h-10 border-4 border-t-transparent border-primary-500 rounded-full animate-spin mb-2"></div>
                      <span className="text-lg text-primary-500">Loading</span>
                    </div>
                  </div>
                )
                : (<div className="grid lg:grid-cols-3 gap-4">
                  <div className="">
                    <QuestionSet
                      setSelectedTopic={setSelectedTopic}
                      selectedTopic={selectedTopic}
                      faqCategory={faqCategory}
                      faqCategoryLoading={faqCategoryLoading}
                      faqCategoryError={faqCategoryError}
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <QuesAndAns selectedTopic={selectedTopic}  expandedQuestion={expandedQuestion} setExpandedQuestion={setExpandedQuestion} questions={questions} />
                  </div>
                </div>)
              }
            </div>
            <div className="">
              <CustomQuestion customQuestion={customQuestion} setCustomQuestion={setCustomQuestion} />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default FAQsPage;
