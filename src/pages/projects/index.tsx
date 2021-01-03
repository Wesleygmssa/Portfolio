import React from 'react'
import {Content, Cards, CardContent, Icons, ButtonGroup, Card} from './styles';
import PageDefault from '../../components/PageDefault';
import datas from '../../data/data.json';
import ButtonLink from '../../components/LinkButton';
import Icon from '../../components/Icon';
import { FaNodeJs, FaReact } from 'react-icons/fa';


const Projects: React.FC = () => {

  return (
    <PageDefault>
        <Content>
        <h4>Desenvolvendo aplicações em <br></br>JavaScript, React, React-native, nodeJS e PHP </h4>
      <Cards>
         {datas.map(data => (
                      <Card key={data.id } >
                          <CardContent>
                             <h3>{data.titulo}</h3>
                             <p>{data.text}</p>
                    <Icons>
                        <Icon 
                            icon={FaReact} style={{color: '#08cbf7'}}
                        />
                         <Icon 
                            icon={FaNodeJs} style={{color: '#09cc4a'}} 
                        />
                    </Icons>

                    <ButtonGroup >
                     {data.link_frontEnd ? <ButtonLink href={data.link_frontEnd}>Front-End</ButtonLink> : '' } 
                     {data.link_backEnd ? <ButtonLink href={data.link_backEnd}>Back-End</ButtonLink> : '' } 
                    </ButtonGroup>
                </CardContent>
                </Card> 
                
             ))}
      </Cards>
    </Content>
    </PageDefault>
  )
}
export default Projects;
