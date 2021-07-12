const url = 'http://localhost:5000';

const login = async (body) => {
    try {
        const res = await fetch(url + '/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        return await res.json();

    } catch (error) {
        return { msg: error };
    }
};

const register = async (body) => {
    try {
        const res = await fetch(url + '/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        return await res.json();

    } catch (error) {
        return { msg: error };
    }
};

const logout = async () => {
    const res = await fetch(url + '/auth/logout');
    return res;
};

module.exports = {
    login,
    register,
    logout
};