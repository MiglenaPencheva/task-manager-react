import { register } from '../../services/authService';

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
        <form onSubmit={handleSubmit}>
            <h3>Регистрирай се</h3>
            <div>
                <label htmlFor="username"></label>
                <input
                    id="username"
                    type="text"
                    placeholder="Потребителско име"
                    required
                />
            </div>
            <div>
                <label htmlFor="password"></label>
                <input
                    id="password"
                    type="password"
                    placeholder="Парола"
                    required
                />
            </div>
            <div>
                <label htmlFor="rePassword"></label>
                <input
                    id="rePassword"
                    type="password"
                    placeholder="Повтори паролата"
                    required
                />
            </div>
            <input type="submit" name="register" ></input>
        </form>
    );
};

export default RegisterForm;