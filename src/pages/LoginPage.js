import { login } from '../services/authService';

const loginForm = () => {
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

            <form className="auth-form" onSubmit={handleSubmit}>

                <input type="text" className="auth-input" placeholder="потребителско име" name="username" />
                <input type="password" className="auth-input" placeholder="парола" name="password" defaultValue="" />
                <input type="submit" className="auth-btn" value="Вход" />
                {/* {{!-- < a href="/auth/login"></> --}} */}
            </form >

            <div className="redirect">Нямаш профил? <a className="redirect-link" href="/auth/register"><b>Регистрирай</b></a> свой профил.</div>
        </div>
    );
};

export default loginForm;