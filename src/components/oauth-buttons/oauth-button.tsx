import type { FC } from "react";
import type { StaticImageData } from "next/image";
import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";

interface OAuthButtonProps {
  text: string;
  logo?: StaticImageData;
  sx?: SxProps;
}

const OAuthButton: FC<OAuthButtonProps> = ({ text, logo, sx }) => {
  return (
    <Box
      sx={{
        width: "450px",
        height: "60px",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        color: "#000",
        fontSize: "14px",
        cursor: "pointer",
        ...sx,
      }}
    >
      {text}
    </Box>
  );
};

export default OAuthButton;
