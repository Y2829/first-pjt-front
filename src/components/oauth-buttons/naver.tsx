import type { FC } from "react";

import OAuthButton from "./oauth-button";
import { NAVER_LOGO } from "src/enums/oauth_logo";

const NaverButton: FC = () => {
  return (
    <OAuthButton
      text={"네이버계정으로 로그인"}
      logoSrc={"NAVER_LOGO"}
      sx={{
        backgroundColor: "#03c75a",
        color: "#fff",
      }}
    />
  );
};

export default NaverButton;
