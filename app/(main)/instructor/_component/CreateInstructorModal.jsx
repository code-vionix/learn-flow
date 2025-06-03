"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useAddNewInstructorMutation } from "@/store/api/instructorApi";

export default function InstructorModal() {
    const { data: session } = useSession();
    const [open, setOpen] = useState(false);
    const [addNewInstructor, { isLoading }] = useAddNewInstructorMutation();

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
            setOpen(false);
        } catch (error) {
            toast.error("Something went wrong!");
            console.error("Error:", error);
            setOpen(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="text-center mx-auto lg:mx-0 bg-primary-500 duration-300 mt-6 hover:bg-primary-400 text-white font-regular px-2 py-2 md:px-4 md:py-3 lg:w-[191px] text-base lg:text-[18px]">
                    GET START
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl h-[600px] rounded-lg overflow-y-auto">
                <DialogHeader>
                    <div className="w-full flex items-center space-x-4 p-4 bg-gray-50 ">
                        <Avatar className="h-16 w-16">
                            <AvatarImage
                                src={session?.user?.image || "https://avatar.iran.liara.run/public/28"}
                                alt="user avatar"
                            />
                            <AvatarFallback className="text-lg">
                                {session?.user?.name?.slice(0, 1)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">
                                {session?.user?.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {session?.user?.email}
                            </p>
                        </div>
                    </div>
                </DialogHeader>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <div className="space-y-4 py-4">
                        {/* Bio */}
                        <div className="space-y-1">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                                id="bio"
                                name="bio"
                                value={form.bio}
                                onChange={handleChange}
                                className="border border-gray-300 h-24"
                                placeholder="Enter your bio"
                            />
                        </div>

                        {/* About */}
                        <div className="space-y-1">
                            <Label htmlFor="about">About</Label>
                            <Textarea
                                id="about"
                                name="about"
                                value={form.about}
                                onChange={handleChange}
                                className="border border-gray-300 h-24"
                                placeholder="Tell us about yourself"
                            />
                        </div>


                        <div className="grid md:grid-cols-2 gap-4">
                            {/* Website */}
                            <div className="space-y-1">
                                <Label htmlFor="website">Website</Label>
                                <Input
                                    id="website"
                                    name="website"
                                    value={form.website}
                                    onChange={handleChange}
                                    className="border border-gray-300"
                                    placeholder="Enter your website"
                                />
                            </div>

                            {/* Facebook */}
                            <div className="space-y-1">
                                <Label htmlFor="facebook">Facebook</Label>
                                <Input
                                    id="facebook"
                                    name="facebook"
                                    value={form.facebook}
                                    onChange={handleChange}
                                    className="border border-gray-300"
                                    placeholder="Facebook profile link"
                                />
                            </div>

                            {/* Instagram */}
                            <div className="space-y-1">
                                <Label htmlFor="instagram">Instagram</Label>
                                <Input
                                    id="instagram"
                                    name="instagram"
                                    value={form.instagram}
                                    onChange={handleChange}
                                    className="border border-gray-300"
                                    placeholder="Instagram profile link"
                                />
                            </div>

                            {/* LinkedIn */}
                            <div className="space-y-1">
                                <Label htmlFor="linkedin">LinkedIn</Label>
                                <Input
                                    id="linkedin"
                                    name="linkedin"
                                    value={form.linkedin}
                                    onChange={handleChange}
                                    className="border border-gray-300"
                                    placeholder="LinkedIn profile link"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {/* Twitter */}
                            <div className="space-y-1">
                                <Label htmlFor="twitter">Twitter</Label>
                                <Input
                                    id="twitter"
                                    name="twitter"
                                    value={form.twitter}
                                    onChange={handleChange}
                                    className="border border-gray-300"
                                    placeholder="Twitter profile link"
                                />
                            </div>

                            {/* WhatsApp */}
                            <div className="space-y-1">
                                <Label htmlFor="whatsapp">WhatsApp</Label>
                                <Input
                                    id="whatsapp"
                                    name="whatsapp"
                                    value={form.whatsapp}
                                    onChange={handleChange}
                                    className="border border-gray-300"
                                    placeholder="WhatsApp number or link"
                                />
                            </div>
                        </div>

                        {/* YouTube */}
                        <div className="space-y-1">
                            <Label htmlFor="youtube">YouTube</Label>
                            <Input
                                id="youtube"
                                name="youtube"
                                value={form.youtube}
                                onChange={handleChange}
                                className="border border-gray-300"
                                placeholder="YouTube channel link"
                            />
                        </div>

                        {/* Submit */}
                        <div>
                            <Button
                                type="submit"
                                className="w-full bg-primary-500 hover:bg-primary-600 text-white mt-2"
                                disabled={isLoading}
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
