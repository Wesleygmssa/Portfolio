import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/Home";
import Projects from "../pages/projects/index";

const Routes: React.FC = () => {
useEffect(()=>{
    if(window.location.pathname === "/"){
        window.location.pathname = "/about"
    }
},[])

    return (
        <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/about" exact component={About} />
            <Route path="/projects" component={Projects} />
        </Switch>
    );
};

export default Routes;
