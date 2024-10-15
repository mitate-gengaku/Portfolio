import React from "react";

import { CommandBlock } from "../layout/command/block";

import { List } from "@/components/display/list";
import { AVAILABLE_COMMAND_LIST } from "@/config/available-command-list";

interface Props {
  command: string;
}
export const HelpListBlock = (props: Props) => (
  <div className="flex flex-col">
    <CommandBlock command={props.command} />
    <List lists={AVAILABLE_COMMAND_LIST} hover={false} />
  </div>
);
