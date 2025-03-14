"use client"

// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
// import { z } from "zod"


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })





export function NewCardForm({onPaymentChange,paymentData}) {


  const handlePaymentChange = (field, value) => {
    const updatedPayment = { ...paymentData.cardDetails, [field]: value };
   onPaymentChange(updatedPayment)
  };


  const form = useForm()

  const onSubmit=(data)=>{
    console.log(data);

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 text-sm font-medium text-gray-400">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="text-gray-900 text-sm">Name</FormLabel>
              <FormControl className="w-[580px] h-12">
                <Input className="text-gray-400"  placeholder="Card Name"  {...field} 
                  id="name"
                  value={paymentData.cardDetails.name}
                 onChange={(e) => handleRecipientChange("name", e.target.value)}/>
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
              <FormLabel className="text-gray-900 text-sm">Card Number</FormLabel>
              <FormControl className="w-[580px] h-12">
                <Input placeholder="Card Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


<div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="cardDetails.expiry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>MM / YY</FormLabel>
              <FormControl className="h-12">
                <Input
                  placeholder="MM / YY"
                  {...field}
                  // onChange={(e) => onCardDetailsChange("expiry", e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cardDetails.cvc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CVC</FormLabel>
              <FormControl className="h-12">
                <Input
                  placeholder="Security Code"
                  {...field}
                  // onChange={(e) => onCardDetailsChange("cvc", e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="cardDetails.saveCard"
        render={({ field }) => (
          <FormItem className="flex items-center space-x-2">
            <FormControl>
              <Checkbox
                checked={field.value}
                // onCheckedChange={(checked) => onCardDetailsChange("saveCard", checked)}
              />
            </FormControl>
            <FormLabel className="text-sm text-gray-700">
              Remember this card, save it on my card list
            </FormLabel>
            <FormMessage />
          </FormItem>
        )}
      />
      </form>
    </Form>
   
  );
}







