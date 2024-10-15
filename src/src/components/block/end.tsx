import { TypeWriter } from "../display/typewriter";

import { TYPE_TEXT } from "@/config/type";

export const EndBlock = () => (
  <div className="flex h-screen flex-col items-center justify-center">
    <TypeWriter type={TYPE_TEXT} />
  </div>
);
