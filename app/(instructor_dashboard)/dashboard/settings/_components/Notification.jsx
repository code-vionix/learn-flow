import { useSession } from 'next-auth/react';
import { useState } from 'react';

function Notification({ setInstructorInfo }) {
  const initialNotification = {
    buyCourse: false,
    writeReview: false,
    commentLecture: false,
    downloadNotes: false,
    replyComment: false,
    visitProfile: false,
    downloadFile: false,
  };
  const { data: session } = useSession();
  const [notifications, setNotifications] = useState(initialNotification);

  // onSubmit function with PUT request
  const onNotificationSubmit = async () => {
    try {
      const notificationId = session?.user?.id; // replace with dynamic notification ID
      const res = await fetch(`/api/v1/notification/${notificationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // if auth is required
        },
        body: JSON.stringify(notifications),
      });

      if (!res.ok) {
        throw new Error('Failed to update notification settings.');
      }

      const data = await res.json();
      console.log('Notification updated:', data);

      // Update the instructorInfo state with the new notification settings
      setInstructorInfo((prev) => ({
        ...prev,
        notifications,
      }));

      // Reset the notifications state to initial values after save
      setNotifications(initialNotification);
    } catch (error) {
      console.error('Error updating notification:', error.message);
    }
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Notifications
      </h2>

      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications.buyCourse}
            onChange={(e) =>
              setNotifications((prev) => ({
                ...prev,
                buyCourse: e.target.checked,
              }))
            }
            className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
          />
          <span className="text-gray-600">
            I want to know who buy my course.
          </span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications.writeReview}
            onChange={(e) =>
              setNotifications((prev) => ({
                ...prev,
                writeReview: e.target.checked,
              }))
            }
            className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
          />
          <span className="text-gray-900">
            I want to know who write a review on my course.
          </span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications.commentLecture}
            onChange={(e) =>
              setNotifications((prev) => ({
                ...prev,
                commentLecture: e.target.checked,
              }))
            }
            className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
          />
          <span className="text-gray-600">
            I want to know who commented on my lecture.
          </span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications.downloadNotes}
            onChange={(e) =>
              setNotifications((prev) => ({
                ...prev,
                downloadNotes: e.target.checked,
              }))
            }
            className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
          />
          <span className="text-gray-900">
            I want to know who download my lecture notes.
          </span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications.replyComment}
            onChange={(e) =>
              setNotifications((prev) => ({
                ...prev,
                replyComment: e.target.checked,
              }))
            }
            className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
          />
          <span className="text-gray-900">
            I want to know who replied on my comment.
          </span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications.visitProfile}
            onChange={(e) =>
              setNotifications((prev) => ({
                ...prev,
                visitProfile: e.target.checked,
              }))
            }
            className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
          />
          <span className="text-gray-600">
            I want to know daily how many people visited my profile.
          </span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications.downloadFile}
            onChange={(e) =>
              setNotifications((prev) => ({
                ...prev,
                downloadFile: e.target.checked,
              }))
            }
            className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
          />
          <span className="text-gray-900">
            I want to know who download my lecture attach file.
          </span>
        </label>

        <div>
          <button
            onClick={onNotificationSubmit}
            className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-md hover:bg-orange-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
