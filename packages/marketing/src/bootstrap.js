import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate }) => {
    const history = createMemoryHistory();

    history.listen(onNavigate);

    ReactDOM.render(
        <App history={history} />,     // JSX to render
        el          // Target element to render the JSX in
    );
};

if (process.env.NODE_ENV === 'development') {
    const isStandAlone = !!document.querySelector('body[data-app-name="markering"]');
    if (isStandAlone) {
        mount(document.getElementById("app"));
    }
}

export { mount };
