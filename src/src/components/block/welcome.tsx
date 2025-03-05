import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { CommandBlock } from "@/components/layout/command/block";
import { WELCOME_MESSAGE } from "@/config/welcome-message";

const WelcomeBlockAsciiMessage = () => (
  <div className="">
    {WELCOME_MESSAGE.ascii.map((chars, i) => (
      <div className="flex items-center justify-start gap-0" key={i}>
        {chars
          .replaceAll("¥", "&#xA5;")
          .split("")
          .map((char, i) => (
            <div
              className="h-4 sm:h-3 lg:h-4 w-2 [zoom:0.3] sm:[zoom:0.5] xl:[zoom:1]"
              key={`${char}-${i}`}
            >
              {char ? char : " "}
            </div>
          ))}
      </div>
    ))}
  </div>
);

const WelcomeBlockMessage = () => (
  <div className="">
    <Markdown
      components={{
        a: (props) => (
          <a {...props} className={"hover:bg-green-500 hover:text-[#222225]"} />
        ),
        tr: (props) => (
          <tr
            {...props}
            className="[&>td:nth-child(1)]:pr-1 md:[&>td:nth-child(1)]:pr-3 md:[&>td:nth-child(2)]:pr-6 md:[&>td:nth-child(4)]:pl-3"
          />
        ),
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {WELCOME_MESSAGE.message}
    </Markdown>
  </div>
);

interface Props {
  command: string;
}

export const WelcomeBlock = (props: Props) => (
  <div className="flex flex-col">
    <CommandBlock command={props.command} />
    <WelcomeBlockAsciiMessage />
    <WelcomeBlockMessage />
  </div>
);
