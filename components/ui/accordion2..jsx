"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion2 = AccordionPrimitive.Root

const AccordionItem2 = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
))
AccordionItem2.displayName = "AccordionItem"

const AccordionTrigger2 = React.forwardRef(({ className, children, info, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:!bg-[#F5F7FA] [&[data-state=open]]:!text-[#FF6636] ",
                className
            )}
            {...props}>

            <div className="flex items-center gap-2 w-full">
                <ChevronDown className="h-4 arrow w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" />
                {children}
            </div>

            {/* {info} */}
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTrigger2.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent2 = React.forwardRef(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}>
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
))

AccordionContent2.displayName = AccordionPrimitive.Content.displayName

export { Accordion2, AccordionItem2, AccordionTrigger2, AccordionContent2 }