import React from "react";

import { ClearCommand } from "../command/clear";
import { CommandBlock } from "../layout/command/block";

import { CertificationsListBlock } from "@/components/block/certification";
import { ConfigBlock } from "@/components/block/config";
import { FontCreditBlock } from "@/components/block/font";
import { HelpListBlock } from "@/components/block/help";
import { ManualBlock } from "@/components/block/man";
import { ProjectListBlock } from "@/components/block/project";
import { ReferenceBlock } from "@/components/block/reference";
import { ShutdownMessageBlock } from "@/components/block/shutdown";
import { SocialLinkBlock } from "@/components/block/social";
import { WelcomeBlock } from "@/components/block/welcome";
import { WhoAmIBlock } from "@/components/block/whoami";
import { CommandNotFound } from "@/components/layout/command/not-found";
import { AVAILABLE_COMMAND_LIST } from "@/config/available-command-list";
import { ICommand } from "@/types/interface/command";
import { ICommandList } from "@/types/interface/command-list";

const CommandList: ICommandList = {
  certification: (command) => {
    return <CertificationsListBlock command={command["command"]} />;
  },
  clear: ClearCommand,
  config: (command) => {
    return <ConfigBlock command={command} />;
  },
  font: (command) => {
    return <FontCreditBlock command={command["command"]} />;
  },
  help: (command) => {
    return <HelpListBlock command={command["command"]} />;
  },
  man: (command) => {
    return <ManualBlock command={command} />;
  },
  project: (command) => {
    return <ProjectListBlock command={command} />;
  },
  reference: (command) => {
    return <ReferenceBlock command={command["command"]} />;
  },
  social: (command) => {
    return <SocialLinkBlock command={command} />;
  },
  shutdown: () => {
    return <ShutdownMessageBlock />;
  },
  welcome: (command) => {
    return <WelcomeBlock command={command["command"]} />;
  },
  whoami: (command) => {
    return <WhoAmIBlock command={command["command"]} />;
  },
};

interface Props {
  histories: ICommand[];
}

interface HistoryProps {
  history: ICommand;
}

export const History = (props: HistoryProps) => {
  const { history } = props;

  const { command, target } = history;

  const searchCommandInAvailableList = (command: string) => {
    return AVAILABLE_COMMAND_LIST.includes(command);
  };

  if (!searchCommandInAvailableList(command)) {
    return <CommandNotFound command={`${command} ${target ?? ""}`} />;
  }
  if (CommandList[command]) {
    return <div>{CommandList[command](history)}</div>;
  }

  return <CommandBlock command={history["command"]} />;
};

export const CommandHistory = (props: Props) => {
  return (
    <div className="flex flex-col">
      {props.histories.map((history, i) => (
        <History history={history} key={`${history.command}-${i}`} />
      ))}
    </div>
  );
};
