import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Contact from "../Contact";
import {AnimationContainer} from './styles';


const PageDefault: React.FC = ({ children }) => {
    return (
      <>
        <Header />
         <AnimationContainer>{children}</AnimationContainer>
        <Footer />
        <Contact />
      </>
    );
  };

  export default PageDefault;