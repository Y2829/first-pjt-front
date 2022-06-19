import type { FC } from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const Login: FC = () => {
  return (
    <>
      <Typography variant="h4">로그인</Typography>
      <TextField
        type="text"
        placeholder="아이디"
        sx={{
          width: "450px",
          height: "60px",
        }}
      />
      <TextField
        type="password"
        placeholder="비밀번호"
        sx={{
          width: "450px",
          height: "60px",
        }}
      />
      <Button
        variant="contained"
        sx={{
          width: "450px",
          height: "60px",
          fontSize: "14px",
        }}
      >
        로그인
      </Button>
    </>
  );
};

export default Login;
