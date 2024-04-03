import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Contact from "../Contact";
import { AnimationContainer, Container } from "./styles";

const PageDefault: React.FC = ({ children }) => {
    return (
        <>
            <Container>
                <AnimationContainer>
                    <Header />
                    {children}
                </AnimationContainer>
                <Contact />
                {/* <Footer /> */}
            </Container>
        </>
    );
};

export default PageDefault;
