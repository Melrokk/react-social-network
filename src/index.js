import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let state = store.getState();

let rerenderEntireTree = (state) => {

    console.log('rerenderEntireTree --- STATE --->>>', state);

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);

store.subscribe(rerenderEntireTree);