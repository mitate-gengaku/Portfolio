import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { CommandBlock } from "../layout/command/block";
import { NeedTargetCommandBlock } from "../layout/command/need-target";

import { UnknownCommandOption } from "@/components/layout/command/unknown-options";
import { COMMAND_MANUAL_LIST } from "@/config/manual-list";
import { ICommand } from "@/types/interface/command";

export const ManualBlock = (props: { command: ICommand }) => {
  const { command } = props;

  if (!command["target"]) {
    return <NeedTargetCommandBlock command={command["command"]} />;
  }

  const manual = COMMAND_MANUAL_LIST[command.target];
  if (!manual) {
    return (
      <UnknownCommandOption
        command={`${command["command"]} ${command["target"]}`}
        option={command["target"]}
      />
    );
  }
  return (
    <div className=" flex flex-col">
      <CommandBlock command={`${command["command"]} ${command["target"]}`} />
      <dl>
        <dt className="text-lg">NAME</dt>
        <dd className="mb-3 px-4">{manual.name}</dd>
        <dt className="text-lg">SYNOPSIS</dt>
        <dd className="mb-3 px-4">
          <Markdown remarkPlugins={[remarkGfm]}>{manual.synopsis}</Markdown>
        </dd>
        <dt className="text-lg">DESCRIPTION</dt>
        <dd className="px-4">{manual.description}</dd>
        {manual.option && (
          <>
            <dt className="text-lg">Option</dt>
            <dd className="px-4">
              <Markdown
                components={{
                  tr: (props) => (
                    <tr
                      {...props}
                      className="[&>td:nth-child(1)]:pr-1 md:[&>td:nth-child(1)]:pr-3"
                    />
                  ),
                }}
                remarkPlugins={[remarkGfm]}
              >
                {manual.option}
              </Markdown>
            </dd>
          </>
        )}
      </dl>
    </div>
  );
};
