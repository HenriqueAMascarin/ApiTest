import styled from "styled-components";

export const UlStyled = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 500px;
    gap: 30px;
    padding: 30px 0;
    background-color: white;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    li{
        font-size: 1.2em;
    }
`;

export const DivCenter = styled.div`
    text-align: center;
    padding: 0 10px;
    h1{
        color: white;
        filter: drop-shadow(0 1px 2px black);
        font-size: 3em;
    }
`