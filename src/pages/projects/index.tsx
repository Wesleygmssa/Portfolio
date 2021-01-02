import React from 'react'
import {Content, Cards, Card, CardContent} from './styles';
import ButtonLink from '../../components/LinkButton';
import { FaNodeJs, FaReact} from 'react-icons/fa';
import PageDefault from '../../components/PageDefault';
import datas from '../../data/data.json';


const Projects: React.FC = () => {

  return (
    <PageDefault>
        <Content>
        <h4>Desenvolvendo aplicações em <br></br>JavaScript, React, React-native, nodeJS e PHP </h4>
      <Cards>
             {datas.map(data => (
                 
            <Card key={data.id}>
                <CardContent>
                    <h3>{data.titulo}</h3>
                    <p>{data.text}</p>
            
                <ul>
                     <a href="/">
                        <FaReact size={40} style={{ color: "#7AE3F8" }} />
                    </a>
                     <a href="/">
                        <FaNodeJs size={40} style={{ color: "#7CB701" }} />
                    </a>
        
                </ul>
                <div className="button-group">
                 {data.link_frontEnd ? <ButtonLink href={data.link_frontEnd}>Front-End</ButtonLink> : '' } 
                 {data.link_backEnd ? <ButtonLink href={data.link_backEnd}>Back-End</ButtonLink> : '' } 
                </div>
           </CardContent>
      </Card> 
             ))}
      </Cards>
    </Content>
    </PageDefault>
  )
}
export default Projects;
