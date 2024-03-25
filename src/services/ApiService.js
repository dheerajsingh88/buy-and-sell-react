// apiService.js
import TokenService from "./TokenService";

const API_BASE_URL = 'http://localhost:8080';
const listing_EP = '/api/listings';
const login = '/api/login';
const singUp = '/api/signup';
const myAds = '/api/myAds';

const ApiService = {
    getMyAds: async () => {
        const response = await fetch(`${API_BASE_URL}${myAds}`, {
            headers: {
                'Authorization': 'Bearer '+TokenService.getToken()
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    },
    getListings: async () => {
        const response = await fetch(`${API_BASE_URL}${listing_EP}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    },
    getListingsById: async (id) => {
        const response = await fetch(`${API_BASE_URL}${listing_EP}/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    },
    postListings: async (data) => {
        const response = await fetch(`${API_BASE_URL}${listing_EP}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+TokenService.getToken()
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    },
    deleteListings: async (id) => {
        const response = await fetch(`${API_BASE_URL}${listing_EP}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+TokenService.getToken()
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    },
    login: async (data) => {
        const response = await fetch(`${API_BASE_URL}${login}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseBody = await response.json(); // Parse response JSON

        if (responseBody.token) {
            TokenService.setToken(responseBody.token); // Save token to localStorage
        } else {
            console.error('Token not found in the response');
        }
    },
    signUp: async (data) => {
        const response = await fetch(`${API_BASE_URL}${singUp}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    },
    // Add other HTTP methods as needed (e.g., put, delete, etc.)
};

export default ApiService;