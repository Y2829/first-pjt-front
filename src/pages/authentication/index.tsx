import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import Login from "src/components/authentication/login";
import KakaoButton from "src/components/oauth-buttons/kakao";
import NaverButton from "src/components/oauth-buttons/naver";
import GoogleButton from "src/components/oauth-buttons/google";

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

        <KakaoButton />
        <NaverButton />
        <GoogleButton />
      </Box>
    </Box>
  );
};

export default Authentication;
