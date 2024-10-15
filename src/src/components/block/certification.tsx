import React from "react";

import { CommandBlock } from "../layout/command/block";

import { List } from "@/components/display/list";
import { CERTIFICATION_LIST } from "@/config/certification";

interface Props {
  command: string;
}

export const CertificationsListBlock = (props: Props) => (
  <div className=" flex flex-col">
    <CommandBlock command={props.command} />
    <List lists={CERTIFICATION_LIST} />
  </div>
);
