import React from "react";

import { CommandBlock } from "../layout/command/block";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/utils/cs";

interface Props {
  command: string;
}
export const FontCreditBlock = (props: Props) => (
  <div className="flex flex-col">
    <CommandBlock command={props.command} />
    <Card className={cn("text-sm")}>
      <CardHeader>
        <CardTitle>
          Font: <strong>IBM VGA 8x16</strong>
        </CardTitle>
        <CardDescription>
          Source: The Ultimate Oldschool PC Font Pack
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Created by{" "}
          <a
            href="https://int10h.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VileR
          </a>
        </p>
        <p>
          License:{" "}
          <a
            href="https://int10h.org/oldschool-pc-fonts/readme/#license"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons Attribution-ShareAlike 4.0 International License
          </a>
        </p>
      </CardContent>
    </Card>
  </div>
);
