import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();

    // Make sure that the onNavigate callback exists (we don't send it in when we run this app in isolation)
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} />,     // JSX to render
        el          // Target element to render the JSX in
    );

    // We need a way for the Container app to communicate back down to the Child application in a Generic, framework-agnostic way
    // - We return an object that can become a "handle" for the marketing app inside the Container app in a simple JS object format
    // - So no React specific tricks here, nice and generic JS object
    // - This object can therefore containe ANYTHING we want it to, and for now that is a function type property to inform the child app
    //      when relevant navigation occured inthe container app, so that can be synced down to the "Memory History" used here
    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};

if (process.env.NODE_ENV === 'development') {
    const isStandAlone = !!document.querySelector('body[data-app-name="auth"]');
    if (isStandAlone) {
        // Adding a fix for the expected 2nd argument we added for the onNavigate callback sent by the Container app, but nor needed in Stand-alone mode
        mount(
            document.getElementById("app"),
            { defaultHistory: createBrowserHistory() }
        );
    }
}

export { mount };
