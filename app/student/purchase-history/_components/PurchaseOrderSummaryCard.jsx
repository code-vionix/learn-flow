import { Play } from "lucide-react";
import { DollarSign } from "lucide-react";
import { CreditCard } from "lucide-react";

const PurchaseOrderSummaryCard = ({ courseDetails, amount, cardDetails, date, paymentMethod }) => {
    return (
        <div className="w-full md:w-[536px] m-auto  flex-shrink-0 p-6">
            <div className="mb-3 text-lg font-medium  text-gray-800">{date}</div>

            <div className="flex md:flex-row flex-col gap-2 mb-4">
                <div className="flex items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <Play size={16} />
                    </div>
                    <span className="ml-3 text-gray-700">{courseDetails.length} Courses</span>
                </div>

                <div className="flex items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <DollarSign size={16} />
                    </div>
                    <span className="ml-3 text-gray-700">${amount} USD</span>
                </div>

                <div className="flex items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <CreditCard size={16} />
                    </div>
                    <span className="ml-3 text-gray-700">{paymentMethod || 'N/A'}</span>
                </div>
            </div>

            <div className="space-y-2">
                <div className="text-sm text-gray-600"> {cardDetails.name}</div>
                <div className="flex justify-between">
                    <div className="text-sm font-medium">{cardDetails.number}</div>
                    <div className="text-sm text-gray-600">{cardDetails.expiry}</div>
                </div>
            </div>
        </div>);
};

export default PurchaseOrderSummaryCard;