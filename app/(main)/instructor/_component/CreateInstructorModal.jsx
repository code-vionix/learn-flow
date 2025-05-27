"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useAddNewInstructorMutation } from "@/store/api/instructorApi";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InstructorModal() {
    const { data: session } = useSession();

    const [open, setOpen] = useState(false); // ✅ modal open/close state

    const [form, setForm] = useState({
        bio: "",
        about: "",
        website: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        twitter: "",
        whatsapp: "",
        youtube: "",
    });

    const [addNewInstructor, { isLoading }] = useAddNewInstructorMutation(); // ✅ use loading state

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await addNewInstructor(form).unwrap();
            toast.success("Instructor created successfully!");
            setForm({
                bio: "",
                about: "",
                website: "",
                facebook: "",
                instagram: "",
                linkedin: "",
                twitter: "",
                whatsapp: "",
                youtube: "",
            });
            setOpen(false); // ✅ close modal
        } catch (error) {
            toast.error("Something went wrong!");
            console.error("Error submitting form:", error);
            setOpen(false); // ✅ also close on error (optional)
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="text-center mx-auto lg:mx-0 bg-primary-500 duration-300 mt-6 hover:bg-primary-400 text-white font-regular px-2 py-2 md:px-4 md:py-3 lg:w-[191px] text-base lg:text-[18px]">
                    GET START
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>Instructor Info</DialogTitle>
                </DialogHeader>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <div className="grid gap-4 md:grid-cols-2 py-4">
                        {Object.keys(form).map((key) => (
                            <div key={key} className="md:col-span-1 space-y-1">
                                <Label htmlFor={key} className="capitalize">
                                    {key}
                                </Label>
                                {key === "bio" || key === "about" ? (
                                    <Textarea
                                        id={key}
                                        name={key}
                                        value={form[key]}
                                        onChange={handleChange}
                                        className="border border-gray-300 focus:border-primary-500 focus:ring-primary-500 h-24"
                                    />
                                ) : (
                                    <Input
                                        className="border border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                                        id={key}
                                        name={key}
                                        value={form[key]}
                                        onChange={handleChange}
                                    />
                                )}
                            </div>
                        ))}
                        <div className="md:col-span-2">
                            <Button
                                type="submit"
                                className="w-full bg-primary-500 hover:bg-primary-600 text-white mt-2"
                                disabled={isLoading} // ✅ disable button when loading
                            >
                                {isLoading ? "Submitting..." : "Submit"}
                            </Button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
