"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ModalForm from "./ModalForm";

const ComposeButton = () => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-semibold text-lg">Messages</h2>

      {/* Dialog with Button as Trigger */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-2 text-secondary-500 bg-secondary-100 hover:bg-secondary-200">
            + Compose
          </Button>
        </DialogTrigger>

        {/* Ensure DialogContent only renders when needed */}
        <DialogContent>
          <DialogHeader className="border-b pb-6">
            <DialogTitle>New Message</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <ModalForm />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ComposeButton;
