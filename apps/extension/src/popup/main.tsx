import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@repo/config';
import Popup from './popup';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Popup />
	</StrictMode>
);
