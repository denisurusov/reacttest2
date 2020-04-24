import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {WPApp} from "./components/WPApp";

import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(
    <React.StrictMode>
        <WPApp compiler="TypeScript" framework="React"/>
    </React.StrictMode>,
    document.getElementById('helloDiv')
);