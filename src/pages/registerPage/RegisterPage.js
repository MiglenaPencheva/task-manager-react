import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import authService from '../../services/authService';
import style from '../loginPage/LoginPage.module.css';

const RegisterPage = () => {
    const { login } = useContext(AuthContext);
    const history = useHistory();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const [body, setBody] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await authService.register(body);
            if (res.message) { return; }
            login(res.username, res.id);
            history.push('/data/to-do');
        };
        if (body) {
            fetchData();
        } 
    }, [body, login, history, username]);


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (username === '') {
            throw new Error('Въведи потребителско име');
        }
        if (password === '') {
            throw new Error('Въведи парола');
        }
        if (repeatPassword === '') {
            throw new Error('Въведи парола');
        }
        if (password !== repeatPassword) {
            throw new Error('Паролите не съвпадат');
        }
        
        setBody({ username, password });
    };

    return (
        <div>
            <h2>Регистрирай профил</h2>

            <form className={style['auth-form']} onSubmit={handleSubmit}>
                <input 
                    className={style['auth-input']}
                    type="text" 
                    required
                    placeholder="потребителско име" 
                    name="username"
                    onChange={(e) => setUsername(e.target.value)} />
                <input 
                    className={style['auth-input']}
                    type="password" 
                    required
                    placeholder="парола" 
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)} />
                <input 
                    className={style['auth-input']}
                    type="password" 
                    required
                    placeholder="повтори паролата" 
                    name="repeatPassword" 
                    onChange={(e) => setPassword(e.target.value)} />
                <input 
                    type="submit" 
                    className={style['auth-btn']} 
                    value="Регистрация" 
                    onChange={(e) => setRepeatPassword(e.target.value)} />
            </form>

            <div className={style['redirect']}>
                Вече имаш профил? 
                <NavLink 
                    className={style['redirect-link']} 
                    to="/auth/login">
                    <b> Влез </b>
                </NavLink> 
                в профила си.
            </div>
        </div>
    );
};

export default RegisterPage;