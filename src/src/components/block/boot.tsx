import { useAtom } from "jotai";
import React, { useState, useEffect, useRef } from "react";

import { DotSpinner } from "@/components/loading/dot-spinner";
import { PacmanProgress } from "@/components/loading/pacman-progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BOOT_MESSAGE_LIST } from "@/config/boot-message";
import { IBMVGA } from "@/pages";
import { bootAtom } from "@/store/boot";
import { cn } from "@/utils/cs";

export const BootingMessage = () => {
  const bootRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isPacman, setPacman] = useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [boot, setBoot] = useAtom(bootAtom);

  const calculateTime = (progress: number) => {
    if (progress > 95) return 300;
    if (progress > 90) return 200;
    if (progress > 70) return 125;
    return 50;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          bootRef.current?.classList.add("hide-boot-message");
          setTimeout(() => {
            setBoot(false);
          }, 1000);
          return 100;
        }
        return prevProgress + 1;
      });
    }, calculateTime(progress));

    return () => clearInterval(interval);
  }, [progress, setBoot]);

  useEffect(() => {
    const messageIndex = Math.floor(
      (progress / 100) * BOOT_MESSAGE_LIST.length,
    );
    setCurrentMessage(
      BOOT_MESSAGE_LIST[messageIndex] ||
        BOOT_MESSAGE_LIST[BOOT_MESSAGE_LIST.length - 1],
    );
  }, [progress]);

  const onButtonClickHander = () => setPacman((pacman) => !pacman);

  return (
    <Dialog open={boot} defaultOpen>
      <DialogContent
        className={cn(
          "!border-none fixed translate-x-0 translate-y-0 left-0 top-0 z-50 flex h-screen w-screen max-w-full flex-col items-center justify-center overflow-hidden bg-[#222225] text-green-500",
          IBMVGA.className,
        )}
        ref={bootRef}
      >
        <button
          className="group absolute right-4 top-4 flex size-8 items-center justify-center rounded-none border border-green-500 text-lg hover:bg-green-500 hover:text-[#222225]"
          onClick={() => onButtonClickHander()}
        >
          {isPacman ? (
            <span className="h-2 w-8 bg-green-500 group-hover:bg-[#222225]" />
          ) : (
            "C"
          )}
        </button>
        <DialogHeader>
          <DialogTitle>Booting Portfolio</DialogTitle>
          <DialogDescription className="text-center">
            Please wait…
          </DialogDescription>
        </DialogHeader>
        {isPacman ? (
          <PacmanProgress progress={progress} />
        ) : (
          <div className="mb-4 h-2.5 w-80 bg-gray-700">
            <div
              className="h-2.5 bg-green-500 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
        <div className="flex flex-col justify-center">
          {progress === 100 ? (
            <>✔ Complete</>
          ) : (
            <>
              <div className="flex items-center gap-3 text-sm">
                <DotSpinner />
                {currentMessage}
              </div>
              <p className="mt-2 w-full text-center text-sm">{`${progress}%`}</p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
