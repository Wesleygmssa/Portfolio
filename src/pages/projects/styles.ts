import styled from "styled-components";

export const Content = styled.section`
    min-height: 100vh;
    background-color: #fff; /* Fundo branco */

    .content-loading {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }

    img {
        margin: 0 auto;
        width: 5rem;
    }

    h4 {
        max-width: 31.25rem;
        width: 100%;
        color: #444; /* Cinza escuro */
        padding: 16px 8px;
        margin: 16px auto;
        text-align: center;
        font-size: 20px;
        border-bottom: 1px solid #ddd; /* Borda leve */
    }
`;

export const Cards = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Distribui os cards uniformemente */
    max-width: 1180px;
    width: 100%;
    margin: 64px auto;
    padding: 16px 25px;

    @media (max-width: 1000px) {
        justify-content: center;
    }
`;

export const Card = styled.div`
    flex: 1 1 calc(33.33% - 32px); /* Faz com que os cards ocupem 33% da largura com espaçamento */
    max-width: calc(33.33% - 32px);
    margin: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    background-color: #f9fafb; /* Fundo suave */
    border: 1px solid #e0e0e0; /* Borda leve */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05); /* Sombra leve */

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
        transform: scale(1.03); /* Efeito hover */
    }

    .card-img {
        max-width: 300px;
        width: 100%;
    }

    img {
        max-width: 300px;
        width: 100%;
        max-height: 150px;
        border-radius: 8px;
        object-fit: cover;
    }

    a {
        color: #1d4ed8; /* Azul escuro */
        font-weight: bold;
    }

    @media (max-width: 850px) {
        flex: 1 1 calc(50% - 32px); /* Ajusta para 2 cards por linha em telas menores */
        max-width: calc(50% - 32px);
    }

    @media (max-width: 500px) {
        flex: 1 1 100%; /* Ajusta para 1 card por linha em telas muito pequenas */
        max-width: 100%;
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;

    h3 {
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        padding: 16px;
        color: #333; /* Título em cinza escuro */
    }

    p {
        display: flex;
        height: 190px;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        line-height: 25px;
        min-height: 80px;
        font-family: "Open Sans", sans-serif;
        color: #555; /* Texto em cinza médio */
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        font-weight: 500;
        width: 45%;
        background-color: #f87171; /* Vermelho suave */
        color: #fff;
        padding: 3px;
        position: absolute;
        border-radius: 5px;
        transform: rotate(-30deg);
        top: 8px;
        left: -45px;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 12px;
    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 16px;
`;

export const Icon = styled.div`
    & + div {
        margin-left: 16px;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center; /* Centralizando os botões */
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;

    a {
        width: 100%;
        font-size: 14px;
        transition: 0.5s;
        border: 0;
        font-size: 14px;
        color: #fff; /* Cor branca para texto dos botões */
        text-align: center; /* Alinhamento centralizado */
    }

    .button-bloqued {
        flex: 1;
        color: #fff;
        border: 1px solid #838383;
        box-sizing: border-box;
        cursor: pointer;
        padding: 16px 16px;
        font-style: normal;
        font-weight: bold;
        text-align: center;
        outline: none;
        border-radius: 5px;
        background-color: #1d4ed8; /* Azul escuro */
        opacity: 1; /* Opacidade corrigida */

        &:disabled {
            cursor: not-allowed;
        }
    }
`;

export const Tec = styled.div`
    width: 300px;
    min-height: 110px;
    margin-top: 10px;

    div {
        display: inline-block;
        font-size: 12px;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 10px;
        font-weight: bold;
        max-height: 200px;
    }
`;
