import type { FC } from "react";
import type { StaticImageData } from "next/image";
import type { SxProps } from "@mui/material";
import Image from "next/image";
import Button from "@mui/material/Button";

interface OAuthButtonProps {
  logoSrc: string;
  sx?: SxProps;
  onClick: () => void;
}

const OAuthButton: FC<OAuthButtonProps> = ({ logoSrc, sx, onClick }) => {
  return (
    <Button
      sx={{
        ...sx,
      }}
      onClick={onClick}
    >
      <img src={logoSrc} width="50" height="50" />
    </Button>
  );
};

export default OAuthButton;
