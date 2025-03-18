"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import visa from "@/public/visa.svg";
import paypal from "@/public/paypal.svg";
import mastercard from "@/public/mastercard.svg";

const paymentMethods = [
  {
    id: "visa",
    type: "Visa",
    last4: "4855",
    exp: "04/24",
    name: "Vako Shvili",
    logo: visa,
  },
  {
    id: "mastercard",
    type: "MasterCard",
    last4: "2855",
    exp: "04/24",
    name: "Vako Shvili",
    logo: mastercard,
  },
  {
    id: "paypal",
    type: "PayPal",
    logo: paypal,
    message:
      "You will be redirected to the PayPal site after reviewing your order.",
  },
];

export default function WithdrawMoney() {
  const [selectedMethod, setSelectedMethod] = useState("visa");

  return (
    <Card className="w-full max-w-lg p-6 border rounded-none shadow-sm">
      <h2 className="text-gray-900 text-base font-medium border-b pb-3">
        Withdraw your money
      </h2>
      <p className="text-sm font-normal text-gray-400 mt-3">Payment method:</p>
      <div className="space-y-3 mt-4">
        {paymentMethods?.map((method) => (
          <div
            key={method.id}
            className={`flex items-center justify-between hover:shadow-md h-12 w-full py-2 px-4 border cursor-pointer transition-all ${
              selectedMethod === method.id
                ? "border-green-500 bg-green-50"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedMethod(method.id)}
          >
            <div className="flex items-center space-x-3">
              <div>
                {method.type === "PayPal" ? (
                  // paypalCard name akta component banaben
                  <div className="flex items-center gap-3">
                    <Image src={method.logo} width={40} height={40} alt="" />
                    <p className="text-sm text-gray-500">{method.message}</p>
                  </div>
                ) : (
                  // paymentMethod name akta component banaben
                  <div
                    className={`${
                      selectedMethod === method.id
                        ? "text-gray-900 font-medium"
                        : "text-gray-700 font-normal"
                    } text-sm flex gap-6 justify-between pr-3 items-center `}
                  >
                    <Image
                      className="object-fill block"
                      src={method.logo}
                      width={40}
                      height={40}
                      alt="logo"
                    />
                    <p>{method.last4} **** **** **** ****</p>
                    <p>{method.exp}</p>
                    <p> {method.name}</p>
                  </div>
                )}
              </div>
            </div>
            {selectedMethod === method.id && (
              <CheckCircle className="text-green-500 w-5 h-5" />
            )}
          </div>
        ))}
      </div>

      {/* akta component totalAmount name */}
      <div className="flex justify-between items-center">
        <div>
          <p className="mt-6 text-lg font-bold text-gray-900">$16,593.00</p>
          <p className="text-sm text-gray-700">Current Balance</p>
        </div>
        {/* akta component banaben withdraw button name than dailog add korben */}
        <Button className="mt-4  bg-primary-500 hover:bg-primary-600 text-white p-6 ">
          Withdraw Money
        </Button>
      </div>
    </Card>
  );
}
