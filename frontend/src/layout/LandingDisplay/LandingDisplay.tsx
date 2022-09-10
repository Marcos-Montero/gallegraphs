import { FC, ReactNode } from "react";
import { LandingContainer, Message } from "./style";

export const LandingDisplay: FC = ({ children }: { children?: ReactNode }) => {
  return (
    <LandingContainer>
      <Message>{children}</Message>
    </LandingContainer>
  );
};
