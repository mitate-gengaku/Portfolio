import React from "react";

import { List } from "@/components/display/list";
import { CommandBlock } from "@/components/layout/command/block";
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
