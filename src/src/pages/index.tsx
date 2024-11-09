import { useAtomValue } from "jotai";
import localFont from "next/font/local";
import React from "react";

import { BootingMessage } from "@/components/block/boot";
import { EndBlock } from "@/components/block/end";
import { CommandHistory } from "@/components/block/history";
import { Prompt } from "@/components/display/prompt";
import { SEO } from "@/components/feature/seo";
import { Textarea } from "@/components/ui/textarea";
import { useTextarea } from "@/hooks/use-textarea";
import { shutdownAtom } from "@/store/shutdown";

export const IBMVGA = localFont({
  src: "../font/Web437_IBM_VGA_8x16.woff",
  display: "swap",
});

interface Props {
  site_url: string;
}

const Home = (props: Props) => {
  const { site_url } = props;

  const shutdown = useAtomValue(shutdownAtom);
  const {
    isLoading,
    input,
    histories,
    containerRef,
    textAreaRef,
    onTextareaChangeHandler,
    onTextareaKeyDownHander,
    onContainerClickHandler,
  } = useTextarea();

  if (isLoading) {
    return (
      <>
        <SEO
          title={`Mitate Gengaku`}
          url={site_url ?? ""}
          twitter={{
            twitterCard: "summary_large_image",
            twitterSite: "@mitate_gengaku",
            twitterCreator: "@mitate_gengaku",
          }}
          >
          <meta 
            name="copyright" 
            content="The Ultimate Oldschool PC Font Pack (https://int10h.org/oldschool-pc-fonts/) Copyright (c) 2016-2023 VileR, Licensed under Creative Commons Attribution-ShareAlike 4.0 International License (https://creativecommons.org/licenses/by-sa/4.0/)"
          />
        </SEO>
      </>
    );
  }
  if (shutdown) {
    return (
      <>
        <SEO
          title={`Thanks for visiting my portfolio site. | Mitate Gengaku`}
          url={site_url ?? ""}
          twitter={{
            twitterCard: "summary_large_image",
            twitterSite: "@mitate_gengaku",
            twitterCreator: "@mitate_gengaku",
          }}>
          <meta 
            name="copyright" 
            content="The Ultimate Oldschool PC Font Pack (https://int10h.org/oldschool-pc-fonts/) Copyright (c) 2016-2023 VileR, Licensed under Creative Commons Attribution-ShareAlike 4.0 International License (https://creativecommons.org/licenses/by-sa/4.0/)"
          />
        </SEO>
        <EndBlock />
      </>
    );
  }
  return (
    <>
      <SEO
        title={`Mitate Gengaku`}
        url={site_url ?? ""}
        twitter={{
          twitterCard: "summary_large_image",
          twitterSite: "@mitate_gengaku",
          twitterCreator: "@mitate_gengaku",
        }}>
        <meta 
          name="copyright" 
          content="The Ultimate Oldschool PC Font Pack (https://int10h.org/oldschool-pc-fonts/) Copyright (c) 2016-2023 VileR, Licensed under Creative Commons Attribution-ShareAlike 4.0 International License (https://creativecommons.org/licenses/by-sa/4.0/)"
        />
      </SEO>
      <div
        className={"h-screen min-h-screen"}
        ref={containerRef}
        onClick={onContainerClickHandler}
      >
        <BootingMessage />
        <CommandHistory histories={histories} />
        <div className="relative w-full">
          <div className="relative flex">
            <Prompt />
            <Textarea
              className="h-fit w-full resize-none bg-transparent indent-[11em] focus:outline-none"
              value={input}
              ref={textAreaRef}
              onChange={onTextareaChangeHandler}
              onKeyDown={onTextareaKeyDownHander}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = () => {
  const url = process.env.SITE_URL;

  return {
    props: {
      site_url: url,
    },
  };
};

export default Home;
