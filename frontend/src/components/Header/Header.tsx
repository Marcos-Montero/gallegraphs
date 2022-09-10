import logoGallega from "../../assets/logo.svg";

import { IconContainer } from "./style";

export const Header = () => {
  return (
    <>
      <IconContainer>
        <img src={logoGallega} alt="logo La Gallega" width={60} />
        <h1>Gallegraphs</h1>
      </IconContainer>
    </>
  );
};
