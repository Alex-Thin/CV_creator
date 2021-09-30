import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';

import './index.scss';
import 'bulma/css/bulma.min.css'


ReactDOM.render(

                <Router>
                    <App/>
                </Router>
    , document.getElementById('root'));

