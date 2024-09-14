import { client } from './client';

export async function getTime() {
	const response = await client.get('/time');
	return response.data;
}
