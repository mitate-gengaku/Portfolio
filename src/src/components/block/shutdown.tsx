import { useSetAtom } from "jotai";
import React, { useEffect } from "react";

import { DotSpinner } from "@/components/loading/dot-spinner";
import { ShutodownSleep } from "@/components/loading/shutdown-sleep";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IBMVGA } from "@/pages";
import { shutdownAtom } from "@/store/shutdown";
import { cn } from "@/utils/cs";

export const ShutdownMessageBlock = () => {
  const setShutdown = useSetAtom(shutdownAtom);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShutdown(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [setShutdown]);

  return (
    <Dialog open={true} defaultOpen>
      <DialogContent
        className={cn(
          "fixed translate-x-0 translate-y-0 !rounded-none left-0 top-0 z-50 flex h-screen w-screen max-w-full flex-col items-center justify-center overflow-hidden bg-[#222225] text-green-500 !border-none !outlin-none",
          IBMVGA.className,
        )}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Shutdown Portfolio
          </DialogTitle>
          <DialogDescription className="text-center">
            Please waiting…
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <DotSpinner />
          <div className="flex items-center gap-2">
            <p>Shutdown now…</p>
            <ShutodownSleep />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
