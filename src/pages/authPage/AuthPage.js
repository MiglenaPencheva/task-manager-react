import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AuthPage.module.css';

const AuthPage = () => {
    return (
        <div>
            <h2>Не си вписан в приложението</h2>

            <NavLink to="/auth/login" className={style['auth-link']}>Влез в профила си</NavLink>

            <h3>или</h3>

            <NavLink to="/auth/register" className={style['auth-link']}>Регистрирай профил</NavLink>
        </div>
    );
};

export default AuthPage;