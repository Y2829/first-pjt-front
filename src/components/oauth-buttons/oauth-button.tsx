import type { FC } from "react";
import type { StaticImageData } from "next/image";
import type { SxProps } from "@mui/material";
import Image from "next/image";
import Box from "@mui/material/Box";

interface OAuthButtonProps {
  logoSrc: string;
  sx?: SxProps;
}

const OAuthButton: FC<OAuthButtonProps> = ({ logoSrc, sx }) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        ...sx,
      }}
    >
      <img src={logoSrc} width="50" height="50" />
    </Box>
  );
};

export default OAuthButton;
