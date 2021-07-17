const AuthPage = () => {
    return (
        <div>
            <h2>Не си вписан в приложението</h2>

            <a className="auth-link" href="/auth/login">Влез в профила си</a>

            <h3>или</h3>

            <a className="auth-link" href="/auth/register">Регистрирай профил</a>
        </div>
    );
};

export default AuthPage;