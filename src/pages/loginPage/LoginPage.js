import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import authService from '../../services/authService';
import style from './LoginPage.module.css';

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const history = useHistory();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [body, setBody] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await authService.login(body);
            console.log(res);
            if (res.message) { return; }
            login(res.username, res.id);
            history.push('/data/to-do');
        };
        if (body) {
            fetchData();
        }
    }, [body]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!username) { return { message: 'Въведи потребителско име'}; }
        if (!password) { return 'Въведи парола'; }

        setBody({ username, password });
    };

    return (
        <div>
            <h2>Вход към профила</h2>

            <form className={style['auth-form']} onSubmit={handleSubmit}>
                <input 
                    className={style['auth-input']} 
                    type="text"
                    placeholder="потребителско име" 
                    name="username" 
                    onChange={(e) => setUsername(e.target.value)} />
                <input 
                    className={style['auth-input']} 
                    type="password" 
                    placeholder="парола" 
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)} />
                <input 
                    type="submit" 
                    className={style['auth-btn']} 
                    value="Вход" />
            </form >

            <div className={style['redirect']}>
                Нямаш профил? 
                <NavLink 
                    className={style['redirect-link']} 
                    to="/auth/register">
                    <b> Регистрирай </b>
                </NavLink> 
                свой профил.
            </div>
        </div>
    );
};

export default LoginPage;