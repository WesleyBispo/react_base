import { Paragrafo, Title } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/login/index ';

export default function Login() {
    const isLogged = useSelector((state) => state.isLogged.value);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(login());
    };
    return (
        <section>
            <Title>
                Login
                <small>Oie</small>
            </Title>
            <Paragrafo>Olá mundo hehehe</Paragrafo>
            <button onClick={handleClick}>
                {isLogged ? 'Sair' : 'Entrar'}
            </button>
        </section>
    );
}
