import LoginForm from '../components/Login/LoginForm';
import RegisterForm from '../components/Register/RegisterForm';

const AuthPage = () => {
    return (
        <div>
            <h2>Не си вписан в приложението</h2>
            <RegisterForm />
            <h3>Или</h3>
            <LoginForm />
        </div>
    );
};

export default AuthPage;