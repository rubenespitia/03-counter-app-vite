import React from 'react';
import ReactDom from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp.jsx'
import {FirstApp} from './FirstApp.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp/>
        <FirstApp/>
    </React.StrictMode>
);

