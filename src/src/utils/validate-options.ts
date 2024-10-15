export const validateOptions = (value: string) => {
  const option = value.trim().replaceAll("-", "");

  if (option.length >= 2) return false;
  if (option !== "n") return false;
  return true;
};
