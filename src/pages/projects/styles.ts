import styled from "styled-components";

export const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    text-align: center;
    margin: 80px 0;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media (max-width: 1200px) {
        font-size: 1.8rem; /* Tamanho para telas grandes */
    }

    @media (max-width: 768px) {
        font-size: 1.5rem; /* Tamanho para tablets */
    }

    @media (max-width: 480px) {
        font-size: 1.2rem; /* Tamanho para dispositivos móveis */
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 100%;
    padding: 16px;
    position: relative;

    h3 {
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        padding: 8px 0;
        color: #333;
        text-align: center;

        @media (max-width: 1200px) {
            font-size: 18px; /* Ajuste para telas grandes */
        }

        @media (max-width: 768px) {
            font-size: 16px; /* Ajuste para tablets */
        }

        @media (max-width: 480px) {
            font-size: 14px; /* Ajuste para dispositivos móveis */
        }
    }

    p {
        display: block;
        font-size: 14px;
        line-height: 1.5;
        font-family: "Open Sans", sans-serif;
        color: #555;
        width: 100%;
        height: auto;
        margin: 10px 0;
        text-align: justify;
        min-height: 80px;

        @media (max-width: 1200px) {
            font-size: 13px; /* Ajuste para telas grandes */
        }

        @media (max-width: 768px) {
            font-size: 12px; /* Ajuste para tablets */
        }

        @media (max-width: 480px) {
            font-size: 11px; /* Ajuste para dispositivos móveis */
        }
    }
`;

export const Content = styled.section`
    min-height: 100vh;
    /* margin-top: -70px; */
    padding: 20px;
    background-color: #fff;

    .content-loading {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }

    img {
        margin: 0 auto;
        width: 5rem;
    }

    h4 {
        max-width: 31.25rem;
        width: 100%;
        color: #444;
        padding: 16px 8px;
        margin: 16px auto;
        text-align: center;
        font-size: 20px;
        border-bottom: 1px solid #ddd;
    }
`;
export const Cards = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* Espaçamento entre os cards */
    justify-content: center; /* Centraliza os cards */
    max-width: 1180px;
    width: 100%;
    margin: 34px auto;
    padding: 0 20px;
`;

export const Card = styled.div`
    flex: 1 1 calc(50% - 16px); /* Ajuste para garantir 2 cards por linha */
    max-width: calc(50% - 16px);
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9fafb;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
        transform: scale(1.03);
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        object-fit: cover;
    }

    a {
        color: #1d4ed8;
        font-weight: bold;
    }

    @media (max-width: 1000px) {
        flex: 1 1 100%; /* Cards em linha única em telas menores */
        max-width: 100%;
    }
`;

// export const Cards = styled.section`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     max-width: 1180px;
//     width: 100%;
//     margin: 34px auto;
//     padding: 0px 20px;

//     @media (max-width: 1000px) {
//         justify-content: center;
//     }
// `;

// export const Card = styled.div`
//     flex: 1 1 calc(22% - 32px); /* Ajuste para 4 cards por linha */
//     max-width: calc(25% - 32px);
//     height: auto;
//     margin: 16px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 16px;
//     border-radius: 8px;
//     cursor: pointer;
//     transition: 0.3s;
//     background-color: #f9fafb;
//     border: 1px solid #e0e0e0;
//     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);

//     &:hover {
//         box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
//         transform: scale(1.03);
//     }

//     .card-img {
//         max-width: 300px;
//         width: 100%;
//     }

//     img {
//         max-width: 300px;
//         width: 100%;
//         max-height: 150px;
//         border-radius: 8px;
//         object-fit: cover;
//     }

//     a {
//         color: #1d4ed8;
//         font-weight: bold;
//     }

//     @media (max-width: 1000px) {
//         flex: 1 1 calc(45% - 32px);
//         max-width: calc(45% - 32px);
//     }

//     @media (max-width: 600px) {
//         flex: 1 1 100%;
//         max-width: 100%;
//     }
// `;

// export const CardContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
//     text-align: center;
//     height: 100%;
//     padding: 16px;
//     position: relative;

//     h3 {
//         width: 100%;
//         font-size: 20px;
//         font-weight: bold;
//         padding: 8px 0;
//         color: #333;
//         text-align: center;
//     }

//     p {
//         display: block;
//         font-size: 14px;
//         line-height: 1.5;
//         font-family: "Open Sans", sans-serif;
//         color: #555;
//         width: 100%;
//         height: auto;
//         margin: 10px 0;
//         text-align: justify;
//         min-height: 80px;
//     }

//     span {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         font-size: 10px;
//         font-weight: 500;
//         width: 45%;
//         background-color: #f87171;
//         color: #fff;
//         padding: 3px;
//         position: absolute;
//         border-radius: 5px;
//         transform: rotate(-30deg);
//         top: 8px;
//         left: -45px;
//         font-weight: bold;
//         letter-spacing: 2px;
//         font-size: 12px;
//     }
// `;

export const PaginationStyles = styled.div`
    .pagination {
        display: flex;
        justify-content: center;
        padding: 10px 0;
        list-style: none;
    }

    .page-item {
        margin: 0 5px;
    }

    .page-link {
        padding: 8px 16px;
        background-color: #1d4ed8;
        color: white;
        border-radius: 5px;
        text-decoration: none;
        cursor: pointer;
    }

    .page-link:hover {
        background-color: #1e3a8a;
    }
`;

export const GroupButton = styled.div`
    display: flex;
    justify-content: center; /* Centraliza os botões */
    gap: 10px; /* Espaçamento entre os botões */
    margin-top: 20px; /* Margem superior para separar os botões de outros elementos */

    a,
    button {
        padding: 10px 20px; /* Espaçamento interno dos botões */
        background-color: #1d4ed8; /* Cor de fundo azul */
        color: #fff; /* Cor do texto branco */
        border: none; /* Remove a borda padrão */
        border-radius: 5px; /* Arredonda as bordas dos botões */
        text-decoration: none; /* Remove sublinhado de links */
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    a:hover,
    button:hover {
        background-color: #1e3a8a; /* Cor de fundo mais escura ao passar o mouse */
    }

    button:disabled {
        background-color: #cbd5e1; /* Cor mais clara para botões desativados */
        cursor: not-allowed; /* Cursor desativado */
    }
`;
