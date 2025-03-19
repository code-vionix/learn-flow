import { Card } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export default function RatingChart({ chartData }) {
  return (
    <Card className="md:col-span-2   border-none bg-white p-0 px-0">
      <div className="h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FD8E1F" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <XAxis hide={true} />
            <YAxis domain={[3.5, 5]} hide={true} />
            <Line
              type="natural"
              dataKey="rating"
              stroke="#FD8E1F"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: "#FD8E1F" }}
              isAnimationActive={true}
              animationDuration={500}
            />
            <Area
              type="monotone"
              dataKey="rating"
              stroke="#FD8E1F"
              fill="url(#gradient)"
              strokeWidth={2}
              fullWidth={true}
              fullHeight={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
