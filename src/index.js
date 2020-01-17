import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import { store } from "./reduxComp/store/configureStore";
import { Provider } from "react-redux"


ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
