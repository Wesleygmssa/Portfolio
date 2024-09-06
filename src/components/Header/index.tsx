import { NavLink, useLocation } from "react-router-dom";
import { HeaderContainer } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import React, { useContext } from "react";

const Header: React.FC = () => {
    const location = useLocation();
    const { colors, title } = useContext(ThemeContext) || {}; // Pegando a função de toggle do contexto

    const links = [
        { to: "/about", label: "SOBRE" },
        { to: "/works", label: "TRABALHOS" },
        { to: "/projects", label: "PROJETOS" },
    ];

    return (
        <HeaderContainer>
            <div className="nav">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            isActive ? "menuActive" : ""
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>
            {/* <div className="switch">
                <Switch
                    onChange={toggleTheme} // Agora alterna o tema
                    checked={title === "dark"} // Verifica se o tema atual é escuro
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    handleDiameter={20}
                    offColor={colors?.secondary || "#888"}
                    onColor={colors?.primary || "#000"}
                />
            </div> */}
        </HeaderContainer>
    );
};

export default Header;
