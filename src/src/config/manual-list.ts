interface ICommandManualList {
  [key: string]: {
    name: string;
    synopsis: string;
    description: string;
    option?: string;
  };
}

export const COMMAND_MANUAL_LIST: ICommandManualList = {
  certification: {
    name: "certification",
    synopsis: "certification",
    description: "This command display .",
  },
  clear: {
    name: "clear",
    synopsis: "clear",
    description: "This command delete the entire command history.",
  },
  config: {
    name: "config",
    synopsis: "config",
    description: "This command display or changes settings.",
  },
  font: {
    name: "font",
    synopsis: "font",
    description: "This command displays the credit of the font I'm using.",
  },
  help: {
    name: "help",
    synopsis: "help",
    description: "This command display a list of available commands.",
  },
  man: {
    name: "man",
    synopsis: "man [command]",
    description: "This command display the manual for the specified command.",
    option: "",
  },
  project: {
    name: "project",
    synopsis: "project",
    description:
      "This command display links to projects I have joined or created.",
  },
  reference: {
    name: "reference",
    synopsis: "reference",
    description:
      "This command display links to sites that were helpful and used.",
  },
  social: {
    name: "social",
    synopsis: `
- social
- social [_index_]
- social [_index_] [-n]
`,
    description:
      "This command display the URLs of my social networking accounts and blogs in list.",
    option: `
|  |  |
| :--   | :-- |
| index | Index of list displayed without options |
| -n    | Navigate to the specified index link |
`,
  },
  shutdown: {
    name: "shutdown",
    synopsis: `
- shutdown
`,
    description: "This command shutdown the portfolio",
  },
  whoami: {
    name: "whoami",
    synopsis: "whoami",
    description: "This command displays information about the site owner.",
  },
};
