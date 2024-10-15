import { useAtom } from "jotai";

import { welcomeAtom } from "@/store/welcome";

export const useConfig = () => {
  const [checked, setChecked] = useAtom(welcomeAtom);

  const onCheckSwitch = () => {
    setChecked((check) => !check);
  };

  return {
    checked,
    onCheckSwitch,
  };
};
