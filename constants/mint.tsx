import { purchaseToken } from "utils/tokenMint";
import { TOKEN_TYPE, TOKEN_TYPE_ID } from "./globalConstants";

export const pageTitles = {
  [TOKEN_TYPE.FOUNDER]: 'You are now eligible to mint the Founder’s pass.',
  [TOKEN_TYPE.GENERAL]: 'You are now eligible to mint the General’s pass.',
}

export const pageAction = {
  [TOKEN_TYPE.FOUNDER]: () => purchaseToken(TOKEN_TYPE_ID.FOUNDER),
  [TOKEN_TYPE.GENERAL]: () => purchaseToken(TOKEN_TYPE_ID.GENERAL)
}