import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate }) => {
    const history = createMemoryHistory();

    // Make sure that the onNavigate callback exists (we don't send it in when we run this app in isolation)
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} />,     // JSX to render
        el          // Target element to render the JSX in
    );
};

if (process.env.NODE_ENV === 'development') {
    const isStandAlone = !!document.querySelector('body[data-app-name="markering"]');
    if (isStandAlone) {
        // Adding a fix for the expected 2nd argument we added for the onNavigate callback sent by the Container app, but nor needed in Stand-alone mode
        mount(document.getElementById("app"), {});
    }
}

export { mount };
