import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100px;
  width: 100vw;
  background: #4b4b4b;
  box-shadow: inset 0 -2px 12px rgba(1, 1, 1, 0.5);
  border-radius: 8px;
  z-index: 5;
`;
export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50%;
`;
