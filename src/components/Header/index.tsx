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
                    activeClassName="menuActive"
                >
                    Sobre Mim
                </NavLink>
                <div className="menu-item">
                    <NavLink
                        to="/works"
                        onClick={handleLinkClick}
                        activeClassName="menuActive"
                    >
                        Trabalhos
                    </NavLink>

                    {/* <div className="dropdown">
                        <NavLink to="/works/frontend" onClick={handleLinkClick}>
                            Frontend
                        </NavLink>
                        <NavLink to="/works/backend" onClick={handleLinkClick}>
                            Backend
                        </NavLink>
                        <NavLink to="/works/mobile" onClick={handleLinkClick}>
                            Mobile
                        </NavLink>
                    </div> */}
                </div>
                <NavLink
                    to="/projects"
                    onClick={handleLinkClick}
                    activeClassName="menuActive"
                >
                    Projetos
                </NavLink>
                <NavLink
                    to="/events"
                    onClick={handleLinkClick}
                    activeClassName="menuActive"
                >
                    Eventos
                </NavLink>
                {/* <div className="menu-item">
                    <NavLink
                        to="/portfolio"
                        onClick={handleLinkClick}
                        activeClassName="menuActive"
                    >
                        Portfólio
                    </NavLink>
                    <div className="dropdown">
                        <NavLink to="/portfolio/all" onClick={handleLinkClick}>
                            Todos os Projetos
                        </NavLink>
                        <NavLink
                            to="/portfolio/recent"
                            onClick={handleLinkClick}
                        >
                            Projetos Recentes
                        </NavLink>
                        <NavLink
                            to="/portfolio/open-source"
                            onClick={handleLinkClick}
                        >
                            Open Source
                        </NavLink>
                    </div>
                </div> */}
                {/* <NavLink
                    to="/services"
                    onClick={handleLinkClick}
                    activeClassName="menuActive"
                >
                    Serviços
                </NavLink> */}
                <NavLink
                    to="/blog"
                    onClick={handleLinkClick}
                    activeClassName="menuActive"
                >
                    Blog
                </NavLink>
                {/* Blog Desabilitado */}
                {/* <span className="disabled">Blog (Em breve)</span> */}
            </NavMenu>
        </HeaderContainer>
    );
};

export default Header;
