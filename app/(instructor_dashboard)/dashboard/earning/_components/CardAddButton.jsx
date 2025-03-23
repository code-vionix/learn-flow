"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import React, { useState } from "react";
import CardAddedForm from "./CardAddedForm";

const CardAddButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);
  return (
    <>
      <div className="mt-4 border border-dashed p-4 pb-5 text-center flex items-center justify-center  cursor-pointer hover:bg-gray-100">
        <Button
          onClick={handleOpen}
          variant="ghost"
          className="text-base text-gray-900"
        >
          <CirclePlus
            className="mr-2 text-primary-500"
            size={40}
            strokeWidth={2.25}
          />
          Add new card
        </Button>
      </div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="p-3">
          <DialogHeader className="border-b pb-3">
            <DialogTitle className="text-base font-medium text-gray-900">
              New Payment Card
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <CardAddedForm onClose={handleClose} />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardAddButton;
