import type { FC } from "react";

import OAuthButton from "./oauth-button";
import { NAVER_LOGO } from "src/enums/oauth_logo";

const NaverLogin: FC = () => {
  return <OAuthButton logoSrc={NAVER_LOGO} />;
};

export default NaverLogin;
