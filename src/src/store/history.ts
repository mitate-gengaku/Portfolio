import { atom } from "jotai";

import { ICommand } from "@/types/interface/command";

export const historyAtom = atom<ICommand[]>([]);
