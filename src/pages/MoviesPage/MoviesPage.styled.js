import styled from "@emotion/styled/macro";

export const FormWrap = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const SearchForm = styled.form`
  display: flex;
  min-width: 600px;
  text-align: center;
  border-radius:4px;
  border: 1px solid orange;
  
  overflow: hidden;
  & > input {
    width: 100%;
    padding-left: 8px;
    line-height: 1.2;
    color: black;
    background-color: ;
    outline: none;
    border: none;
  }
  & > button {
    padding: 8px;
    border-radius:4px;
    background-color: black;
    border: none;
    & > svg {
      display: flex;
      align-items: center;
      color: white;
    }
  }
`;