"use client";

import { cn } from "@/lib/utils";
import { Check, CreditCard } from "lucide-react";
import { useState } from "react";

export default function PaymentMethodSelector({
  onPaymentChange,
  paymentData,
  onSelectedMethod,
  onSaveChange,
  isSave
}) {
 

  const savedCards = [
    {
      id: "card-1",
      type: "visa",
      last4: "****",
      expiry: "04/24",
      name: "Vako Shvili",
    },
    {
      id: "card-2",
      type: "mastercard",
      last4: "****",
      expiry: "04/24",
      name: "Vako Shvili",
    },
  ];

  const handlePaymentChange = (field, value) => {
    const updatedpayment = { ...paymentData.cardDetails, [field]: value };
    onPaymentChange(updatedpayment);
  };

  return (
    <div className="w-full ">
      <h2 className="text-xl font-medium mb-6">Payment Method</h2>
      {/* Saved Payment Methods */}
      <div className="space-y-2">
        {savedCards.map((card) => (
          <div
            key={card.id}
            className="flex items-center justify-between border p-4  cursor-pointer"
            onClick={() => onSelectedMethod(card.type)}
          >
            <div className="flex items-center space-x-4">
              {card.type === "visa" ? (
                <div className="text-blue-700 font-bold text-lg">VISA</div>
              ) : (
                <div className="flex">
                  <div className="h-6 w-8 rounded-full bg-red-500"></div>
                  <div className="h-6 w-8 rounded-full bg-yellow-500 -ml-4"></div>
                </div>
              )}
              <div>
                <span className="text-gray-700">
                  {card.type === "visa" ? "4855" : "5795 "}
                  {card.last4} {card.last4} {card.last4}
                </span>
                <span className="ml-4 text-gray-700">{card.expiry}</span>
                <span className="ml-4 text-gray-700">{card.name}</span>
              </div>
            </div>
            {paymentData.selectedPaymentMethod === card.type && (
              <Check className="h-5 w-5 text-green-500" />
            )}
          </div>
        ))}

        {/* PayPal Option */}
        <div
          className="flex items-center justify-between border p-4  cursor-pointer"
          onClick={() => onSelectedMethod("paypal")}
        >
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="h-6 w-6 bg-blue-800 rounded-l"></div>
              <div className="h-6 w-6 bg-blue-500 rounded-r"></div>
            </div>
            <span className="text-gray-700">
              You will be redirected to the PayPal site after reviewing your
              order.
            </span>
          </div>
          {paymentData.selectedPaymentMethod === "paypal" && (
            <Check className="h-5 w-5 text-green-500" />
          )}
        </div>

        {/* New Card Option */}
        <div
          className={cn(
            "flex items-center justify-between border p-4  cursor-pointer",
            paymentData.selectedPaymentMethod === "new-card"
              ? "border-green-500"
              : ""
          )}
          onClick={() => onSelectedMethod("new-card")}
        >
          <div className="flex items-center space-x-4">
            <CreditCard className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">New Payment Cards</span>
          </div>
          {paymentData.selectedPaymentMethod === "new-card" && (
            <Check className="h-5 w-5 text-green-500" />
          )}
        </div>
      </div>

      {/* New Card Form */}
      {paymentData.selectedPaymentMethod === "new-card" && (
        <div className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name on card"
              className="w-full border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={paymentData.cardDetails.name}
              onChange={(e) => handlePaymentChange("name", e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Card Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <CreditCard className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="cardNumber"
                placeholder="Card Number"
                className="w-full border border-gray-300  pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={paymentData.cardDetails.cardNumber}
                onChange={(e) =>
                  handlePaymentChange("cardNumber", e.target.value)
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expiry"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                MM / YY
              </label>
              <input
                type="text"
                id="expiry"
                placeholder="MM / YY"
                className="w-full border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={paymentData.cardDetails.expairy}
                onChange={(e) => handlePaymentChange("expairy", e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="cvc"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CVC
              </label>
              <input
                type="text"
                id="securityCode"
                placeholder="Security Code"
                className="w-full border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={paymentData.cardDetails.securityCode}
                onChange={(e) =>
                  handlePaymentChange("securityCode", e.target.value)
                }
              />
            </div>
          </div>

          <div
            className="flex items-center mt-4"
            id="isSave"
            value={paymentData.cardDetails.isSave}
            onChange={(e) =>
              handlePaymentChange("rememberCard", e.target.value)
            }
          >
            <div
              className={cn(
                "h-5 w-5 border  mr-2 flex items-center justify-center cursor-pointer",
                isSave
                  ? "bg-orange-500 border-orange-500"
                  : "border-gray-300"
              )}
              onClick={() => onSaveChange(!isSave)}
            >
              {isSave && <Check className="h-4 w-4 text-white" />}
            </div>
            <label
              className="text-sm text-gray-700 cursor-pointer"
              onClick={() => onSaveChange(!isSave)}
            >
              Remember this card, save it on my card list
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
