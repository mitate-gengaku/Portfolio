import { CommandBlock } from "@/components/layout/command/block";

interface Props {
  command: string;
}
export const CommandNotFound = (props: Props) => (
  <div>
    <CommandBlock command={props.command} />
    <p>portfolio: {props.command}: command not found</p>
  </div>
);
