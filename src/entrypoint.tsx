import 'modern-normalize/modern-normalize.css';
import {createRoot} from 'react-dom/client';
import Router from './pages/_router';
import './style/fix.css';

const container = document.getElementById('root');

if (!container) {
	throw new Error('Failed to load the dom element to render!');
}

const root = createRoot(container);

root.render(<Router />);
