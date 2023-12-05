import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./store";

import {composeWithDevTools} from "@redux-devtools/extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App/>
    </Provider>



);


