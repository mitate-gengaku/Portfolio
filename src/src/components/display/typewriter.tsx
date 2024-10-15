import React, { useState, useEffect } from "react";

import { cn } from "@/utils/cs";

interface Props {
  type: string;
}
export const TypeWriter = (props: Props) => {
  const { type } = props;

  const [count, setCount] = useState(0);
  const [isIncrementing, setIsIncrementing] = useState(true);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (isIncrementing) {
          if (prevCount === type.length) {
            setTimeout(() => {
              setIsIncrementing(false);
              return type.length - 1;
            }, 200);
          }
          return prevCount + 1;
        } else {
          if (prevCount === 0) {
            setIsIncrementing(true);
            return 1;
          }
          return prevCount - 1;
        }
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isIncrementing, type.length]);

  useEffect(() => {
    setText(type.slice(0, count));
  }, [count, type]);

  return (
    <p className="relative flex items-center gap-1">
      {text}
      <span className={cn("w-1 h-4 bg-[#EEEEEC] blink")} />
    </p>
  );
};
