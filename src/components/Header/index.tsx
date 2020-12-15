import { NavLink} from 'react-router-dom';
import {HeaderContainer} from './styles';
// import {FiBell} from 'react-icons/fi';
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

             <NavLink to="/contact" activeClassName='menuActive' >
                     Cursos
             </NavLink>
    </div>
    {/* <Bell>
        <FiBell />
    </Bell> */}
      </HeaderContainer>
)
}

export default Header;