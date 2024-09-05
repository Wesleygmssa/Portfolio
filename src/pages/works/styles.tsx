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
    }

    span {
        font-size: 1.5rem;
        color: #666; /* Texto em cinza médio */
        margin-bottom: 30px;
        display: block;
        font-style: italic;
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
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    h3 {
        font-size: 2rem;
        color: #0077b6; /* Azul para subtítulos */
        margin-bottom: 15px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
    }

    p {
        font-size: 1.2rem;
        color: #555; /* Texto em cinza mais suave */
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.5;
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
    }

    a:hover {
        background-color: #40916c; /* Verde um pouco mais escuro no hover */
        transform: scale(1.05);
    }

    /* Responsividade */
    @media (max-width: 768px) {
        padding: 20px;

        h1 {
            font-size: 2.5rem;
        }

        span {
            font-size: 1.3rem;
        }

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.8rem;
        }

        p {
            font-size: 1rem;
        }

        li {
            padding: 20px;
            margin-bottom: 30px;
        }

        img {
            width: 300px;
        }
    }

    @media (max-width: 480px) {
        padding: 10px;

        h1 {
            font-size: 2rem;
        }

        span {
            font-size: 1.1rem;
        }

        h2 {
            font-size: 1.8rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        p {
            font-size: 0.9rem;
        }

        li {
            padding: 15px;
            margin-bottom: 20px;
        }

        img {
            width: 250px;
        }
    }
`;
