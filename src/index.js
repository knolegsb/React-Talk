import React from 'react';
import ReactDOM from 'react-dom';
import {createStroe} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import counterApp from './reducers';

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    appElement
);