import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  margin-bottom: 8px;
  border-radius: 10px;

  > input{
   height: 56px;
   width: 100%;
   padding: 12px;
   background-color: transparent;
   color: ${({ theme }) => theme.COLORS.WHITE};
  &:placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  
  }
`;