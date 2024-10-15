import { useAtomValue, useSetAtom } from "jotai";
import React from "react";

import { historyAtom } from "@/store/history";
import { welcomeAtom } from "@/store/welcome";

export const ClearCommand = () => {
  const setHistory = useSetAtom(historyAtom);
  const needWelcomeBlock = useAtomValue(welcomeAtom);

  if (needWelcomeBlock) {
    setHistory([
      {
        command: "welcome",
        target: "",
        options: "",
      },
    ]);
  } else {
    setHistory([]);
  }
  return <></>;
};
