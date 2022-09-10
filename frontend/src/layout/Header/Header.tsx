import { ReactComponent as LogoGallega } from "../../assets/logo.svg";
import { SearchBar } from "../../components/SearchBar/SearchBar";

import { HeaderContainer, RowContainer } from "./style";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <RowContainer>
          <h1>Gallegraphs</h1>
          <LogoGallega width={60} />
        </RowContainer>
        <RowContainer>
          <SearchBar />
        </RowContainer>
      </HeaderContainer>
    </>
  );
};
