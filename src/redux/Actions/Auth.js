import { AUTHENTICATED } from "./ActionTypes";

export const authenticate = payload => {
  return { type: AUTHENTICATED, payload };
};