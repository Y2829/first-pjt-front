import type { FC } from "react";

import OAuthButton from "./oauth-button";
import { KAKAO_LOGO } from "src/enums/oauth_logo";
import { postOAuthSignin } from "src/apis/oauth";

const KakaoLogin: FC = () => {
  const handleClick = () => {
    const response = postOAuthSignin("kakao");
  };
  return <OAuthButton logoSrc={KAKAO_LOGO} onClick={handleClick} />;
};

export default KakaoLogin;
