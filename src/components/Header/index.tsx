import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <div>
                <NavLink exact to="/" activeClassName="menuActive">
                    HOME
                </NavLink>

                <NavLink exact to="/about" activeClassName="menuActive">
                    SOBRE
                </NavLink>

                <NavLink to="/projects" activeClassName="menuActive">
                    PROJETOS
                </NavLink>
            </div>
        </HeaderContainer>
    );
};

export default Header;
