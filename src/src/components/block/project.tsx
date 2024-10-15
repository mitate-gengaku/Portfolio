import React from "react";

import { CommandBlock } from "../layout/command/block";

import { List } from "@/components/display/list";
import { PROJECT_LIST } from "@/config/project";
import { ICommand } from "@/types/interface/command";

interface Props {
  command: ICommand;
}
export const ProjectListBlock = (props: Props) => (
  <div className="flex flex-col">
    <CommandBlock command={props.command["command"]} />
    <List lists={PROJECT_LIST} />
  </div>
);
