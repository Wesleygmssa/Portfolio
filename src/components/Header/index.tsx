import { useCallback,useState } from 'react';
import {Link} from 'react-router-dom';
import {HeaderContainer} from './styles';

const Header: React.FC = () =>{
const [MenuSelect, setMenuSelect] = useState('sobre');



const clickMenu = useCallback((nameMenu: string) => {
setMenuSelect(nameMenu);
}, []);


return(
     
    <HeaderContainer>
    <div>
        <Link to="/" 
             onClick={() => clickMenu('sobre')} 
             className={MenuSelect === 'sobre' ? 'menuActive' : 'menuInactive'}>
            Sobre
         </Link>
        
        <Link to="/projects" 
             onClick={() => clickMenu('projetos')} 
             className={MenuSelect === 'projetos' ? 'menuActive' : 'menuInactive'}>
            Projetos
         </Link>
    </div>
      </HeaderContainer>
)
}

export default Header;