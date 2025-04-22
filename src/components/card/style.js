import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Card = styled.div`
    background-color:rgb(6, 5, 36);
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    gap: 0px 20px;
    row-gap: 0px;
    column-gap: 20px;
    border-style: solid;
    border-width: 0px 0px 02px 0px;
    border-color: #424C77;
    border-radius: 20px;
    margin: 0 0 40px 0;
    padding: 20px;

    @keyframes slideRight {
        0% {
            transform: translateX(-100px);
            opacity: 0;
        }
    
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
`