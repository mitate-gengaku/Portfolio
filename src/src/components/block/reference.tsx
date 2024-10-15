import React from "react";

import { List } from "@/components/display/list";
import { CommandBlock } from "@/components/layout/command/block";
import { REFERENCE_LIST } from "@/config/reference";

export const ReferenceBlock = (props: { command: string }) => (
  <div className="flex flex-col">
    <CommandBlock command={props.command} />
    <List lists={REFERENCE_LIST} />
  </div>
);
