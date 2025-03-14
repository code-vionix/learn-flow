import { format } from "date-fns"; // For formatting timestamps
import LeftStudentBar from "./LeftStudentBar";
import MainChatBox from "./MainChatBox";

const currentUserId = "user_456"; // Assuming the logged-in user is "Zafor"

const messages = [
  {
    id: "65f2d1b0a9b14c0012a3e123",
    sender: {
      id: "user_123",
      name: "Jane Cooper",
      avatar:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    receiver: { id: "user_456", name: "Zafor" },
    text: "Yeah sure, tellah sure, tellah sure, tellah sure, tell me Zafor",
    timestamp: "2025-03-14T10:15:30Z",
    status: "read",
  },
  {
    id: "65f2d1b0a9b14c0012a3e123",
    sender: {
      id: "user_123",
      name: "Jane Cooper",
      avatar:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    receiver: { id: "user_456", name: "Zafor" },
    text: "Yeah sure, tellah sure, tellah sure, tellah sure, tell me Zafor",
    timestamp: "2025-03-14T10:15:30Z",
    status: "read",
  },
  {
    id: "65f2d1b0a9b14c0012a3e124",
    sender: {
      id: "user_456",
      name: "Zafor",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    receiver: { id: "user_123", name: "Jane Cooper" },
    text: "I only have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lectubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lectubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lectubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time for this?",
    timestamp: "2025-03-14T10:16:00Z",
    status: "delivered",
  },
  {
    id: "65f2d1b0a9b14c0012a3e123",
    sender: {
      id: "user_123",
      name: "Jane Cooper",
      avatar:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    receiver: { id: "user_456", name: "Zafor" },
    text: "Yeah sure, tellah sure, tellah sure, tellah sure, tell me Zafor",
    timestamp: "2025-03-14T10:15:30Z",
    status: "read",
  },
  {
    id: "65f2d1b0a9b14c0012a3e124",
    sender: {
      id: "user_456",
      name: "Zafor",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    receiver: { id: "user_123", name: "Jane Cooper" },
    text: "I only have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your lecture. Can you give me some time fonly have a small doubt about your ve me some time for this?",
    timestamp: "2025-03-14T10:16:00Z",
    status: "delivered",
  },
];
const students = [
  {
    id: 1,
    name: "Jane Cooper",
    lastContent: "Yeah sure, tell me Zafor",
    isActive: false,
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Devon Lane",
    lastContent: "Let's catch up later!",
    isActive: true,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Floyd Miles",
    lastContent: "Did you check the new update?",
    isActive: false,
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Courtney Henry",
    lastContent: "I'll send you the details soon.",
    isActive: true,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Guy Hawkins",
    lastContent: "Good morning! How's your day?",
    isActive: false,
    avatar:
      "https://images.unsplash.com/photo-1549351236-caca0f174515?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Eleanor Pena",
    lastContent: "See you at the meeting.",
    isActive: true,
    avatar:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    name: "Darlene Robertson",
    lastContent: "Thanks for your help!",
    isActive: false,
    avatar:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    name: "Esther Howard",
    lastContent: "I'll call you later.",
    isActive: true,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 9,
    name: "Cameron Williamson",
    lastContent: "Are we still on for tonight?",
    isActive: true,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 10,
    name: "Brooklyn Simmons",
    lastContent: "Can you send me the document?",
    isActive: false,
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60",
  },
];

const RootChatBox = () => {
  return (
    <div className="grid grid-cols-3 gap-x-5 mt-5 ">
      {/* Sidebar */}

      <LeftStudentBar students={students} />

      {/* Chat Window */}
      <MainChatBox messages={messages} />
    </div>
  );
};

export default RootChatBox;
