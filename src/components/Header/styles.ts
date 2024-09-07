import styled from "styled-components";

// Estilos para o container do Header
export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #2b2b2b;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    position: relative; /* Garante que o z-index do menu funcione corretamente */

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

// Estilos para o botão de hambúrguer
export const HamburgerButton = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 25px;
    cursor: pointer;
    z-index: 1001; /* Mantém o botão acima do menu */

    span {
        width: 100%;
        height: 3px;
        background-color: #ffffff;
        transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

// Estilos para o menu de navegação
export const NavMenu = styled.nav`
    display: flex;
    gap: 2rem;

    a {
        text-decoration: none;
        font-size: 1.2rem;
        color: #ddd;
        position: relative;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: #ffffff;
        }

        &:hover::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            background-color: #ffffff;
            bottom: -5px;
            left: 0;
            transition: width 0.3s ease-in-out;
        }

        &::after {
            content: "";
            position: absolute;
            width: 0;
            height: 3px;
            background-color: #ffffff;
            bottom: -5px;
            left: 0;
            transition: width 0.3s ease-in-out;
        }
    }

    .menuActive {
        color: #ffffff;
        font-weight: bold;

        &::after {
            width: 100%;
            background-color: #ffffff;
            box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.5);
        }
    }

    @media (min-width: 768px) {
        justify-content: center; /* Centraliza o menu no desktop */
        flex-grow: 1; /* Para ocupar o máximo possível de espaço e centralizar */
    }

    @media (max-width: 768px) {
        position: absolute;
        top: 60px;
        right: 0;
        background-color: #2b2b2b;
        width: 100%;
        height: ${(props) =>
            props.isOpen ? "100vh" : "0"}; /* Controle da altura */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        overflow: hidden;
        transition: height 0.3s ease;
        z-index: 1000; /* Garante que o menu esteja sobreposto a outros elementos */

        a {
            font-size: 1.5rem;
        }
    }
`;
