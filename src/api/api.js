import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
        'Authorization' : `Bearer ${process.env.REACT_APP_BRUNO_API_KEY}`,
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

const fetchDataFromApi = async () => {
    try {
        const response = await apiClient.get(process.env.REACT_APP_API_GET_LINKS_ENDPOINT);
        return response.data;
    } catch(error) {
        if (error.code === 'ECONNABORTED') {
            console.error('Request timeout: The server took too long to respond.', error);
          } else {
            console.error('Error fetching links:', error);
        }
        throw new Error('Chyba při načítání dat z rozhraní API!');
    }
};

export { fetchDataFromApi };