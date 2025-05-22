import { PurchesAccordion, PurchesAccordionContent, PurchesAccordionItem, PurchesAccordionTrigger } from "@/components/ui/purchesAccordion";
import { Play, Star, CreditCard, DollarSign, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PurchaseOrderSummaryCard from "./PurchaseOrderSummaryCard";
import PurchaseItem from "./PurchaseItem";
import { formatEnrollmentDate } from "@/lib/formatTime";

const PurchaseCard = ({ purchase }) => {
    const { enrollmentDate, course:courses, payment } = purchase;

    const formatedDate = formatEnrollmentDate(enrollmentDate)
    
    const payments = payment?.[0];

    return (
        <div className="">
            <PurchesAccordionItem className="border " value={`course-${purchase?.id}`}>
                <PurchesAccordionTrigger>
                    <div className="text-start ">
                        <h3 className="text-[18px]">{formatedDate}</h3>
                        <div className="md:flex hidden text-[14px] items-center gap-4 mt-2">
                            <div className="flex items-center gap-1 text-gray-700">
                                <PlayCircle className="text-secondary-500 w-[15px] h-[15px]" />  {courses?.length || 0} {courses?.length === 1 ? 'Course' : 'Courses'}
                                {/* <PlayCircle className="text-secondary-500 w-[15px] h-[15px]" /> {courses} Courses */}
                            </div>

                            <div className="flex items-center gap-1 text-gray-700">
                                <DollarSign className="text-primary-500 w-[15px] h-[15px]" /> {payments?.amount} USD
                            </div>

                            <div className="flex items-center gap-1 text-gray-700">
                                <CreditCard className="text-success-500 w-[15px] h-[15px]" /> {payments?.method}
                            </div>
                        </div>
                    </div>
                </PurchesAccordionTrigger>
                <PurchesAccordionContent>
                    <div className="flex flex-col md:flex-row gap-0 w-full mx-auto">
                        {/* Left side - Course listings */}
                        <div className="flex-1 border-r pr-0">
                            <div className="space-y-">
                                {courses.map((course) => (<PurchaseItem
                                    key={course.id}
                                    course={course}

                                />))}
                            </div>
                        </div>

                        <PurchaseOrderSummaryCard
                            courseDetails={courses}
                            amount={payments?.amount}
                            // cardDetails={cardDetails}
                            date={formatedDate}
                            paymentMethod = {payments?.method}
                        />
                    </div>
                </PurchesAccordionContent>
            </PurchesAccordionItem>
        </div>
    );
};

export default PurchaseCard;