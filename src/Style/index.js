import styled, { createGlobalStyle } from "styled-components"

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Noto Sans", sans-serif;
    }
`
export const Container = styled.div`
    padding: 0 28px;
    background-color: #0e1119;
`

export const Secao = styled.section`
    padding: 10vh 5.6vw;
`

export const Titulo = styled.h1`
    clear: both;
    font-weight: 600;
    display: block;
    font-size: 32px;
    margin-bottom: 40px;
    padding-top: 5px;
    color: #ffff;
`
export const Texto = styled.p`
    color: #ffff;
    margin-bottom: 40px;
`
export const Botao = styled.button`
    display: inline-flex;
    font-size: 18px;
    letter-spacing: -0.1px;
    font-weight: 500;
    line-height: 16px;
    text-decoration: none;
    background-color: #FDC45F;
    border: none;
    cursor: pointer;
    justify-content: center;
    padding: 16px 36px;
    height: 50px;
    text-align: center;
    white-space: nowrap;
    border-radius: 8px;
    animation: slideRight 1s ease forwards;



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
export const Logo = styled.img`
    max-width: 100px;
    margin-bottom: 32px;
`
export const Highlight = styled.span`
    color: #FDC45F;
`

export default EstiloGlobal