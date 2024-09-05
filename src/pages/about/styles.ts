import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    min-height: 80vh;
    position: relative;
    padding: 45px 30px;
    background-color: #f5f5f5; /* Fundo leve para destacar o conteúdo */
    border-radius: 10px; /* Cantos arredondados para suavizar o layout */

    @media (min-width: 700px) {
        height: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: 28px;
        color: #333; /* Cor mais escura para destaque */
        overflow: hidden;
        width: 100%;
        max-width: 500px;
        max-height: 60px;
        word-wrap: break-word;

        @media (max-width: 500px) {
            font-size: 22px;
        }

        @media (min-width: 768px) {
            font-size: 32px;
        }
    }

    h3 {
        text-align: center;
        font-size: 24px;
        color: #666; /* Texto um pouco mais claro */
        padding: 16px 20px;
        margin-bottom: 1rem;
        opacity: 0.8;

        @media (max-width: 500px) {
            font-size: 20px;
        }
    }

    img {
        width: 100%;
        max-width: 500px;
        height: auto;
        object-fit: cover;
        border-radius: 10px; /* Arredonda as bordas da imagem */
        border: 4px solid #ddd;
        padding: 5px;
        margin-bottom: 1rem;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
        transition: transform 0.3s ease, opacity 0.3s ease;

        &:hover {
            transform: scale(1.05);
            opacity: 0.85;
        }

        @media (max-width: 500px) {
            max-width: 300px;
        }
    }

    p {
        max-width: 810px;
        width: 100%;
        line-height: 1.8;
        padding: 0px 15px;
        font-size: 18px; /* Aumentei o tamanho da fonte para facilitar a leitura */
        color: #444; /* Cor do texto um pouco mais escura para contraste */
        font-weight: 500;

        @media (max-width: 500px) {
            font-size: 16px;
        }
    }

    button {
        margin: 80px 40px;
        font-size: 24px;
        text-align: center;
        background-color: #ff6347; /* Cor chamativa para o botão */
        border: none; /* Removi a borda */
        color: white;
        border-radius: 5px;
        padding: 10px 20px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra leve */
        transition: background-color 0.3s ease, transform 0.3s ease;

        &:hover {
            background-color: #e55347; /* Cor um pouco mais escura no hover */
            transform: scale(1.05); /* Leve aumento no hover */
        }

        @media (max-width: 500px) {
            font-size: 18px;
            margin: 50px 20px;
        }
    }

    .painel-header {
        display: flex;
        width: 100%;
        padding: 10px 20px;
        border: 2px solid #ddd;
        border-radius: 10px 10px 0 0; /* Cantos arredondados no topo */
        background-color: #f7f7f7; /* Cor de fundo suave */
        gap: 1rem;
    }
`;

export const Painel = styled.div`
    padding: 2rem 1.5rem;
    border: 2px solid #ddd;
    border-radius: 0 0 10px 10px; /* Cantos arredondados no rodapé */
    background-color: #fff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Sombra mais leve */
    transition: all 0.3s ease; /* Transição para uma experiência mais suave */

    &:hover {
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15); /* Efeito no hover */
    }

    h3 {
        margin-top: 20px;
        color: #444; /* Cor mais escura para o texto */
    }

    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        li {
            font-size: 1.125rem;
            list-style: none;
            padding: 10px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            color: #ff6347;

            /* &:hover {
                color: #ff6347;
                font-size: 14px;
                transform: scale(1.05);
            } */
        }
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #555;

        @media (max-width: 500px) {
            font-size: 16px;
            text-align: center;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BoxSkills = styled.div`
    max-width: 900px;
    width: 100%;
    position: relative;
    left: -60px;

    @media (max-width: 768px) {
        left: 0;
        padding: 0 15px;
    }
`;

const WidthSkill = keyframes`
  from {
    width: 0;
  }
  to {
    width: 60%;
  }
`;

export const Skills = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & + div {
        margin-top: 20px;
    }

    span svg {
        top: -10px;
        position: relative;
    }

    progress[value] {
        width: 60%;
        height: 20px;
        animation: ${WidthSkill} 4s;

        @media (max-width: 500px) {
            width: 100%;
        }
    }

    strong {
        margin-left: 5px;
    }

    span {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        align-items: center;
        width: 160px;
    }
`;
