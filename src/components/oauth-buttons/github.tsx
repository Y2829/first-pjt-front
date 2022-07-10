import type { FC } from "react";
import OAuthButton from "./oauth-button";
import { GITHUB_LOGO } from "src/enums/oauth_logo";

const GithubLogin: FC = () => {
  return <OAuthButton logoSrc={GITHUB_LOGO} />;
};

export default GithubLogin;
