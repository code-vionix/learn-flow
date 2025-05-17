"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ArrowDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion3 = AccordionPrimitive.Root

const AccordionItem3 = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("border", className)}
        {...props}
    />
))
AccordionItem3.displayName = "AccordionItem3"

const AccordionTrigger3 = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <AccordionPrimitive.Header className="flex w-full">
            <AccordionPrimitive.Trigger
                ref={ref}
                className={cn(
                    "group flex w-full items-center justify-between py-4 font-medium transition-all",
                    "data-[state=open]:bg-gray-900 data-[state=open]:text-white",
                    className
                )}
                {...props}
            >
                <div className="flex items-center gap-2">{children}</div>
                <ArrowDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
)

AccordionTrigger3.displayName = "AccordionTrigger3"

const AccordionContent3 = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <AccordionPrimitive.Content
            ref={ref}
            className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:shadow-lg data-[state=open]:animate-accordion-down"
            {...props}
        >
            <div className={cn("pb-4 pt-0", className)}>{children}</div>
        </AccordionPrimitive.Content>
    )
)
AccordionContent3.displayName = "AccordionContent3"

export {
    Accordion3,
    AccordionItem3,
    AccordionTrigger3,
    AccordionContent3,
}
