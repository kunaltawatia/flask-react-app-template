import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { getTime } from './services/time';

function App() {
	const [response, setResponse] = useState('');

	const submit = async () => {
		const response = await getTime();
		setResponse(response);
	};

	return (
		<div className="flex flex-col items-center space-y-4 p-4">
			<p>Get Time!</p>
			<button onClick={submit} className="rounded-full p-2">
				<PaperAirplaneIcon className="size-4" />
			</button>
			<p>{response}</p>
		</div>
	);
}

export default App;
