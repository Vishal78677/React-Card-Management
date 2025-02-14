import React, { CSSProperties } from "react";
import { marginX } from "../constants/constant";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  customStyle?: CSSProperties;
}

const Container = ({
  children,
  className = "",
  customStyle = {},
}: ContainerProps) => {
  return (
    <div
      className={`${marginX.default} ${marginX.sm} ${marginX.md} ${marginX.lg} ${marginX.xl} ${className}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export default Container;
