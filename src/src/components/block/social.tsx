import { useRouter } from "next/router";
import React from "react";

import { List } from "@/components/display/list";
import { CommandBlock } from "@/components/layout/command/block";
import { UnknownCommandOption } from "@/components/layout/command/unknown-options";
import { SOCIAL_LIST } from "@/config/social";
import { ICommand } from "@/types/interface/command";
import { validateInteger } from "@/utils/validate-integer";
import { validateOptions } from "@/utils/validate-options";

const SocialLinkListBlock = (props: { command: string }) => (
  <div className="flex flex-col">
    <CommandBlock command={props.command} />
    <List lists={SOCIAL_LIST} />
  </div>
);

export const SocialLinkBlock = (props: { command: ICommand }) => {
  const { command } = props;

  const router = useRouter();

  if (!command["target"] && command["options"]) {
    return (
      <UnknownCommandOption
        command={`${command["command"]} ${command["options"]}`}
        option={command["options"]}
      />
    );
  }

  if (command["target"]) {
    let lists: string[] = [];
    const isInteger = validateInteger(command["target"]);
    if (isInteger) {
      const listItem = SOCIAL_LIST[parseInt(command["target"], 10)];

      if (listItem) {
        lists = [listItem];
      } else {
        return (
          <div className="flex flex-col">
            <UnknownCommandOption
              command={`${command["command"]} ${command["target"]}`}
              option={command["target"]}
            />
          </div>
        );
      }
    }

    if (command["options"]) {
      const options = command["options"];
      if (validateOptions(options)) {
        router.push(lists[0]);
      }

      return (
        <div className="flex flex-col">
          <CommandBlock
            command={`${command["command"]} ${command["target"]} ${options}`}
          />
          <List lists={lists} />
        </div>
      );
    }

    return (
      <div className="flex flex-col">
        <CommandBlock command={`${command["command"]} ${command["target"]}`} />
        <List lists={lists} />
      </div>
    );
  }
  return <SocialLinkListBlock command={command["command"]} />;
};
