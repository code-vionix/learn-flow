'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const mockUsers = [
    { id: 1, name: "John Doe", role: "UI/UX Designer", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Jane Smith", role: "Frontend Developer", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, name: "Mike Johnson", role: "Backend Developer", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, name: "Emily White", role: "Data Scientist", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 5, name: "Chris Evans", role: "DevOps Engineer", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: 6, name: "Olivia Brown", role: "Product Manager", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 7, name: "Liam Wilson", role: "QA Engineer", avatar: "https://randomuser.me/api/portraits/men/7.jpg" },
    { id: 8, name: "Sophia Lee", role: "Mobile Developer", avatar: "https://randomuser.me/api/portraits/women/8.jpg" },
];


const PublishCourseForm = () => {
    const [search, setSearch] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [congratsMessage, setCongratsMessage] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);

    const filteredUsers = mockUsers.filter(
        user =>
            user?.name.toLowerCase().includes(search.toLowerCase()) &&
            !selectedUsers.some(selected => selected?.id === user.id)
    );

    const handleSelectUser = (user) => {
        setSelectedUsers(prev => [...prev, user]);
        setSearch('');
    };

    const handleRemoveUser = (id) => {
        setSelectedUsers(prev => prev.filter(user => user.id !== id));
    };

    const handleSubmit = () => {
        const data = {
            instructors: selectedUsers?.map(user => user.id),
            welcomeMessage,
            congratsMessage
        }
        console.log('data:', data);
    };

    return (
        <div>
            <div className="md:px-8 px-2 flex items-center justify-between mb-6 border-b pb-4">
                <h1 className="text-xl font-semibold">Publish Course</h1>
                <div className="flex gap-2">
                    <Button variant="outline" className="bg-white hover:bg-primary-500 duration-200 hover:text-white">Save</Button>
                    <Button variant="outline" className="!bg-primary-100 text-primary-500 hover:text-white hover:!bg-primary-500 duration-200">Save & Preview</Button>
                </div>
            </div>

            <div className="space-y-6 md:px-8 px-2">
                {/* Message Section */}
                <div>
                    <h2 className="text-base font-medium mb-4">Message</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Welcome Message</label>
                            <Textarea onChange={e => setWelcomeMessage(e.target.value)} placeholder="Enter course starting message here..." className="min-h-[120px] resize-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Congratulations Message</label>
                            <Textarea onChange={e => setCongratsMessage(e.target.value)} placeholder="Enter your course completed message here..." className="min-h-[120px] resize-none" />
                        </div>
                    </div>
                </div>

                {/* Instructor Search Section */}
                <div>
                    <h2 className="text-base font-medium mb-4">Add Instructor</h2>
                    <div className="relative w-full md:w-1/2">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search by username"
                            className="pl-9"
                        />
                        {search && filteredUsers.length > 0 && (
                            <ul className="absolute z-10 mt-1 w-full bg-white border rounded shadow">
                                {filteredUsers.map(user => (
                                    <li
                                        key={user.id}
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSelectUser(user)}
                                    >
                                        {user.name} - <span className="text-xs text-gray-500">{user.role}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Selected Instructors */}
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-3 mt-4">
                        {selectedUsers.map(user => (
                            <div key={user.id} className="flex justify-between items-center gap-2 bg-gray-100  p-4">
                                <div className="flex items-center gap-4cha">
                                    <div className="relative w-10 h-10">
                                        <Image src={user.avatar} alt="Instructor avatar" width={32} height={32} className="rounded-full w-full h-full border" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">{user.name}</p>
                                        <p className="text-xs text-muted-foreground">{user.role}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="h-6 w-6 ml-2" onClick={() => handleRemoveUser(user.id)}>
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="md:px-8 px-2 flex justify-between items-center mt-10">
                <Button variant="outline">Prev Step</Button>
                <Button onClick={handleSubmit} className="bg-primary-500 hover:bg-primary-600">Submit For Review</Button>
            </div>
        </div>
    );
};

export default PublishCourseForm;
