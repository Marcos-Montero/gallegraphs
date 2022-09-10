import styled from "styled-components";

export const SummaryContainer = styled.div`
  position: fixed;
  right: 0px;
  top: 100px;
  width: ${(props) => (props.open ? "400px" : "0")};
  background: #444;
`;
export const OpenButton = styled.button`
  position: absolute;
  z-index: 10;
  background: gray;
  left: -30px;
  height: 100vh;
  width: 30px;
  font-weight: bolder;
  cursor: pointer;
`;
export const TextFieldContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
`;
export const Title = styled.h3`
  margin: 2px;
  padding: 2px;
`;
