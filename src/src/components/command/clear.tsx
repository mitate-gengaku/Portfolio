import { useAtomValue, useSetAtom } from "jotai";

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
    return;
  } else {
    setHistory([]);
    return;
  }
};
