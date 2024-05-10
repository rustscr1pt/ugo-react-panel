import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass'
import App from "./components/app";
import init from "./wasm/pkg/ugo_react_wasm";
import {Provider} from "react-redux";
import mainStorage from "./components/redux/mainStorage";

init()
    .then(() => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <Provider store={mainStorage}>
                <App/>
            </Provider>
        );
    })
