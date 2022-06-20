import type { FC } from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const INPUT_OPTION = {
  id: {
    required: true,
  },
  password: {
    required: true,
  },
};

const Login: FC = () => {
  const { register, handleSubmit } = useForm();

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
        {...register("id", INPUT_OPTION.id)}
      />
      <TextField
        type="password"
        placeholder="비밀번호"
        sx={{
          width: "450px",
          height: "60px",
        }}
        {...register("password", INPUT_OPTION.password)}
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
