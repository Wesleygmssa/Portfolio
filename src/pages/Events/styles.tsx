import styled from "styled-components";

export const EventsWrapper = styled.div`
    background-color: #f5f5f5; /* Fundo claro padrão */
    padding: 50px 20px;
    min-height: 100vh;
`;

export const EventsTitle = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 50px;
    color: #333; /* Cor de título padrão */
    font-family: "Poppins", sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

export const EventsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 3 colunas */
    gap: 30px;
    justify-items: center;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(
            auto-fit,
            minmax(250px, 1fr)
        ); /* Ajuste para telas menores */
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(
            auto-fit,
            minmax(200px, 1fr)
        ); /* Ajuste para tablets */
    }
`;

export const EventCard = styled.div`
    position: relative;
    width: 100%;
    max-width: 300px; /* Tamanho mais compacto para caber 3 por linha */
    background-color: #fff; /* Fundo claro para o card */
    border-radius: 10px; /* Cantos arredondados */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Sombra suave */
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2); /* Sombra mais intensa no hover */
    }
`;

export const EventImage = styled.img`
    width: 100%;
    height: 200px; /* Dimensão ajustada para caber melhor no layout */
    object-fit: cover;
    transition: all 0.4s ease;

    &:hover {
        filter: brightness(70%);
    }
`;

export const EventOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }
`;

export const EventDescription = styled.p`
    font-size: 1rem;
    color: #333; /* Cor do texto padrão */
    text-align: center;
    max-width: 90%;
    font-family: "Open Sans", sans-serif;
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalImage = styled.img`
    max-width: 90%;
    max-height: 90%;
    border-radius: 15px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #ff4f4f;
    }
`;
