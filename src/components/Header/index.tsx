import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { useLocation } from "react-router-dom";
import Swicth from "react-switch";
import { ThemeContext } from "styled-components";
import React, { useContext } from "react";

const Header: React.FC = () => {
    const location = useLocation();
    const { colors } = useContext(ThemeContext);

    return (
        <HeaderContainer>
            <div className="nav">
                <NavLink exact to="/about" activeClassName="menuActive">
                    ABOUT
                </NavLink>

                <NavLink to="/projects" activeClassName="menuActive">
                    PROJECTS
                </NavLink>
            </div>
            <div className="swicth">
                <Swicth
                    onChange={() => {}}
                    checked={false}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    handleDiameter={20}
                    offColor={colors.secondary}
                    onColor={colors.primary}
                />
            </div>
        </HeaderContainer>
    );
};

export default Header;
