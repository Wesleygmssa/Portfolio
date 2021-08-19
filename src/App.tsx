import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Routes from "./routes";

import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { useState } from "react";
import AppProvider from "./context/index.";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

const App: React.FC = () => {
    const [theme, setTheme] = useState(light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <AppProvider>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes />
                    <ThemeSwitcher toggleTheme={toggleTheme} />
                </BrowserRouter>
                <GlobalStyles />
            </ThemeProvider>
        </AppProvider>
    );
};

export default App;
