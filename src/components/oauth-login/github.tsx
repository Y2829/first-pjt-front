import type { FC } from "react";

import OAuthButton from "./oauth-button";
import { GITHUB_LOGO } from "src/enums/oauth_logo";
import { postOAuthSignin } from "src/apis/oauth";

const GithubLogin: FC = () => {
  const handleClick = () => {
    const resposne = postOAuthSignin("github");
  };
  return <OAuthButton logoSrc={GITHUB_LOGO} />;
};

export default GithubLogin;
