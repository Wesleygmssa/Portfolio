import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/about";
import Projects from "../pages/projects";
import Works from "../pages/works";
import Events from "../pages/Events"; // Importa a página de eventos

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/works" element={<Works />} />
            <Route path="/events" element={<Events />} />{" "}
            {/* Adiciona a nova rota */}
            {/* Redirecionar para /about se o caminho for "/" */}
            <Route path="*" element={<Navigate to="/about" />} />
        </Routes>
    );
};

export default AppRoutes;
