import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Routes from "./routes";
import AppWrapper from "./components/AppWrapper";

const App: React.FC = () => {
    return (
        <AppWrapper>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
            <GlobalStyles />
        </AppWrapper>
    );
};

export default App;
