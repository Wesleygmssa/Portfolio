import React, { useContext } from "react";
// import Switch, { ReactSwitchProps } from "react-switch"; // Importando ReactSwitchProps
import { DefaultTheme, ThemeContext } from "styled-components";

import { Container } from "./styles";

interface Props {
    toggleTheme: () => void;
}

export const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext) as DefaultTheme;

    return (
        <Container>
            <span style={{ fontSize: 20, paddingRight: 5 }}>🌞</span>
            {/* <Switch
                onChange={toggleTheme}
                checked={title === "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={30}
                handleDiameter={15}
                offColor="#afacac"
                onColor="#085D8B"
                offHandleColor={colors.secondary}
                onHandleColor={colors.text}
            /> */}
            <span style={{ fontSize: 20 }}>🌛</span>
        </Container>
    );
};
