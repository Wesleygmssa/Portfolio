import styled, { keyframes } from "styled-components";

// Animação para o título
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px); 
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`;

export const Container = styled.div`
    padding: 40px;
    background-color: #fff; /* Fundo branco */
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 40px;
    background-color: #f7f7f7; /* Fundo interno mais claro */
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    text-align: center;

    h1 {
        font-size: 3rem;
        margin-bottom: 20px;
        color: #333; /* Título em cinza escuro */
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
        animation: ${fadeIn} 0.8s ease-out;

        @media (max-width: 1200px) {
            font-size: 2.5rem; /* Tamanho para telas grandes */
        }

        @media (max-width: 768px) {
            font-size: 2rem; /* Tamanho para tablets */
        }

        @media (max-width: 480px) {
            font-size: 1.8rem; /* Tamanho para dispositivos móveis */
        }
    }

    span {
        font-size: 1.5rem;
        color: #666; /* Texto em cinza médio */
        margin-bottom: 30px;
        display: block;
        font-style: italic;

        @media (max-width: 768px) {
            font-size: 1.3rem;
        }

        @media (max-width: 480px) {
            font-size: 1.1rem;
        }
    }

    section {
        margin-top: 50px;
    }

    h2 {
        font-size: 2.5rem;
        color: #0077b6; /* Azul mais forte para destaque */
        margin-bottom: 40px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: bold;
        border-bottom: 2px solid #0077b6;
        display: inline-block;
        padding-bottom: 10px;

        @media (max-width: 1200px) {
            font-size: 2.2rem;
        }

        @media (max-width: 768px) {
            font-size: 1.8rem;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between; /* Adiciona espaço entre os cards */
        gap: 20px;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
        padding: 30px;
        border: 2px solid #ddd; /* Borda mais clara */
        border-radius: 15px;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        background: #f0f0f0; /* Fundo suave */
        width: calc(50% - 20px); /* Ajusta para dois cards por linha */
        text-align: center;

        @media (max-width: 768px) {
            width: 100%;
        }
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
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

        @media (max-width: 768px) {
            width: 300px;
        }

        @media (max-width: 480px) {
            width: 250px;
        }
    }

    h3 {
        font-size: 2rem;
        color: #0077b6; /* Azul para subtítulos */
        margin-bottom: 15px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;

        @media (max-width: 768px) {
            font-size: 1.8rem;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
    }

    p {
        font-size: 1.2rem;
        color: #555; /* Texto em cinza mais suave */
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.5;

        @media (max-width: 768px) {
            font-size: 1rem;
        }

        @media (max-width: 480px) {
            font-size: 0.9rem;
        }
    }

    a {
        display: inline-block;
        padding: 12px 20px;
        background-color: #52b788; /* Verde suave para links */
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        letter-spacing: 0.5px;
        transition: background-color 0.3s ease, transform 0.3s ease;

        &:hover {
            background-color: #40916c; /* Verde um pouco mais escuro no hover */
            transform: scale(1.05);
        }
    }

    /* Responsividade */
    @media (max-width: 768px) {
        padding: 20px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;
