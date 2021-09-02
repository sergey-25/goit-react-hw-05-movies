import styled from "@emotion/styled/macro";

export const BtnWrap = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  width: 40px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  color:black;
   outline: none;
    border: none;
  cursor: pointer;
 

   &:focus {
     background-color: #fff;
     color: black;
   }
`;