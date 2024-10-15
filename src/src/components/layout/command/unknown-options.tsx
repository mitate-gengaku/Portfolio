import { CommandBlock } from "./block";

interface Props {
  command: string;
  option: string;
}

export const UnknownCommandOption = (props: Props) => (
  <div>
    <CommandBlock command={props.command} />
    <p>error: unknown option {props.option}</p>
  </div>
);
