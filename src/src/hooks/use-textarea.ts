import { useAtom, useAtomValue } from "jotai";
import { useState, useEffect, KeyboardEvent, ChangeEvent, useRef } from "react";

import { historyAtom } from "@/store/history";
import { welcomeAtom } from "@/store/welcome";
import { parseCommand } from "@/utils/parse-command";
export const useTextarea = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");
  const [histories, setHistories] = useAtom(historyAtom);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const needWelcome = useAtomValue(welcomeAtom);

  const onTextareaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setInput(e.target.value);
  const onTextareaKeyDownHander = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (input.length) {
        const command = parseCommand(input.trim());
        setHistories([...histories, command]);
        setTimeout(() => {
          textAreaRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }, 25);
      }

      setInput("");
    }
  };
  const onContainerClickHandler = () => {
    textAreaRef.current?.focus();
  };

  useEffect(() => {
    setLoading(false);
    if (needWelcome) {
      setHistories([
        ...histories,
        {
          command: "welcome",
          target: "",
          options: "",
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    input,
    histories,
    containerRef,
    textAreaRef,
    setHistories,
    onTextareaChangeHandler,
    onTextareaKeyDownHander,
    onContainerClickHandler,
  };
};
