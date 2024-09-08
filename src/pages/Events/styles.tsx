// src/pages/styles.ts
import styled from "styled-components";

export const EventsTitle = styled.h1`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
    color: #333;
    font-family: "Arial", sans-serif;
`;

export const EventsDescription = styled.p`
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 40px;
    color: #555;
    font-family: "Arial", sans-serif;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
`;

export const EventsWrapper = styled.div`
    background-color: #fff;
    padding: 20px;
    min-height: 100vh;
`;

// export const EventsTitle = styled.h1`
//     font-size: 2rem;
//     text-align: center;
//     margin-bottom: 40px;
//     color: #333;
// `;

export const EventsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; // Centraliza os cards horizontalmente
    gap: 20px;
    padding: 20px;
`;

export const EventCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const EventImage = styled.img`
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
    height: 200px;
`;

export const EventDescription = styled.p`
    padding: 15px;
    font-size: 14px;
    color: #333;
    text-align: center;
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalImage = styled.img`
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    outline: none;
`;
