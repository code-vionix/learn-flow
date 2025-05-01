export default function Badge({ color, text }) {
  const colors = {
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    yellow: "bg-yellow-100 text-yellow-800",
    pink: "bg-pink-100 text-pink-800",
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full ${colors[color]}`}>
      {text}
    </span>
  );
}
