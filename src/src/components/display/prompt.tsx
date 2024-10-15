import { PROMPT } from "@/config/prompt";

export const Prompt = () => {
  const prompt = PROMPT;

  return <span className="absolute left-0 top-0 text-green-500">{prompt}</span>;
};
