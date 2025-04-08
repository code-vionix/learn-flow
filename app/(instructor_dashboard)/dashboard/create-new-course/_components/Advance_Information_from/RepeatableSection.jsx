import { Plus } from "lucide-react";
import { useState } from "react";

export default function RepeatableSection({ title, index }) {
  const [items, setItems] = useState([""]);

  const handleAddItem = () => {
    if (items.length < 8) {
      setItems((prev) => [...prev, ""]);
    }
  };

  const handleInputChange = (value, idx) => {
    const newItems = [...items];
    newItems[idx] = value;
    setItems(newItems);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-medium text-gray-900">
          {title} ({items.length}/8)
        </h2>
        <button
          onClick={handleAddItem}
          disabled={items.length >= 8}
          className={`flex items-center text-sm ${
            items.length >= 8
              ? "text-gray-300 cursor-not-allowed"
              : "text-orange-500 hover:underline"
          }`}
        >
          <Plus className="w-4 h-4 mr-1" />
          Add new
        </button>
      </div>

      {items.map((text, itemIndex) => (
        <div key={itemIndex} className="mb-4">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              {itemIndex + 1 < 10 ? `0${itemIndex + 1}` : itemIndex + 1}
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              value={text}
              onChange={(e) => handleInputChange(e.target.value, itemIndex)}
              className="w-full p-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder={
                index === 0
                  ? "What you will teach in this course..."
                  : index === 1
                    ? "Who this course is for..."
                    : "What is your course requirement..."
              }
              maxLength={120}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
              {text.length}/120
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
