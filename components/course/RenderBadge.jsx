import {
  FileText,
  MessageSquareText,
  Video,
  NotebookText,
  Paperclip,
} from "lucide-react";

const RenderBadge = ({ lesson }) => {
  const badges = [];

  if (lesson.content)
    badges.push({ label: "Content", icon: <FileText size={14} /> });
  if (lesson.caption)
    badges.push({ label: "Caption", icon: <MessageSquareText size={14} /> });
  if (lesson.videoUrl)
    badges.push({ label: "Video", icon: <Video size={14} /> });
  if (lesson.note && lesson.note.length > 0)
    badges.push({ label: "Note", icon: <NotebookText size={14} /> });
  if (lesson.attachment && lesson.attachment.length > 0)
    badges.push({ label: "Attachment", icon: <Paperclip size={14} /> });

  return (
    <div className="flex gap-2 items-center flex-wrap pl-5">
      {badges.map((badge, index) => (
        <span
          key={index}
          className="border border-primary-500 text-primary-500 text-xs font-medium px-2 py-1 rounded inline-flex items-center gap-1"
        >
          {badge.icon}
          {badge.label}
        </span>
      ))}
    </div>
  );
};

export default RenderBadge;
