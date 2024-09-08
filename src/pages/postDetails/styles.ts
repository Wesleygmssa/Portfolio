import styled from "styled-components";

export const PostBackground = styled.div`
    background: linear-gradient(
        135deg,
        #007bff,
        #00d4ff
    ); /* Cores compatíveis com o layout anterior */
    padding: 80px 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PostImage = styled.img`
    width: 100%;
    max-width: 1200px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    margin-bottom: 40px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Content = styled.div`
    background: #f9f9f9; /* Mantém o branco suave como fundo de conteúdo */
    max-width: 900px;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
`;

export const PostTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: linear-gradient(
        to right,
        #007bff,
        #00d4ff
    ); /* Mesma cor gradiente do título */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const PostContent = styled.div`
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;

    h2 {
        font-size: 1.6rem;
        margin-top: 20px;
        color: #007bff; /* Azul consistente com a paleta */
    }

    p {
        margin: 10px 0;
    }

    pre {
        background-color: #e9ecef; /* Tom claro de fundo */
        padding: 15px;
        border-radius: 5px;
        margin: 20px 0;
        overflow-x: auto;
    }

    code {
        background-color: #e3f2fd; /* Azul claro consistente */
        padding: 5px;
        border-radius: 5px;
    }
`;

export const AuthorInfo = styled.p`
    font-size: 1rem;
    color: #666;
    text-align: center;
    margin-top: 20px;
    border-top: 1px solid #eee;
    padding-top: 20px;
`;
