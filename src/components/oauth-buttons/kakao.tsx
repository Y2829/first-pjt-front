import type { FC } from "react";
import OAuthButton from "./oauth-button";
import KakaoTalk from "public/images/kakaotalk.png";

const KakaoButton: FC = () => {
  return (
    <OAuthButton
      text={"카카오계정 로그인"}
      logo={KakaoTalk}
      sx={{
        backgroundColor: "#FEE500",
        color: "#000",
      }}
    />
  );
};

export default KakaoButton;
