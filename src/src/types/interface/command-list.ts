import { ICommand } from "./command";

export interface ICommandList {
  [key: string]: (command: ICommand, handler?: () => void) => JSX.Element;
}
