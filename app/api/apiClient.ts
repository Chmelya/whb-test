import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	headers: {
		'Content-type': 'application/json',
	},
	timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
	console.log('Request:', config.method?.toUpperCase(), config.url);
	return config;
});

apiClient.interceptors.response.use(
	(response) => {
		console.log('Response:', response.status, response.config.url);
		return response;
	},
	(error) => {
		console.error('API Error:', error.message);
		return Promise.reject(error);
	}
);

export default apiClient;
