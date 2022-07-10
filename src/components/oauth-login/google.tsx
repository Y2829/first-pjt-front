import type { FC } from "react";

import OAuthButton from "./oauth-button";
import { GOOGLE_LOGO } from "src/enums/oauth_logo";
import { postOAuthSignin } from "src/apis/oauth";

const GoogleLogin: FC = () => {
  const handleClick = () => {
    const response = postOAuthSignin("google");
  };
  return (
    <OAuthButton
      logoSrc={GOOGLE_LOGO}
      onClick={handleClick}
      sx={{
        "&:hover": {
          backgroundColor: "#f2f2f2",
        },
      }}
    />
  );
};
export default GoogleLogin;
