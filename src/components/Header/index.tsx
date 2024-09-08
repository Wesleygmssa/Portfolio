import { NavLink } from "react-router-dom";
import { HeaderContainer, HamburgerButton, NavMenu } from "./styles";
import React, { useState } from "react";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu aberto/fechado

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Alterna o estado do menu
    };

    // Função para fechar o menu ao clicar em um link
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <HeaderContainer>
            <HamburgerButton onClick={toggleMenu} isOpen={isOpen}>
                <span />
                <span />
                <span />
            </HamburgerButton>
            <NavMenu isOpen={isOpen}>
                <NavLink
                    to="/about"
                    onClick={handleLinkClick}
                    className={({ isActive }) => (isActive ? "menuActive" : "")}
                >
                    Sobre Mim
                </NavLink>
                <NavLink
                    to="/works"
                    onClick={handleLinkClick}
                    className={({ isActive }) => (isActive ? "menuActive" : "")}
                >
                    Trabalhos
                </NavLink>
                <NavLink
                    to="/projects"
                    onClick={handleLinkClick}
                    className={({ isActive }) => (isActive ? "menuActive" : "")}
                >
                    Projetos
                </NavLink>
                <NavLink
                    to="/events"
                    onClick={handleLinkClick}
                    className={({ isActive }) => (isActive ? "menuActive" : "")}
                >
                    Eventos
                </NavLink>
                <NavLink
                    to="/blog"
                    onClick={handleLinkClick}
                    className={({ isActive }) => (isActive ? "menuActive" : "")}
                >
                    Blog
                </NavLink>
            </NavMenu>
        </HeaderContainer>
    );
};

export default Header;
