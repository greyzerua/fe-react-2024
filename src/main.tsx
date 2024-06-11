import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <BrowserRouter basename="/fe-react-2024">
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
