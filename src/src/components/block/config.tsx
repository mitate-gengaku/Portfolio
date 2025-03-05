import React from "react";

import { CommandBlock } from "@/components/layout/command/block";
import { Switch } from "@/components/ui/switch";
import { useConfig } from "@/hooks/use-config";
import { ICommand } from "@/types/interface/command";

interface Props {
  command: ICommand;
}

export const ConfigBlock = (props: Props) => {
  const { checked, onCheckSwitch } = useConfig();

  return (
    <div className="flex flex-col">
      <CommandBlock command={props.command["command"]} />
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <Switch checked={checked} onCheckedChange={onCheckSwitch} />
          <p>Show welcome message after every reload?</p>
        </div>
      </div>
    </div>
  );
};
