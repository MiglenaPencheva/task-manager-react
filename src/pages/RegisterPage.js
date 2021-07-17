import { register } from '../services/authService';


const RegisterForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password, repeatPassword } = e.target;

        if (username.value === '') {
            throw new Error('Въведи потребителско име');
        }
        if (password.value === '') {
            throw new Error('Въведи парола');
        }
        if (repeatPassword.value === '') {
            throw new Error('Въведи парола');
        }
        if (password.value !== repeatPassword.value) {
            throw new Error('Паролите не съвпадат');
        }

        const data = {
            username: username.value,
            password: password.value,
            repeatPassword: repeatPassword.value
        };

        try {
            await register(data);
            console.log('registerred');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <h2>Регистрирай профил</h2>

            <form onSubmit={handleSubmit} className="auth-form" action="/auth/register" method="POST">
                <input type="text" className="auth-input" placeholder="потребителско име" name="username"  />
                <input type="password" className="auth-input" placeholder="парола" name="password"  />
                <input type="password" className="auth-input" placeholder="повтори паролата" name="repeatPassword"  />
                {/* <a href="/auth/register">Регистрация</a> */}
                <input type="submit" className="auth-btn" value="Регистрация" />
            </form>

            <div className="redirect">Вече имаш профил? <a class="redirect-link" href="/auth/login"><b>Влез</b></a> в профила си.</div>
        </div>
    );
};

export default RegisterForm;