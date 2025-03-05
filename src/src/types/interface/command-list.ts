import { JSX } from "react";

import { ICommand } from "@/types/interface/command";
export interface ICommandList {
  [key: string]: (command: ICommand, handler?: () => void) => JSX.Element;
}
