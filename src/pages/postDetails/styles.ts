import styled from "styled-components";

export const PostBackground = styled.div`
    background: linear-gradient(
        to bottom,
        #007bff,
        #0056b3
    ); /* Fundo em degrade de azul */
    min-height: 100vh;
    padding-bottom: 50px;
`;

export const PostImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 400px; /* Limita a altura da imagem */
    object-fit: cover;
    margin-bottom: 20px;
`;

export const Content = styled.section`
    background-color: #fff;
    max-width: 900px;
    margin: -50px auto 0 auto; /* Centraliza o conteúdo */
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const PostTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.5px;
`;

export const PostContent = styled.div`
    font-size: 1.1rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 20px;

    h2 {
        font-size: 1.8rem;
        margin-top: 30px;
        color: #0056b3;
    }

    p {
        margin: 10px 0;
        font-size: 1.1rem;
    }

    code {
        background-color: #f5f5f5;
        padding: 5px;
        border-radius: 5px;
        display: block;
        margin: 10px 0;
        font-size: 1rem;
    }

    pre {
        background-color: #f5f5f5;
        padding: 10px;
        border-radius: 5px;
        overflow-x: auto;
    }

    strong {
        color: #333;
        font-weight: bold;
    }
`;
