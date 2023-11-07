import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 width: 100%;
 margin-top: 20px;
 background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
 padding: 10px 20px;
 border-radius: 10px;
 > div{
 margin:6px 0px;
}

`;