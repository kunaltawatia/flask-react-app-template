import React, { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { getIndex } from './services/api';

function App() {
	const [response, setResponse] = useState('');

	const submit = async () => {
		const response = await getIndex();
		setResponse(response);
	};

	return (
		<div className="flex flex-col items-center">
			<button onClick={submit} className="fab m-4">
				<PaperAirplaneIcon className="size-4" />
			</button>
			<p>{response}</p>
		</div>
	);
}

export default App;
