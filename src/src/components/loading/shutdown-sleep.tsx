import { memo, useEffect, useState } from "react";

import { cn } from "@/utils/cs";

export const ShutodownSleep = memo(() => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {Array(index)
        .fill("")
        .map((v, i) => (
          <span
            className={cn(
              i === 0 && "text-xs",
              i === 1 && "text-sm",
              i === 2 && "text-base",
            )}
            key={`${v}-${i}`}
          >
            Z
          </span>
        ))}
    </div>
  );
});

ShutodownSleep.displayName = "ShutodownSleep";
