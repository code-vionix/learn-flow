"use client";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ModalForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-black">Teacher:</label>
        <Select onValueChange={(value) => setValue("teacher", value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="teacher1">Teacher 1</SelectItem>
            <SelectItem value="teacher2">Teacher 2</SelectItem>
          </SelectContent>
        </Select>
        {errors.teacher && (
          <p className="text-red-500 text-sm">Teacher is required.</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-black">Message:</label>
        <Textarea
          className="h-32 resize-none"
          placeholder="Write your message here..."
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">Message is required.</p>
        )}
      </div>

      <div className="flex justify-between">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Cancel
          </Button>
        </DialogClose>

        <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
          Send Message
          <SendHorizontal className="ml-1" size={20} />
        </Button>
      </div>
    </form>
  );
};

export default ModalForm;
