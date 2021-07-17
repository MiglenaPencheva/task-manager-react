import { register } from '../services/authService';


const RegisterForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password, rePassword } = e.target;

        if (username.value === '') {
            throw new Error('Въведи потребителско име');
        }
        if (password.value === '') {
            throw new Error('Въведи парола');
        }
        if (rePassword.value === '') {
            throw new Error('Въведи парола');
        }
        if (password.value !== rePassword.value) {
            throw new Error('Паролите не съвпадат');
        }

        const data = {
            username: username.value,
            password: password.value,
            repeatPassword: rePassword.value
        };

        try {
            await register(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <h2>Регистрирай профил</h2>

            <form onSubmit={handleSubmit} className="auth-form" action="/auth/register" method="POST">
                <input type="text" className="auth-input" placeholder="потребителско име" name="username" value="" />
                <input type="password" className="auth-input" placeholder="парола" name="password" value="" />
                <input type="password" className="auth-input" placeholder="повтори паролата" name="repeatPassword" value="" />
                {/* <a href="/auth/register">Регистрация</a> */}
                <input type="submit" className="auth-btn" value="Регистрация" />
            </form>

            <div className="redirect">Вече имаш профил? <a class="redirect-link" href="/auth/login"><b>Влез</b></a> в профила си.</div>
        </div>
    );
};

export default RegisterForm;