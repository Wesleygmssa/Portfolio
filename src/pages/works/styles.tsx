import styled from "styled-components";

export const Container = styled.div`
    padding: 40px;
    background: linear-gradient(
        135deg,
        #ff7e5f,
        #feb47b
    ); /* Gradiente vibrante */
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 40px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    text-align: center;

    h1 {
        font-size: 3rem;
        margin-bottom: 20px;
        color: #333;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    span {
        font-size: 1.5rem;
        color: #555;
        margin-bottom: 30px;
        display: block;
        font-style: italic;
    }

    section {
        margin-top: 50px;
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
        border: 2px solid #ff7e5f;
        border-radius: 15px;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        background: #f9f9f9;
        width: 100%;
        max-width: 800px; /* Diminuí o tamanho máximo para centralizar melhor */
        text-align: center; /* Centraliza o texto */
    }

    li:hover {
        transform: scale(1.05); /* Efeito de zoom ao passar o mouse */
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    img {
        max-width: 100%;
        width: 350px; /* Aumentei o tamanho da imagem */
        height: auto;
        border-radius: 12px;
        margin-bottom: 20px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Sombra mais marcada */
    }

    h3 {
        font-size: 2rem;
        color: #ff7e5f;
        margin-bottom: 15px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
    }

    p {
        font-size: 1.2rem;
        color: #555;
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.5;
    }

    a {
        display: inline-block;
        padding: 12px 20px;
        background-color: #ff7e5f;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        letter-spacing: 0.5px;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    a:hover {
        background-color: #feb47b;
        transform: scale(1.05); /* Efeito de zoom no botão */
    }
`;
