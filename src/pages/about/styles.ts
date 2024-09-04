import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    min-height: 80vh;
    position: relative;
    padding: 45px 30px;

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
        font-size: 24px;
        overflow: hidden;
        width: 500px;
        max-height: 60px;
        word-wrap: break-word; /* Break text into multiple lines if it exceeds width */

        @media (max-width: 500px) {
            font-size: 20px;
        }
    }

    h3 {
        text-align: center;
        font-size: 24px;
        padding: 16px 20px;
        margin-bottom: 1rem;
        opacity: 0.6;
    }

    img {
        width: 500px; /* Aumentando o tamanho da imagem */
        height: 500px; /* Aumentando o tamanho da imagem */
        object-fit: cover;
        border-radius: 0%; /* Deixando a imagem quadrada */
        border: 4px solid #707070;
        padding: 5px;
        margin-bottom: 1rem;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);

        @media (max-width: 500px) {
            width: 300px; /* Tamanho menor para telas pequenas */
            height: 300px;
        }
    }

    .typing-animation {
        animation: linkCursor 500ms steps(40) infinite,
            typing 4s steps(40) 1s both;
    }

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 9em;
        }
    }

    @keyframes linkCursor {
        from {
            border-right-color: rgba(255, 255, 255, 0.75);
        }
        to {
            border-right-color: transparent;
        }
    }

    p {
        max-width: 810px;
        width: 100%;
        line-height: 25px;
        padding: 0px 15px;
        position: relative;
        font-weight: 500;
    }

    span {
        text-align: center;
        padding: 0px 16px;
    }

    button {
        margin: 100px 40px;
        font-size: 24px;
        text-align: center;
        background-color: transparent;
    }

    .painel-header {
        display: flex;
        width: 100%;
        padding: 10px 20px;
        border: 2px solid #707070;
        border-radius: 0.6rem 0.6rem 0rem 0rem;
        background-color: #222222;
        gap: 1rem;

        .ball {
            width: 25px;
            height: 25px;
            border-radius: 50%;
        }

        .red {
            background-color: #d14d4d;
        }

        .yellow {
            background-color: #d1bc4d;
        }

        .green {
            background-color: #87d14d;
        }
    }
`;

export const Painel = styled.div`
    padding: 2rem 1rem;
    border: 2px solid #707070;
    border-radius: 0rem 0rem 0.6rem 0.6rem;
    border-top: none;

    h3 {
        margin-top: 20px;
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
            transition: all 0.2s;

            &:hover {
                color: var(--primary-color);
                font-size: 14px;
            }
        }
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;

        @media (max-width: 500px) {
            font-size: 20px;
            text-align: center;
            align-items: center;
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
