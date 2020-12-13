import React,{useState} from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';
import { Container , Content} from './styles';


const apperFromCenter = keyframes`
 from{
   opacity: 0;
   transform: translateX(0px);
 }
 to{
   opacity: 1;
   transform: translateX(0px);
 }
`;

export const AnimationContainer = styled.div`
  display: flex;  
  justify-content: center;
  flex-wrap: wrap;
  animation: ${apperFromCenter} 1s;
  background-color: #121212;
  border: 6px double #293647;
;
`;


const ConteudoUm = () => {
	return <div></div>
  
}

const ConteudoDois = () => {
	return <AnimationContainer>
          
    <ul>
             <h3>Front-end</h3> 

             <li> Criação de interfaces com React e React-native</li>
             <li> Criação de componentes </li>
             <li> Consumo de api de back-end </li>
             <li> Estilização utilizando styled-components </li>
             <li> Utilização react-router-dom para controlar as rotas autenticadas </li>
             <li> Utilização de contexto para validação de usuário salvando LocalStorage. </li>
             <li> Passando propriedades para components </li>
             <li> Formulários reutilizáveis </li>
             <li> Usabilidade do input</li>
             <li> Deploy na Vercel/netlify. </li>
             
    </ul>

     <ul>
             <h3>Back-end</h3>
             <li>Criação do server com framework express </li>
             <li> Organização de pasta projetos menores (Repositório, Services, Modelos, Routes, Middlewares, config e etc.…) </li>
             <li> Autenticação de usuário JTW </li>
             <li>Upload de imagens </li>
             <li> Banco de dados utilizando TypeORM </li>
             <li>Utilização do cors para retorna os dados em JSON para front-end </li>
             <li> Configuração do docker para criação de banco de dados </li>
             <li>Arquitetura SOLID e DDD </li>
             <li>Teste unitários com a biblioteca Jest </li>
             <li> Classes de erros centralizada </li>
     </ul>
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
    </PageDefault>
  )
}

export default Home
