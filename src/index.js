import ready from 'domready';

import App from './scripts/App';
import './index.css'

ready(() => {
	window.app = new App();
	window.app.init();
});
