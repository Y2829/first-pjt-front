import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import Login from "src/components/authentication/login";
import KakaoLogin from "src/components/oauth-login/kakao";
import NaverLogin from "src/components/oauth-login/naver";
import GoogleLogin from "src/components/oauth-login/google";
import GithubLogin from "src/components/oauth-login/github";

const Authentication: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          padding: 5,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Login />
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Divider
            sx={{
              width: "100%",
              marginY: 2,
            }}
          >
            소셜 계정으로 로그인
          </Divider>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <KakaoLogin />
          <NaverLogin />
          <GoogleLogin />
          <GithubLogin />
        </Box>
      </Box>
    </Box>
  );
};

export default Authentication;
