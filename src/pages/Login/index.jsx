import { Paragrafo, Title } from './styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Login() {
    const isLogged = useSelector((state) => state.isLogged);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({
            type: 'LOGIN',
        });
    };
    return (
        <section>
            <Title>
                Login
                <small>Oie</small>
            </Title>
            <Paragrafo>Olá mundo hehehe</Paragrafo>
            <button
                onClick={(event) =>
                    handleClick(event, {
                        user: 'Teste',
                        email: 'teste@gmail.com',
                    })
                }
            >
                {isLogged ? 'Sair' : 'Entrar'}
            </button>
        </section>
    );
}
