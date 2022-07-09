import type { FC } from "react";

import OAuthButton from "./oauth-button";
import { GOOGLE_LOGO } from "src/enums/oauth_logo";

const GoogleButton: FC = () => {
  return (
    <OAuthButton
      text={"구글 계정으로 로그인"}
      logoSrc={GOOGLE_LOGO}
      sx={{
        border: "1px solid #f2f2f2",
        boxShadow: "1px 3px #cccccc",
      }}
    />
  );
};
export default GoogleButton;
