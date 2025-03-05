import { CommandBlock } from "@/components/layout/command/block";

interface Props {
  command: string;
}

export const NeedTargetCommandBlock = (props: Props) => (
  <div className="flex w-full flex-col">
    <CommandBlock command={props.command} />
    <p>This command requires the target</p>
  </div>
);
