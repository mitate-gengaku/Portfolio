import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";

import type { AppProps } from "next/app";

import { cn } from "@/utils/cs";

const IBMVGA = localFont({
  src: "../font/Web437_IBM_VGA_8x16.woff",
  display: "swap",
});

export const ThemeProvider = (props: React.ComponentProps<"div">) => (
  <div
    {...props}
    className={cn(
      props.className,
      "min-w-screen max-w-screen h-screen min-h-screen bg-[#222225] text-[#EEEEEC] overflow-x-hidden select-none",
      IBMVGA.className,
    )}
  />
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider className="flex flex-col">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
