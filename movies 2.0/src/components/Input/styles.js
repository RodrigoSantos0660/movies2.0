import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  margin-top: 22px;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  margin-bottom: 8px;
  border-radius: 10px;
  
  > input{
  
   width: 100%;
   padding: 12px;
   background-color: transparent;
   border: none;
   color: ${({ theme }) => theme.COLORS.WHITE};
  &:placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  
   } 
  }
`;