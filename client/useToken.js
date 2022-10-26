import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const retrievedToken = localStorage.getItem('token');
        const userToken = JSON.parse(retrievedToken);
        return userToken?.token;
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    }

    const removeToken = () => {
        localStorage.removeItem('token')
        setToken(null);
    }

    return {
        setToken: saveToken,
        removeToken,
        token
    }
}