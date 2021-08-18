import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/light";
import { useState } from "react";

const App: React.FC = () => {
    const [theme, setTheme] = useState(light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeProvider theme={light}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default App;
