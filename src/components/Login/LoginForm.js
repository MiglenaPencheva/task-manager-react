import { login } from '../../services/authService';

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
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h3>Влез в профила си</h3>
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
            <input type="submit" name="register" ></input>
        </form>
    );
};

export default loginForm;