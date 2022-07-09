import type { FC } from "react";
import type { StaticImageData } from "next/image";
import type { SxProps } from "@mui/material";
import Image from "next/image";
import Box from "@mui/material/Box";

interface OAuthButtonProps {
  text: string;
  logoSrc: string;
  sx?: SxProps;
}

const OAuthButton: FC<OAuthButtonProps> = ({ text, logoSrc, sx }) => {
  return (
    <Box
      sx={{
        width: "450px",
        height: "60px",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        color: "#000",
        fontSize: "14px",
        cursor: "pointer",
        padding: 2,
        ...sx,
      }}
    >
      <img src={logoSrc} width="50" height="50" />
      {text}
      <Box></Box>
    </Box>
  );
};

export default OAuthButton;
