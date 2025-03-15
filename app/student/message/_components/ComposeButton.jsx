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
import { useState } from "react";

const ComposeButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-semibold text-lg">Messages</h2>
      <Button
        onClick={handleOpen}
        className="mt-2 text-secondary-500 bg-secondary-100 hover:bg-secondary-200"
      >
        + Compose
      </Button>

      {/* Dialog with Button as Trigger */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader className="border-b pb-6">
            <DialogTitle>New Message</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <ModalForm OnClose={handleClose} />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ComposeButton;
