import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/about";
import Projects from "../pages/projects";

const Routes: React.FC = () => {
    // useEffect(() => {
    //     if (window.location.pathname === "/") {
    //         window.location.pathname = "/about";
    //     }
    // }, []);
    // teste

    return (
        <Switch>
            <Route path="/" exact render={() => <About />} />
            <Route path="/projects" render={() => <Projects />} />
        </Switch>
    );
};

export default Routes;
