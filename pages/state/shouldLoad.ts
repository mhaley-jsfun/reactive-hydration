import { atom } from "recoil";

export const shouldLoadState = atom({
  key: "shouldLoadState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
