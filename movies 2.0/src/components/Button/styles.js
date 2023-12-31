import styled from "styled-components";

export const Container = styled.button`
 width:100%;
 background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
 color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
 display: flex;
 align-items: center;
 justify-content: center;

 height: 56px;
 border: 0;
 padding: 0 16px;
 margin-top: 16px;
 border-radius: 10px;
 font-weight: 500;

 &:disabled {
  opacity: 0.5;
}
.icone {
   display: flex;
   > svg{
   margin-top: 2px;
   height: 25px;
   width: 25px;
  
  }
  
  }


`;
