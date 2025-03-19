import {
  AlarmClock,
  BarChart2,
  Clock,
  CurrencyDollar,
  Facebook,
  FileCode,
  FileText,
  Layers,
  Link2,
  Mail,
  Monitor,
  Trophy,
  Twitter,
  Users,
  WhatsApp,
} from "lucide-react";

export default function CourseSidebar({
  price,
  originalPrice,
  discount,
  daysLeft,
  duration,
  level,
  studentsEnrolled,
  language,
  subtitleLanguage,
}) {
  return (
    <div className="w-[424px] bg-white border border-gray-200 rounded-lg shadow-lg p-6 space-y-6">
      {/* Price Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold">${price}</span>
            <span className="text-gray-500 line-through">${originalPrice}</span>
          </div>
          <span className="bg-primary-900 text-primary-500 px-3 py-2 rounded text-sm font-medium">
            {discount}% OFF
          </span>
        </div>
        <div className="flex items-center gap-2 text-red-500">
          <AlarmClock className="w-5 h-5" />
          <span className="text-sm font-medium">
            {daysLeft} days left at this price!
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <button className="w-full bg-primatext-primary-500 text-white py-4 rounded-lg font-semibold hover:bg-primary-600 transition">
        Add To Cart
      </button>
      <button className="w-full bg-primary-900 text-primary-500 py-4 rounded-lg font-semibold hover:bg-primary-300 transition">
        Buy Now
      </button>

      {/* Small Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 py-2 px-4 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition">
          Add To Wishlist
        </button>
        <button className="flex-1 py-2 px-4 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition">
          Gift Course
        </button>
      </div>

      <p className="text-sm text-gray-600 text-center">
        Note: All courses have a 30-day money-back guarantee
      </p>

      {/* Course Info */}
      <div className="space-y-4 border-t border-b border-gray-200 py-6">
        {[
          { icon: Clock, label: "Course Duration", value: duration },
          { icon: BarChart2, label: "Course Level", value: level },
          { icon: Users, label: "Students Enrolled", value: studentsEnrolled },
          { icon: FileText, label: "Language", value: language },
          {
            icon: FileText,
            label: "Subtitle Language",
            value: subtitleLanguage,
          },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon className="w-6 h-6 text-gray-400" />
              <span>{label}</span>
            </div>
            <span className="text-gray-600">{value}</span>
          </div>
        ))}
      </div>

      {/* Course Features */}
      <div className="space-y-4">
        <h3 className="font-medium">This course includes:</h3>
        <ul className="space-y-3">
          {[
            { icon: Clock, text: "Lifetime access" },
            { icon: CurrencyDollar, text: "30-day money-back guarantee" },
            { icon: FileCode, text: "Free exercises & downloadable resources" },
            { icon: Trophy, text: "Shareable certificate of completion" },
            { icon: Monitor, text: "Access on mobile, tablet, and TV" },
            { icon: FileText, text: "English subtitles" },
            { icon: Layers, text: "100% online course" },
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3">
              <Icon className="w-6 h-6 text-primary-500" />
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Share Section */}
      <div className="pt-6 space-y-4 border-t border-gray-200">
        <h3 className="font-medium">Share this course:</h3>
        <div className="flex gap-2">
          {[
            { icon: Link2, label: "Copy Link" },
            { icon: Facebook, label: "Facebook" },
            { icon: Twitter, label: "Twitter" },
            { icon: Mail, label: "Email" },
            { icon: WhatsApp, label: "WhatsApp" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-gray-700" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
