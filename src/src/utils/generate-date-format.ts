export const generateUTFDateFormat = () => {
  const result = new Date();
  const hours = result.getHours();

  return [
    result.toUTCString().replace(",", "").replace("GMT", "UTC"),
    hours >= 12 ? "PM" : "AM",
  ].join(" ");
};
