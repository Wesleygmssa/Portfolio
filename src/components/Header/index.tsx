import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
    const location = useLocation();

    console.log(location);
    return (
        <HeaderContainer>
            <div>
                {location.pathname === "/" ? (
                    ""
                ) : (
                    <NavLink exact to="/" activeClassName="menuActive">
                        HOME
                    </NavLink>
                )}

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
