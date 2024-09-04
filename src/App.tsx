import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Routes from "./routes";
import usePersistedState from "./utils/usePersistedState";

import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import AppProvider from "./context/index.";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

const App: React.FC = () => {
    const [theme, setTheme] = usePersistedState(dark);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppProvider>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
                <ThemeSwitcher toggleTheme={toggleTheme} />
                <GlobalStyles />
            </AppProvider>
        </ThemeProvider>
    );
};

export default App;

// function App() {
//     return (
//         <div>
//             <h1>Hello, Vite + React!</h1>
//         </div>
//     );
// }

// export default App;
