"use client";

import React, { useState } from "react";
import { RecipientForm } from "./RecipientForm";

import CourseCard from "./CourseCard";
import PaymentMethodSelector from "./paymentMethod";

function CheckoutForm({ isGift }) {
  const initialState = {
    recipient: {
      name: "",
      email: "",
      message: "",
    },
    selectedPaymentMethod: "",
    cardDetails: {
      name: "",
      cardNumber: "",
      expairy: "",
      securityCode: "",
    },
    isSave: false,
    totalPrice: "",
  };
  const [paymentData, setPaymentData] = useState(initialState);
  const [isSave, setIsSave] = useState(false);

  function handleRecipientChange(recipient) {
    setPaymentData((prev) => ({
      ...prev,
      recipient,
    }));
  }

  function handlePaymentChange(cardDetails) {
    setPaymentData((prev) => ({
      ...prev,
      cardDetails,
    }));
  }

  function handleSelectedMethod(selectedPaymentMethod) {
    setPaymentData((prev) => ({
      ...prev,
      selectedPaymentMethod,
    }));
  }
  function handleSaveChange(value) {
    setIsSave(value);
    setPaymentData((prev) => ({
      ...prev,
      isSave: value,
    }));
  }

  function handleComplectPayment(totalPrice) {
    setPaymentData((prev) => ({
      ...prev,
      totalPrice,
    }));

    console.log(paymentData);

    setIsSave(false);
    setPaymentData(initialState);
  }

  return (
    <div className="flex  justify-between  w-[1320px]  m-auto p-32 gap-20 overflow-hidden">
      <div className="flex flex-col gap-3">
        {isGift && (
          <>
            <h1 className="mb-2 text-3xl font-semibold">Gift Course</h1>
            <h3 className="py-3 font-medium text-xl">Recipients Information</h3>
            <RecipientForm
              onRecipientChange={handleRecipientChange}
              paymentData={paymentData}
            />
          </>
        )}

        <div className="space-y-6 w-full">
          <PaymentMethodSelector
            onSaveChange={handleSaveChange}
            isSave={isSave}
            onPaymentChange={handlePaymentChange}
            paymentData={paymentData}
            onSelectedMethod={handleSelectedMethod}
          />
        </div>
      </div>

      <div className="w-full">
        <CourseCard onSubmit={handleComplectPayment} />
      </div>
    </div>
  );
}

export default CheckoutForm;
