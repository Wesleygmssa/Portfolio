import { NavLink} from 'react-router-dom';
import {HeaderContainer} from './styles';
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
    <div>
        <FiBell size={25}/>
    </div>
      </HeaderContainer>
)
}

export default Header;