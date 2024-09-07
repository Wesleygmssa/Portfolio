import styled from "styled-components";

export const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    text-align: center;
    margin: 80px 0;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media (max-width: 1200px) {
        font-size: 1.8rem;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Centraliza verticalmente */
    text-align: center;
    height: 100%;
    padding: 16px;
    position: relative;

    h3 {
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        padding: 8px 0;
        color: #333;
        text-align: center;

        @media (max-width: 1200px) {
            font-size: 18px;
        }

        @media (max-width: 768px) {
            font-size: 16px;
        }

        @media (max-width: 480px) {
            font-size: 14px;
        }
    }

    p {
        display: block;
        font-size: 14px;
        line-height: 1.5;
        font-family: "Open Sans", sans-serif;
        color: #555;
        width: 100%;
        height: auto;
        margin: 10px 0;
        text-align: center; /* Centraliza horizontalmente */
        min-height: 80px;

        @media (max-width: 1200px) {
            font-size: 13px;
        }

        @media (max-width: 768px) {
            font-size: 12px;
        }

        @media (max-width: 480px) {
            font-size: 11px;
        }
    }
`;

export const Technologies = styled.p`
    font-size: 12px;
    color: #1d4ed8; /* Cor azul para destacar */
    font-weight: bold;
    text-align: center; /* Centraliza o texto */
    margin-top: 10px; /* Espaçamento em cima */

    span {
        background-color: #e0f2fe; /* Fundo leve para destaque */
        color: #0369a1; /* Cor do texto */
        padding: 5px;
        border-radius: 4px;
        margin-right: 5px; /* Espaçamento entre as tecnologias */
    }

    @media (max-width: 768px) {
        font-size: 11px; /* Ajuste para tablets */
    }

    @media (max-width: 480px) {
        font-size: 10px; /* Ajuste para dispositivos móveis */
    }
`;

export const Content = styled.section`
    min-height: 100vh;
    padding: 20px;
    background-color: #fff;

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
        color: #444;
        padding: 16px 8px;
        margin: 16px auto;
        text-align: center;
        font-size: 20px;
        border-bottom: 1px solid #ddd;
    }
`;

export const Cards = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    max-width: 1180px;
    width: 100%;
    margin: 34px auto;
    padding: 0 20px;
`;

export const Card = styled.div`
    flex: 1 1 calc(50% - 16px);
    max-width: calc(50% - 16px);
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9fafb;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
        transform: scale(1.03);
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        object-fit: cover;
    }

    a {
        color: #1d4ed8;
        font-weight: bold;
    }

    @media (max-width: 1000px) {
        flex: 1 1 100%;
        max-width: 100%;
    }
`;

export const GroupButton = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;

    a,
    button {
        padding: 10px 20px;
        background-color: #1d4ed8;
        color: #fff;
        border: none;
        border-radius: 5px;
        text-decoration: none;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    a:hover,
    button:hover {
        background-color: #1e3a8a;
    }

    button:disabled {
        background-color: #cbd5e1;
        cursor: not-allowed;
    }
`;
