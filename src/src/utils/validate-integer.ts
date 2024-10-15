export const validateInteger = (value: string): boolean => {
  const num = parseInt(value, 10);

  if (isNaN(num)) return false;
  if (!Number.isInteger(num)) return false;
  if (!Number.isFinite(num)) return false;
  if (num.toString() !== value) return false;

  return true;
};
