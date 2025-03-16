"use client";

import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
// import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })

export function RecipientForm({ onRecipientChange, paymentData }) {
  const handleRecipientChange = (field, value) => {
    const updatedRecipient = { ...paymentData.recipient, [field]: value };
    onRecipientChange(updatedRecipient);
  };

  const form = useForm();

  return (
    <Form {...form}>
      <form className="space-y-3 text-sm font-medium text-gray-400">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900 text-sm">
                Recipient's Name
              </FormLabel>
              <FormControl className="w-[580px] h-12">
                <Input
                  className="text-gray-400"
                  placeholder="Full Name"
                  {...field}
                  id="name"
                  value={paymentData.recipient.name}
                  onChange={(e) =>
                    handleRecipientChange("name", e.target.value)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900 text-sm">
                Recipient's Email
              </FormLabel>
              <FormControl className="w-[580px] h-12">
                <Input
                  placeholder="Email"
                  {...field}
                  id="email"
                  value={paymentData.recipient.email}
                  onChange={(e) =>
                    handleRecipientChange("email", e.target.value)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900 text-sm">
                Gift Message
              </FormLabel>
              <FormControl className="w-[580px] ">
                <Textarea
                  className="text-gray-900 h-32"
                  placeholder="Add your personal message here..."
                  {...field}
                  id="message"
                  value={paymentData.recipient.message}
                  onChange={(e) =>
                    handleRecipientChange("message", e.target.value)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
