import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import "./assets/css/style.css"

import registerServiceWorker from './registerServiceWorker';
const getElementBy=  document.getElementById('root')

ReactDOM.render(<BrowserRouter><App/></BrowserRouter> ,getElementBy);
registerServiceWorker();
