const TokenService = {
    setToken: (token) => {
    localStorage.setItem('token', token); // Save token to localStorage
},
    getToken: (token) => {
        return localStorage.getItem('token'); // Save token to localStorage
    },
    removeToken: () => {
        return localStorage.removeItem('token'); // Save token to localStorage
    },
};
export default TokenService