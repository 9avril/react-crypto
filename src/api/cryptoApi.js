import axios from "axios";

const API_KEY = import.meta.env.VITE_CRYPTO_API_KEY
const API_URL = import.meta.env.VITE_CRYPTO_API_URL

export const getCoins = async () => {
    const response = await axios.get(`${API_URL}coins`, {
        headers: {
            'x-access-token': `${API_KEY}`,
        },
    });
    const result = await response.data;
    return result.data.coins;
};




