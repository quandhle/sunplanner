import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/App';

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);