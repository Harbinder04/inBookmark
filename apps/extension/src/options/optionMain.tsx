import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Option from './options.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Option />
	</StrictMode>
);
