import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import reducers from './Video/reducers';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// const store = createStoreHook(reducers)

root.render(
    <Provider store={legacy_createStore(reducers)}>
        <App tab="home" />
    </Provider>
);

