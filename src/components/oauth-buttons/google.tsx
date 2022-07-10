import type { FC } from "react";

import OAuthButton from "./oauth-button";
import { GOOGLE_LOGO } from "src/enums/oauth_logo";

const GoogleLogin: FC = () => {
  return <OAuthButton logoSrc={GOOGLE_LOGO} />;
};
export default GoogleLogin;
