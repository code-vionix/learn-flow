import {
  Area,
  AreaChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

export default function CustomChart({
  data,
  xAxisKey,
  yAxisDomain,
  areas,
  referenceLine,
  tickFormatterX,
  tickFormatterY,
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        <defs>
          {areas.map(({ key, color }) => (
            <linearGradient
              key={key}
              id={`${key}Gradient`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={color} stopOpacity={0.4} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>

        <XAxis
          dataKey={xAxisKey}
          tickFormatter={tickFormatterX}
          stroke="#9CA3AF"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          tickFormatter={tickFormatterY}
          stroke="#9CA3AF"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          domain={yAxisDomain}
        />
        <Tooltip content={<CustomTooltip />} />

        {referenceLine && (
          <ReferenceLine
            x={referenceLine}
            stroke="#5B5FEF"
            strokeDasharray="3 3"
            strokeWidth={1.5}
          />
        )}

        {areas.map(({ key, color }) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stroke={color}
            strokeWidth={2}
            fill={`url(#${key}Gradient)`}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}
