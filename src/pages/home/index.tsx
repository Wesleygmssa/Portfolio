import React,{useState} from 'react';
import Button from '../../components/Button';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container , Content} from './styles';



const ConteudoUm = () => {
	return <div></div>
  
}

const ConteudoDois = () => {
	return <div>
    <ul>
              <li>✔ Back-end com Node.js</li>
              <li>✔ Back-end com PHP</li>
              <li>✔ Front-end com ReactJS</li>
              <li>✔ Mobile com React Native</li>
              <li>✔ TypeScript</li>
              <li>✔ Banco de dados (Mysql, MongoDB)</li>
              <li>✔ Ferramentas para utilização do banco de dados (Docker e TypeORM)</li>
              <li>✔ Arquitetura e testes no Node.js</li>
          </ul>
  </div>
}


const Home: React.FC = () => {
  const [togleConteudos, setTogleConteudos] = useState(false);

  const handleTogle = () => {
		// setTogleConteudos(prev => !prev);
      	setTogleConteudos(!togleConteudos);
	}

  return (
    <>
    <Container>
      <Header/>
      <Content>
            <img src="https://avatars1.githubusercontent.com/u/41512408?s=460&u=48175e5af2e5f24e725eb9354200350a242d0354&v=4" alt="Wesley Guerra"/>
             <h1>Olá, Sou Wesley</h1>
             <p>
             Hoje estou em busca de uma oportunidade como Dev Jr, mas sempre desenvolvia minhas próprias
             ideias através de cursos, então já faz um tempo que estudo sobre a programação e na verdade não
             mudei muito, continuo em busca de aprender mais para me possibilitar ter ideias ainda mais
             divertidas e desafiadoras.

             Comecei minha carreira com o intuito de seguir a trilha back-end, mas a verdade é que eu também
            gosto de fazer interfaces com React, então decidi que me tornaria um desenvolvedor fullstack, em
            meio a isso fiz o GoStack Bootcamp da Rocketseat e expandi um pouco mais a minha stack de
            conhecimento e interesses com ReactNative.
            </p>
           
           <Button type="button" onClick={handleTogle}>Resumo Profissional</Button>
           
           {togleConteudos ? <ConteudoDois /> : <ConteudoUm />}
           
      </Content>
    </Container>
    <Footer/>
    <Contact/>
    </>
  )
}

export default Home
