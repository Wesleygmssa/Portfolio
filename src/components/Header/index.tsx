import React from 'react';
import {Link} from  'react-router-dom';
import {HeaderContainer} from './styles';

const Header: React.FC = () =>{

    return(
        <HeaderContainer>
        <div>
            <Link to="">Sobre</Link>
            <Link to="/projects">Projetos</Link>
        </div>
          </HeaderContainer>
    )
}

export default Header;