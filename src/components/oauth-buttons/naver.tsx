import type { FC } from "react";

import OAuthButton from "./oauth-button";

const NaverButton: FC = () => {
  return (
    <OAuthButton
      text={"네이버계정으로 로그인"}
      sx={{
        backgroundColor: "#03c75a",
        color: "#fff",
      }}
    />
  );
};

export default NaverButton;
