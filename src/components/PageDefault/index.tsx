import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Contact from "../Contact";
import {AnimationContainer, Container} from './styles';


const PageDefault: React.FC = ({ children }) => {
    return (
        <>
      <Container>
        <Header />
         <AnimationContainer>{children}</AnimationContainer>
        <Contact />
      </Container>
      <Footer />
      </>
    );
  };

  export default PageDefault;