"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import { MoveDown } from "lucide-react"

const PurchesAccordion = AccordionPrimitive.Root

const PurchesAccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-b transition-shadow duration-200",
      { "!shadow-xl": props['data-state'] === 'open' },
      className
    )}
    {...props}
  />
))
PurchesAccordionItem.displayName = "PurchesAccordionItem"

const PurchesAccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 md:items-center p-4 justify-between [&[data-state=open]]:border-b pb-3 transition-all [&[data-state=open]>span]:bg-primary-500 [&[data-state=open]>span]:text-white [&[data-state=open]>span>svg]:rotate-180",
        className
      )}
      {...props}>
      <div className="w-[270px] md:w-[90%]">
        {children}
      </div>
      <span className="bg-[#F5F7FA] w-[36px] h-[36px] md:w-[48px] md:h-[48px] text-black flex items-center text-lg transition-colors duration-200">
        <MoveDown className="h-4 w-4 m-auto shrink-0 transition-transform duration-200" />
      </span>
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