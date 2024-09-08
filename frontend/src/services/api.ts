import axios from 'axios';

const client = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'http://127.0.0.1:5000/api'
			: '/api',
});

export async function getIndex() {
	const response = await client.get('/');
	return response.data;
}
