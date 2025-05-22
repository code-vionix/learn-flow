export const formatValue = (value) => `${(value / 1000).toFixed(1)}k`;
export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
