import React,{useState} from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';
import { Container , Content} from './styles';


const apperFromCenter = keyframes`
 from{
   opacity: 0;
   transform: translateX(50px);
 }
 to{
   opacity: 1;
   transform: translateX(0px);
 }
`;

export const AnimationContainer = styled.div`
  display: flex;  
  justify-content: center;
  flex-direction: column;
  padding: 10px 20px;
  animation: ${apperFromCenter} 1s;
  /* background-color: #000000; */
  /* border: 6px double #293647; */

  -webkit-box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
   box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);

;
`;


const ConteudoUm = () => {
	return    <h3>Experiência obtida através de cursos e projetos pessoais.</h3>
}

const ConteudoDois = () => {
	return <AnimationContainer>
        <div className="resume">
             <h3>Estudante bootcamp/Gostack (Rocketseat) - Desenvolvedor full-stack</h3> 
                 <span>Desenvolvendo aplicações em Java script, React, React-native e nodeJS</span>
              <p>
                No bootcamp/Gostack é uma forma de ganhar experiência através do curso onde construímos um projeto do zero ao 
                deploy com as tecnologias ReactJS, React-Native, NodeJS e etc... Aprendemos na pratica a construir projetos reais.
             </p>    
        </div>
         
     </AnimationContainer>
}


const Home: React.FC = () => {
  const [togleConteudos, setTogleConteudos] = useState(false);

  const handleTogle = () => {
		// setTogleConteudos(prev => !prev);
      	setTogleConteudos(!togleConteudos);
	}

  return (
    <PageDefault>
        <Container>
          <Content>
                 <img src="https://avatars1.githubusercontent.com/u/41512408?s=460&u=48175e5af2e5f24e725eb9354200350a242d0354&v=4" alt="Wesley Guerra"/>
                 <h1 className="typing-animation">Olá, Sou Wesley Guerra 😎</h1>
                 <p>
                 Hoje estou em busca de uma oportunidade com Desenvolvedor Full stack, 
                  sempre desenvolvi minhas próprias ideias através de conhecimentos obtidos em cursos, 
                 então já faz um tempo que estudo sobre a programação e na verdade não mudei muito, 
                 continuo em busca de aprender mais para me possibilitar ter ideias ainda mais divertidas e desafiadoras.
                 Comecei minha carreira com o intuito de seguir a trilha back-end, mas a verdade é que eu também gosto de fazer interfaces com React, 
                 então decidi que me tornaria um desenvolvedor fullstack, em meio a isso fiz alguns cursos Udemy e 
                 GoStack Bootcamp para expandi um pouco mais a minha stack de conhecimento e interesses com ReactNative.
                 </p>          
                  <Button type="button" onClick={handleTogle}>Resumo Profissional</Button>       
                    {togleConteudos ? <ConteudoDois /> : <ConteudoUm />}     
           </Content>
       </Container>
    </PageDefault>
  )
}

export default Home
