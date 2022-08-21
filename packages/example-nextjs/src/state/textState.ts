import { atom } from "recoil";
import { registerState } from "reactive-hydration";

const init = "(initial value)";

export const textState = registerState(
  "textState",
  atom({
    key: "textState",
    default: init,
  }),
  init
);
