import React from 'react'
import Contact from '../../components/Contact';
import Header from '../../components/Header';
import GobarberWeb from '../../assets/GobarberWeb.png';
import {Content, Cards, Card, CardContent} from './styles';
import ButtonLink from '../../components/LinkButton';
import { FaNodeJs, FaReact } from 'react-icons/fa';

const Projects: React.FC = () => {
  return (
    <>
    <Content>
    <Header/>
        <h1>Em Construção</h1>
      <Cards>
               <Card>
                    <img src={GobarberWeb} alt="GoBarber"/>
                    <CardContent>
                        <h3>GoBarber</h3>
                        <p>Projeto criado do zero onde é feito o front-end e back-end, Utilizando as tecnologias</p>
                        <ul>
                          <a href="/">
                            <FaReact size={40} style={{ color: "#7AE3F8" }} />
                         </a>
                          <a href="/">
                            <FaNodeJs size={40} style={{ color: "#7CB701" }} />
                          </a>
                
                        </ul>
                        <div className="button-group">
                          <ButtonLink href="https://github.com/Wesleygmssa/estudos-react-conceitos-gobaber">Front-End</ButtonLink>
                          <ButtonLink href="https://github.com/Wesleygmssa/estudos-nodejs-conceitos-gobaber">Back-End</ButtonLink>
                        </div>
                   </CardContent>
              </Card>    
      </Cards>
    </Content>
        <Contact/>
    </>
  )
}
export default Projects;
