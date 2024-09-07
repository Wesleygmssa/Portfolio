import { NavLink, useLocation } from "react-router-dom";
import { HeaderContainer, HamburgerButton, NavMenu } from "./styles";
import React, { useState } from "react";

const Header: React.FC = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu aberto/fechado

    const links = [
        { to: "/about", label: "SOBRE" },
        { to: "/works", label: "TRABALHOS" },
        { to: "/projects", label: "PROJETOS" },
        { to: "/events", label: "EVENTOS" },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Alterna o estado do menu
    };

    return (
        <HeaderContainer>
            <HamburgerButton onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerButton>

            <NavMenu isOpen={isOpen}>
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            isActive ? "menuActive" : ""
                        }
                        onClick={() => setIsOpen(false)} // Fecha o menu ao clicar em um link
                    >
                        {link.label}
                    </NavLink>
                ))}
            </NavMenu>
        </HeaderContainer>
    );
};

export default Header;
