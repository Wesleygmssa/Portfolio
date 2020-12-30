import React from 'react'
import GobarberWeb from '../../assets/GobarberWeb.png';
import Ecoleta from '../../assets/ecoleta.png';
import proffy from '../../assets/proffy.png';
import aluraflix from '../../assets/aluraflix.png';
import explorer from '../../assets/explorer.png';
import happy from '../../assets/happy.png';
import portfolio from '../../assets/portfolio.png';
import ImgLogica from '../../assets/logica.png';
import {Content, Cards, Card, CardContent} from './styles';
import ButtonLink from '../../components/LinkButton';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import PageDefault from '../../components/PageDefault';


const Projects: React.FC = () => {
  return (
    <PageDefault>
        <Content>
        <h4>Desenvolvendo aplicações em JavaScript, React, React-native, nodeJS e PHP </h4>
      <Cards>
             
                <Card>
                    <div className="card-img"> 
                         <img src={GobarberWeb} alt="GoBarber"/>
                    </div>
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

                <Card>
                      <div className="card-img"> 
                         <img src={Ecoleta} alt="ecoleta"/>
                    </div>
                    <CardContent>
                        <h3>Ecoleta</h3>
                        <p>NLW1 O objetivo deste Projeto é analisar e comparar a evolução do meu aprendizado.</p>
                        <ul>
                          <a href="/">
                            <FaReact size={40} style={{ color: "#7AE3F8" }} />
                         </a>
                          <a href="/">
                            <FaNodeJs size={40} style={{ color: "#7CB701" }} />
                          </a>
                
                        </ul>
                        <div className="button-group">
                          <ButtonLink href="https://github.com/Wesleygmssa/ecoleta-nlw1-booster/tree/master/web">Front-End</ButtonLink>
                          <ButtonLink href="https://github.com/Wesleygmssa/ecoleta-nlw1-booster/tree/master/server">Back-End</ButtonLink>
                        </div>
                   </CardContent>
              </Card>    

                <Card>
                      <div className="card-img"> 
                         <img src={proffy} alt="GoBarber"/>
                    </div>
                    <CardContent>
                        <h3>Proffy</h3>
                        <p>O Proffy é uma plataforma de estudos online que ajuda pessoas a encontrarem professores online.</p>
                        <ul>
                          <a href="/">
                            <FaReact size={40} style={{ color: "#7AE3F8" }} />
                         </a>
                          <a href="/">
                            <FaNodeJs size={40} style={{ color: "#7CB701" }} />
                          </a>
                
                        </ul>
                        <div className="button-group">
                          <ButtonLink href="https://github.com/Wesleygmssa/nlw2-proffy/tree/master/web">Front-End</ButtonLink>
                          <ButtonLink href="https://github.com/Wesleygmssa/nlw2-proffy/tree/master/backend">Back-End</ButtonLink>
                        </div>
                   </CardContent>
              </Card>   

                <Card>
                      <div className="card-img"> 
                         <img src={aluraflix} alt="AluraFlix"/>
                    </div>
                    <CardContent>
                        <h3>AluraFlix</h3>
                        <p>ImersãoReact onde aprendemos conceitos como componentes, Roteamento, state, formulário e etc..</p>
                        <ul>
                          <a href="/">
                            <FaReact size={40} style={{ color: "#7AE3F8" }} />
                         </a>
                        </ul>
                        <div className="button-group">
                          <ButtonLink href="https://github.com/Wesleygmssa/aluraflix">Front-End</ButtonLink>
                          <ButtonLink href="https://aluraflix-8z1b6frcz.vercel.app/">Visite</ButtonLink>
                        </div>
                   </CardContent>
              </Card>   

                <Card>
                      <div className="card-img"> 
                         <img src={explorer} alt="explorer"/>
                    </div>
                    <CardContent>
                        <h3>Explore repositórios</h3>
                        <p>Projeto onde fazemos consumo de api do gitHub, Utilzando a bliblioteca axios</p>
                        <ul>
                          <a href="/">
                            <FaReact size={40} style={{ color: "#7AE3F8" }} />
                         </a>
                        </ul>
                        <div className="button-group">
                          <ButtonLink href="https://github.com/Wesleygmssa/explore-repositrios-github">Front-End</ButtonLink>
                          {/* <ButtonLink href="https://github.com/Wesleygmssa/ecoleta-nlw1-booster/tree/master/server">Back-End</ButtonLink> */}
                        </div>
                   </CardContent>
              </Card>   

                <Card>
                      <div className="card-img"> 
                         <img src={happy} alt="GoBarber"/>
                    </div>
                    <CardContent>
                        <h3>Happy</h3>
                        <p>Projeto onde fazemos a implementação do mapa leaflet, marcando um ponto no mapa.</p>
                        <ul>
                          <a href="/">
                            <FaReact size={40} style={{ color: "#7AE3F8" }} />
                         </a>
                          <a href="/">
                            <FaNodeJs size={40} style={{ color: "#7CB701" }} />
                          </a>
                
                        </ul>
                        <div className="button-group">
                          <ButtonLink href="https://github.com/Wesleygmssa/nlw3-happy-web-react">Front-End</ButtonLink>
                          {/* <ButtonLink href="https://github.com/Wesleygmssa/aluraflix">Back-End</ButtonLink> */}
                          {/* <ButtonLink href="https://github.com/Wesleygmssa/ecoleta-nlw1-booster/tree/master/server">Back-End</ButtonLink> */}
                        </div>
                   </CardContent>
              </Card>
              
                <Card>
                      <div className="card-img"> 
                         <img src={portfolio} alt="Portfolio"/>
                    </div>
                    <CardContent>
                        <h3>Meu site pessoal</h3>
                        <p>react, styled-components, netfly, GitHup.</p>
                        <ul>
                          <a href="/">
                            <FaReact size={40} style={{ color: "#7AE3F8" }} />
                         </a>
                          <a href="/">
                            <FaNodeJs size={40} style={{ color: "#7CB701" }} />
                          </a>
                
                        </ul>
                        <div className="button-group">
                          <ButtonLink href="https://github.com/Wesleygmssa/Portfolio">Front-End</ButtonLink>
                          {/* <ButtonLink href="https://hardcore-northcutt-0328a0.netlify.app/">Visite</ButtonLink> */}
                          {/* <ButtonLink href="https://github.com/Wesleygmssa/ecoleta-nlw1-booster/tree/master/server">Back-End</ButtonLink> */}
                        </div>
                   </CardContent>
              </Card>   

                 
              <Card>
                      <div className="card-img"> 
                         <img src={ImgLogica} alt="Logica de programação"/>
                    </div>
                    <CardContent>
                        <h3>Treinamento de lógica</h3>
                        <p>Fazendo aprimoramento da lógica.</p>
                        <ul>
                          <a href="/">
                            <FaReact size={40} style={{ color: "#7AE3F8" }} />
                         </a>
                          <a href="/">
                            <FaNodeJs size={40} style={{ color: "#7CB701" }} />
                          </a>
                
                        </ul>
                        <div className="button-group">
                          <ButtonLink href="https://github.com/Wesleygmssa/treinamento-logica">Front-End</ButtonLink>
                          <ButtonLink href="https://wesleygmssa.github.io/treinamento-logica/">Visite</ButtonLink>
                          {/* <ButtonLink href="https://github.com/Wesleygmssa/ecoleta-nlw1-booster/tree/master/server">Back-End</ButtonLink> */}
                        </div>
                   </CardContent>
              </Card>   
     
      </Cards>
    </Content>
    </PageDefault>
  )
}
export default Projects;
