import { NavLink} from 'react-router-dom';
import {HeaderContainer} from './styles';

const Header: React.FC = () =>{

return(
     
    <HeaderContainer>
    <div>
             <NavLink exact to="/" activeClassName='menuActive' >
                  Sobre
             </NavLink>
        
            <NavLink to="/projects" activeClassName='menuActive' >
            Projetos
         </NavLink>
    </div>
      </HeaderContainer>
)
}

export default Header;