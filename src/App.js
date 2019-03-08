import React, {useState} from 'react';
import Viewer from '@bit/unfoldingword.resources.viewer';

const _context = {
	username: 'str',
};

function App() {
	const [context, setContext] = useState(_context);
	return (
		<Viewer
		  context={context}
			setContext={setContext}
			history={[]}
		/>
	);
};

export default App;
