"use client"

import React, { useState } from 'react'
import { RecipientForm } from './RecipientForm'

import { NewCardForm } from './NewCardForm'
import CourseCard from './CourseCard'
import PaymentMethodSelector from './paymentMethod'

function CheckoutForm() {
  const [paymentData, setPaymentData] = useState({
    recipient: {
      name: "",
      email: "",
      message: "",
    },
    selectedPaymentMethod: "",
    cardDetails:{
      name:"",
      cardNumber:"",
      expairy:"",
      securityCode:""
    }
   
  });

  function handleRecipientChange(recipient) {
    setPaymentData((prev) => ({
      ...prev,
      recipient,
    }));
    console.log(paymentData);
  }

  function handlePaymentChange(cardDetails) {
    setPaymentData((prev) => ({
      ...prev,
      cardDetails,
    }));
    console.log(paymentData);
  }
  return (
    <div className="flex  justify-between  w-full  m-auto p-20 gap-20">
      <div className="flex flex-col gap-3">
        <h1 className="mb-2 text-3xl font-semibold">Gift Course</h1>
        <h3 className="py-3 font-medium text-xl">Recipients Information</h3>
        <RecipientForm onRecipientChange={handleRecipientChange} paymentData={paymentData} />

        <div className="space-y-6 w-full">
          <h2 className="text-lg font-medium text-gray-900">Payment Method</h2>
          <PaymentMethodSelector  onPaymentChange={handlePaymentChange} paymentData={paymentData} />

          {/* <NewCardForm onPaymentChange={handlePaymentChange} paymentData={paymentData}/> */}
        </div>
      </div>

      <div className="w-[488px]">
        <CourseCard />
      </div>
    </div>
  )
}

export default CheckoutForm