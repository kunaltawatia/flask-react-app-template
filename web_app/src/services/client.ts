import axios from 'axios';

export const client = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5000/' : '/',
});
