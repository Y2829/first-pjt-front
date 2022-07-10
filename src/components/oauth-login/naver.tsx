import type { FC } from "react";

import OAuthButton from "./oauth-button";
import { NAVER_LOGO } from "src/enums/oauth_logo";
import { postOAuthSignin } from "src/apis/oauth";

const NaverLogin: FC = () => {
  const handleClick = () => {
    const response = postOAuthSignin("naver");
  };
  return <OAuthButton logoSrc={NAVER_LOGO} onClick={handleClick} />;
};

export default NaverLogin;
