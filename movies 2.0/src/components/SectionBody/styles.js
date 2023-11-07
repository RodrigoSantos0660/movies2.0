import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 80px;
  overflow-y: auto;
  padding-bottom: 40px;

  > div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    button{
    width: 230px
   }
  
  
   h1{
   margin-top: 20px;
   font-weight: 700;
  }
}
`;