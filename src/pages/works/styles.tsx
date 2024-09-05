import styled, { keyframes } from "styled-components";

// Animação para o título
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px); /* Começa mais acima */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Termina na posição original */
  }
`;

export const Container = styled.div`
    padding: 40px;
    background-color: #0d1117; /* Cor de fundo solicitada */
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 40px;
    background-color: #161b22; /* Cor de fundo interna mais clara para contraste */
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    text-align: center;

    h1 {
        font-size: 3rem;
        margin-bottom: 20px;
        color: #ffffff;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    span {
        font-size: 1.5rem;
        color: #bbbbbb;
        margin-bottom: 30px;
        display: block;
        font-style: italic;
    }

    section {
        margin-top: 50px;
    }

    h2 {
        font-size: 2.5rem;
        color: #58a6ff; /* Azul claro para destaque */
        margin-bottom: 40px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: bold;
        border-bottom: 2px solid #58a6ff; /* Adicionando uma linha embaixo */
        display: inline-block;
        padding-bottom: 10px;
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center; /* Centraliza os itens */
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
        padding: 30px;
        border: 2px solid #30363d;
        border-radius: 15px;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        background: #21262d;
        width: 100%;
        max-width: 800px;
        text-align: center;
    }

    li:hover {
        transform: scale(1.05);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    img {
        max-width: 100%;
        width: 350px;
        height: auto;
        border-radius: 12px;
        margin-bottom: 20px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    h3 {
        font-size: 2rem;
        color: #58a6ff;
        margin-bottom: 15px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
    }

    p {
        font-size: 1.2rem;
        color: #c9d1d9;
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.5;
    }

    a {
        display: inline-block;
        padding: 12px 20px;
        background-color: #238636;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        letter-spacing: 0.5px;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    a:hover {
        background-color: #2ea043;
        transform: scale(1.05);
    }
`;
