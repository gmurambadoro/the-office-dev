import axios from "axios";

const instance = axios.create({
    baseURL: 'https://officeapi.dev/api/',
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});

export const getRandomQuote = async () => {
    return instance.get('/quotes/random').then(response => response.data);
};
