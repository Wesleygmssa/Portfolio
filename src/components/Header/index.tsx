import { NavLink, useLocation } from "react-router-dom";
import { HeaderContainer } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import React, { useContext } from "react";

const Header: React.FC = () => {
    const location = useLocation();
    const { colors } = useContext(ThemeContext) || {};

    return (
        <HeaderContainer>
            <div className="nav">
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "menuActive" : "")}
                >
                    ABOUT
                </NavLink>

                <NavLink
                    to="/works"
                    className={({ isActive }) => (isActive ? "menuActive" : "")}
                >
                    WORKS
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) => (isActive ? "menuActive" : "")}
                >
                    PROJECTS
                </NavLink>
            </div>
            {/* <div className="switch">
                <Switch
                    onChange={() => {}}
                    checked={false}
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
