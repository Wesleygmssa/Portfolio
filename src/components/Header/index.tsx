import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
// import {FiBell} from 'react-icons/fi';
const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <div>
                <NavLink exact to="/" activeClassName="menuActive">
                    About
                </NavLink>

                <NavLink to="/projects" activeClassName="menuActive">
                    Projects
                </NavLink>

                {/* <NavLink to="/cardsvideos" activeClassName='menuActive' >
                    Videos
             </NavLink> */}
            </div>
            {/* <Bell>
        <FiBell />
    </Bell> */}
        </HeaderContainer>
    );
};

export default Header;
