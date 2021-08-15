import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import App from "./App";
import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";

Sentry.init({
    dsn: "https://5f6b287acdbd4bb090294b4fdd727461@o563245.ingest.sentry.io/5703042",
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'))

// serviceWorker.register();
