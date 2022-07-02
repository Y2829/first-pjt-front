import type { FC } from "react";
import React from "react";
import { StyledBox } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default Container;
