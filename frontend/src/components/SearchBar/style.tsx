import styled from 'styled-components'

export const SearchContainer = styled.div`
  background: #383838;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  > button {
    padding: 5px;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background: #484848;
    }
  }
  > input {
    background: none;
    border: none;
    border-bottom: 2px solid black;
    &:focus {
      border: none;
      border-bottom: gray 2px solid;
      outline: none;
    }
  }
`
