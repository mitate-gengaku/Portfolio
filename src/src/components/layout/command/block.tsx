import { Prompt } from "@/components/display/prompt";

interface Props {
  command: string;
}

export const CommandBlock = (props: Props) => (
  <div className="relative flex w-full">
    <Prompt />
    <p className="break-normal indent-[11em] [overflow-wrap:anywhere]">
      {props.command}
    </p>
  </div>
);
