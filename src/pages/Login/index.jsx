import { Paragrafo, Title } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../features/login/loginSlice';
import { getStudentsFetch } from '../../features/students/studentsSlice';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Login() {
    const isLogged = useSelector((state) => state.isLogged.value);
    const students = useSelector((state) => state.students.value);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch((isLogged && logout()) || login());
    };

    // Para buscar dados assim que o componente é montado
    useEffect(() => {
        dispatch(getStudentsFetch());
    }, [dispatch]);
    const handleFetchStudent = () => {
        if (!isLogged) {
            return toast.error(
                'Você precisa estar logado para acessar esses dados'
            );
        }
        dispatch(getStudentsFetch());
        return toast.success('Operação realizada com sucesso');
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
            <button onClick={handleFetchStudent}>Buscar dados</button>
            {isLogged && students.dataStudents && (
                <ul>
                    {students.dataStudents.map((student) => (
                        <li key={student.id}>{student.nome}</li>
                    ))}
                </ul>
            )}
        </section>
    );
}
