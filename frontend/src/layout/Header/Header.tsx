import { ReactComponent as LogoGallega } from "../../assets/logo.svg";
import { SearchBar } from "../../components/SearchBar/SearchBar";

import { HeaderContainer, RowContainer } from "./style";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <RowContainer>
          <LogoGallega width={60} style={{ transform: "scaleX(-1)" }} />
          <h1>G</h1>
          <LogoGallega width={60} />
        </RowContainer>
        <RowContainer>
          <SearchBar />
        </RowContainer>
      </HeaderContainer>
    </>
  );
};
