import type { FC } from "react";
import OAuthButton from "./oauth-button";
import { KAKAO_LOGO } from "src/enums/oauth_logo";

const KakaoButton: FC = () => {
  return (
    <OAuthButton
      text={"카카오계정 로그인"}
      logoSrc={KAKAO_LOGO}
      sx={{
        backgroundColor: "#FEE500",
        color: "#000",
      }}
    />
  );
};

export default KakaoButton;
