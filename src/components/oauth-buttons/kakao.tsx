import type { FC } from "react";
import OAuthButton from "./oauth-button";
import { KAKAO_LOGO } from "src/enums/oauth_logo";

const KakaoLogin: FC = () => {
  return <OAuthButton logoSrc={KAKAO_LOGO} />;
};

export default KakaoLogin;
