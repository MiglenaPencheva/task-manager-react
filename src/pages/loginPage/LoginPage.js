import { NavLink } from 'react-router-dom';
import { login } from '../../services/authService';
import style from './LoginPage.module.css';

const loginPage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = e.target;

        if (username.value === '') {
            throw new Error('Въведи потребителско име');
        }
        if (!password) {
            throw new Error('Въведи парола');
        }

        const data = {
            username: username.value,
            password: password.value
        };

        try {
            await login(data);
            console.log('logged in');
            
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <h2>Вход към профила</h2>

            <form className={style['auth-form']} onSubmit={handleSubmit}>

                <input type="text" className={style['auth-input']} placeholder="потребителско име" name="username" />
                <input type="password" className={style['auth-input']} placeholder="парола" name="password" defaultValue="" />
                <input type="submit" className={style['auth-btn']} value="Вход" />
                {/* {{!-- < a href="/auth/login"></> --}} */}
            </form >

            <div className={style['redirect']}>Нямаш профил? <NavLink className={style['redirect-link']} to="/auth/register"><b>Регистрирай</b></NavLink> свой профил.</div>
        </div>
    );
};

export default loginPage;