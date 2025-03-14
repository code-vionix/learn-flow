"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const PurchesAccordion = AccordionPrimitive.Root

const PurchesAccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
))
PurchesAccordionItem.displayName = "PurchesAccordionItem"

const PurchesAccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-start justify-between py-4 font-medium transition-all ",
        className
      )}
      {...props}>
      {children}

      <div className={cn("bg-[#F5F7FA] text-black flex items-center text-lg transition-colors duration-200 [data-state=closed]:bg-[#0868f8] [data-state=open]:bg-orange-500")}>
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 [data-state=open]:rotate-180" />
      </div>


    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
PurchesAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const PurchesAccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

PurchesAccordionContent.displayName = AccordionPrimitive.Content.displayName

export { PurchesAccordion, PurchesAccordionItem, PurchesAccordionTrigger, PurchesAccordionContent }