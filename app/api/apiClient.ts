import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	headers: {
		'Content-type': 'application/json',
	},
});

export default apiClient;
