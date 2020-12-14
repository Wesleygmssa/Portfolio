import { NavLink} from 'react-router-dom';
import {HeaderContainer, Bell} from './styles';
import {FiBell} from 'react-icons/fi';
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
    <Bell>
        <FiBell />
    </Bell>
      </HeaderContainer>
)
}

export default Header;