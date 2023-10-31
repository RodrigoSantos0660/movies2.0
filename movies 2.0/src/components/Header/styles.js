import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px ;
  width: 100%;

  border-bottom-width: 1px ;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme. COLORS.BACKGROUND_700};
  
  display: flex;
  justify-content: space-between;

  padding: 0 80px;
  
  .logo{
 
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: start;

  font-weight: 900;
  
}

`;

export const Profile = styled.div`
  min-width: 190px;
  display: flex;
  align-items: center;

 

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin: 16px;
    line-height: 24px;

    a {
    font-size: 14px;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    }
    strong{
    font-size: 14px;

    }
  
  }
`;