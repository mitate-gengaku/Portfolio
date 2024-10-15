import React from "react";

import { CommandBlock } from "../layout/command/block";

import { WHOAMI_MESSAGE } from "@/config/whoami";

interface Props {
  command: string;
}
export const WhoAmIBlock = (props: Props) => (
  <div className="flex h-full flex-col overflow-hidden">
    <CommandBlock command={props.command} />
    <div className="flex gap-3 md:gap-8 lg:gap-16">
      <div>
        {WHOAMI_MESSAGE.ascii.map((chars, i) => (
          <div
            className="flex items-center justify-center gap-0 lg:justify-start"
            key={i}
          >
            {chars
              .replaceAll("¥", "&#xA5;")
              .split("")
              .map((char, i) => (
                <span
                  className="block h-4 w-2 [zoom:0.2] sm:[zoom:0.275] md:[zoom:0.4] lg:[zoom:0.6]"
                  key={`${char}-${i}`}
                >
                  {char ? char : " "}
                </span>
              ))}
          </div>
        ))}
      </div>
      <ul className="pl-4 leading-relaxed md:text-lg lg:text-xl">
        {WHOAMI_MESSAGE.messages.map((message, i) => (
          <li className="list-[square]" key={`${message.message}-${i}`}>
            <p>
              {message.message}
              {message.strong && (
                <span className="text-lg hover:bg-green-500 hover:text-[#222225] lg:text-3xl">
                  Mitate Gengaku
                </span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
