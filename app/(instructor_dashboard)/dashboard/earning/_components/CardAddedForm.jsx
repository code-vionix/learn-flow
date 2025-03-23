"use client";

import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

export default function CardAddedForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onClose();
  };

  return (
    <form className="">
      <CardContent className="space-y-4 p-0">
        <div>
          <Label className="text-sm font-normal text-gray-950">Name</Label>
          <Input
            {...register("name", { required: "Name is required" })}
            placeholder="Name on card"
            className="h-12"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label className="text-sm font-normal text-gray-950">
            Card Number
          </Label>
          <Input
            {...register("cardNumber", { required: "Card number is required" })}
            placeholder="1234 5678 9012 3456"
            className="h-12"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-normal text-gray-950">MM / YY</Label>
            <Input
              {...register("expiry", { required: "Expiry date is required" })}
              placeholder="MM / YY"
              className="h-12"
            />
            {errors.expiry && (
              <p className="text-red-500 text-sm">{errors.expiry.message}</p>
            )}
          </div>
          <div>
            <Label className="text-sm font-normal text-gray-950">CVC</Label>
            <Input
              {...register("cvc", { required: "CVC is required" })}
              placeholder="CVC"
              className="h-12"
            />
            {errors.cvc && (
              <p className="text-red-500 text-sm">{errors.cvc.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            className="font-normal text-base text-gray-900 h-12"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            className="bg-primary-500 text-white hover:bg-primary-600 transition-all text-base font-semibold h-12"
          >
            Send Message
            <SendHorizontal className="ml-2" size={40} strokeWidth={2.25} />
          </Button>
        </div>
      </CardContent>
    </form>
  );
}
