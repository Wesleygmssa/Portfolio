import styled from "styled-components";

export const EventsTitle = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 30px;
    color: #333;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #007bff, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const EventsDescription = styled.p`
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 50px;
    color: #666;
    font-family: "Open Sans", sans-serif;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.8;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export const EventsWrapper = styled.div`
    background-color: #f1f1f1;
    padding: 50px 20px;
    min-height: 100vh;
`;

export const EventsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 20px;

    @media (max-width: 768px) {
        gap: 20px;
    }
`;

export const EventCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 320px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 480px) {
        max-width: 100%;
    }
`;

export const EventImage = styled.img`
    width: 100%;
    height: 220px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        height: 180px;
    }

    @media (max-width: 480px) {
        height: 150px;
    }
`;

export const EventDescription = styled.p`
    padding: 20px;
    font-size: 1.1rem;
    color: #333;
    text-align: center;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 15px;
    }
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
    opacity: 0;
    animation: fadeIn 0.5s forwards;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const ModalImage = styled.img`
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
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
    transition: color 0.3s ease;

    &:hover {
        color: #ff4f4f;
    }
`;
