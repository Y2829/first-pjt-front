import type { SOCIAL_TYPE } from "src/types/oauth";
import axios from "axios";

import { BASE_URL } from "src/configs/indext";

const REDIRECT_URI = "/question";

export const postOAuthSignin = async (socialType: SOCIAL_TYPE) => {
  return await axios.post(
    `${BASE_URL}/oauth2/authorization/${socialType}?redirect_uri=${REDIRECT_URI}`
  );
};
