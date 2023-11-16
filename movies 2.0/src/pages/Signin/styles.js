import styled from "styled-components";
import backgroundimg from "../../assets/movie.png"


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items:stretch;
  
 

`;

export const Form = styled.form`
  padding: 0 100px;
  display: Flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  text-align: center;

  >h2{
   margin: 30px 0px;
  }

  >button {
    margin-bottom: 10px;
  }

  .buttontext{
    margin: 0 auto; 
  }
`;


export const Background = styled.div`
  flex: 1;
  background: url(${backgroundimg}) no-repeat center center;
  background-size: cover;
`;