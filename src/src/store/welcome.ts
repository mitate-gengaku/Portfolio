import { atomWithStorage, createJSONStorage } from "jotai/utils";

const sessionStorage = () => {
  if (typeof window !== "undefined") {
    return createJSONStorage<boolean>(() => window.sessionStorage);
  }
  return undefined;
};

export const welcomeAtom = atomWithStorage("welcome", true, sessionStorage(), {
  getOnInit: true,
});
