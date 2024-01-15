import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Nav } from './styled';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Header() {
    const isLogged = useSelector((state) => state.isLogged.value);
    return (
        <Nav>
            <Link to="/">
                <FaHome size="26px" />
            </Link>
            <Link to="/login">
                <FaSignInAlt size="26px" />
            </Link>
            <Link to="">
                <FaUserAlt size="26px" />
            </Link>
            {isLogged ? <p>LOGADO</p> : <p>NÃO LOGADO</p>}
        </Nav>
    );
}
