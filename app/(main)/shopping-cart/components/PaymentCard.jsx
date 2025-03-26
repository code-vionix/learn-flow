"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

function PaymentCard({
  couponCode,
  setCouponApplied,
  setCouponCode,
  couponApplied,
  subtotal,
  discountPercentage,
  discountAmount,
  taxes,
  totalPrice,
  onPayment
}) {
  return (
    <div className="w-[25rem] flex flex-col gap-5">
      <div className="mt-2 border-b-[1px] flex flex-col gap-4">
        <h2 className="text-gray-900 text-xl font-normal">Order Summery</h2>
        <div className="flex justify-between">
          <p className="text-gray-600">subtotal</p>
          <p className="text-gray-900 font-semibold mb-2">
            ${subtotal.toFixed(2)} USD
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Coupon Discount</p>
          <p className="text-gray-900 font-semibold mb-2">
            {discountPercentage}%
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Taxs</p>
          <p className="text-gray-900 font-semibold mb-2">
            ${taxes.toFixed(2)} USD
          </p>
        </div>
      </div>
      <div className="flex justify-between  ">
        <p className="text-gray-900 font-normal  text-xl">Total</p>
        <h1 className="text-gray-900 font-semibold text-2xl">
          {totalPrice.toFixed(2)} USD
        </h1>
      </div>
      <div className="border-t-[1px] flex flex-col gap-4 pb-3">
        <h2>Apply coupon code</h2>
        <div className="mt-4 flex">
          <Input
            placeholder="Coupon code"
            className=" h-10"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <Button
            className="h-10"
            onClick={() => {
              setCouponApplied(couponCode === "DISCOUNT8");
              setCouponCode("");
            }}
          >
            Apply
          </Button>
        </div>
      </div>
      <Button
        onClick={() => onPayment(totalPrice)}
        className=" w-[19.5rem] bg-primary-500 text-lg p text-white px-6 py-6 hover:bg-primary-600"
      >
        Proceed to checkout <ArrowRight color="white" size={30}/>
      </Button>
    </div>
  );
}

export default PaymentCard;
