import { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [ isLogged, setIsLogged ] = useState(false);
    const [ userId, setUserId ] = useState(null);
    const [ username, setUsername ] = useState(null);

    const login = (user, id) => {
        setIsLogged(true);
        setUserId(id);
        setUsername(user);
    } ;

    const logout = () => {
        setIsLogged(false);
        setUserId(null);
        setUsername(null);
    };

    return (
        <AuthContext.Provider value={{ isLogged, userId, username, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;