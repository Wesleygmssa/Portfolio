import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #2b2b2b;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

export const HamburgerButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 25px;
    cursor: pointer;
    z-index: 1001;

    span {
        width: 100%;
        height: 3px;
        background-color: #ffffff;
        transition: all 0.3s ease;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export const NavMenu = styled.nav`
    display: flex;
    gap: 2rem;
    flex-grow: 1;
    justify-content: center;

    a {
        text-decoration: none;
        font-size: 1.2rem;
        color: #ddd;
        position: relative;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: #ffffff;
        }

        &.menuActive {
            color: #ffffff;
            font-weight: bold;

            &::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 3px;
                background-color: #ffffff;
                bottom: -5px;
                left: 0;
                transition: width 0.3s ease-in-out;
            }
        }
    }

    .menu-item {
        position: relative;

        .dropdown {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #333;
            padding: 1rem;
            border-radius: 4px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
            z-index: 1000;

            a {
                display: block;
                padding: 0.5rem 1rem;
                color: #ddd;

                &:hover {
                    color: #ffffff;
                }
            }
        }

        &:hover .dropdown {
            display: block;
        }
    }

    // Estilo para o item desabilitado
    .disabled {
        font-size: 1.2rem;
        color: #666;
        cursor: not-allowed;
        opacity: 0.5;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        position: absolute;
        top: 60px;
        right: 0;
        background-color: #2b2b2b;
        width: 100%;
        height: ${(props) => (props.isOpen ? "100vh" : "0")};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        overflow: hidden;
        transition: height 0.3s ease;
        z-index: 1000;
    }
`;
