import { ICommand } from "@/types/interface/command";

export const parseCommand = (command: string): ICommand => {
  const parsed = command.split(" ");
  const optionIndex = parsed.findIndex((v) => v.includes("-"));

  const result = {
    command: parsed[0],
    target: optionIndex === 1 ? undefined : parsed[1],
    options: optionIndex === 1 ? parsed[1] : parsed[2],
  };

  return result;
};
