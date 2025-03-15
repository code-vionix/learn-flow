import { PurchesAccordion, PurchesAccordionContent, PurchesAccordionItem, PurchesAccordionTrigger } from "@/components/ui/purchesAccordion";
import { Play, Star, CreditCard, DollarSign, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PurchaseOrderSummaryCard from "./PurchaseOrderSummaryCard";
import PurchaseItem from "./PurchaseItem";

const PurchaseCard = ({ purchase }) => {
    const { date, courses, amount, paymentMethod, cardDetails, courseDetails } = purchase;

    return (
        <div className="">
            <PurchesAccordionItem className="border " value={`course-${purchase?.id}`}>
                <PurchesAccordionTrigger>
                    <div className="text-start ">
                        <h3 className="text-[18px]">{date}</h3>
                        <div className="md:flex hidden text-[14px] items-center gap-4 mt-2">
                            <div className="flex items-center gap-1 text-gray-700">
                                <PlayCircle className="text-secondary-500 w-[15px] h-[15px]" /> {courses} Courses
                            </div>

                            <div className="flex items-center gap-1 text-gray-700">
                                <DollarSign className="text-primary-500 w-[15px] h-[15px]" /> {amount} USD
                            </div>

                            <div className="flex items-center gap-1 text-gray-700">
                                <CreditCard className="text-success-500 w-[15px] h-[15px]" /> {paymentMethod}
                            </div>
                        </div>
                    </div>
                </PurchesAccordionTrigger>
                <PurchesAccordionContent>
                    <div className="flex flex-col md:flex-row gap-0 w-full mx-auto">
                        {/* Left side - Course listings */}
                        <div className="flex-1 border-r pr-0">
                            <div className="space-y-">
                                {courseDetails.map((course) => (<PurchaseItem
                                    key={course?.id}
                                    course={course}

                                />))}
                            </div>
                        </div>

                        <PurchaseOrderSummaryCard
                            courseDetails={courseDetails}
                            amount={amount}
                            cardDetails={cardDetails}
                            date={date}
                            paymentMethod
                        />
                    </div>
                </PurchesAccordionContent>
            </PurchesAccordionItem>
        </div>
    );
};

export default PurchaseCard;