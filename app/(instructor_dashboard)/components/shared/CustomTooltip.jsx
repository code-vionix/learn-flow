import { formatDate } from "../../../../lib/formatters";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className=" bg-gray-900 p-3  text-center">
        <p className="text-xl font-semibold text-white">
          {payload[0].value.toLocaleString()}
        </p>
        <p className="text-sm text-gray-300">
          {formatDate(payload[0].payload.date)}
        </p>
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
