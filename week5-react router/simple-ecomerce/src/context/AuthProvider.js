import React from 'react';
import { useNavigate } from 'react-router-dom';
export const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = React.useState(null);

    const fakeAuth = () =>
        new Promise((resolve) => {
        setTimeout(() => resolve('Naufal_Yukafi_Ridlo'), 250);
    });

    const handleLogin = async () => {
        const token = await fakeAuth();
        setToken(token);
        navigate('/home');
    };

    const handleLogout = () => {
        setToken(null);
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider