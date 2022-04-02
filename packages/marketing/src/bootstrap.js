import React from 'react';
import ReactDOM from 'react-dom';

const mount = el => {
    ReactDOM.render(
        <h1>Hi from React</h1>,     // JSX to render
        el                          // Target element to render the JSX in
    );
};

if (process.env.NODE_ENV === 'development') {
    const isStandAlone = !!document.querySelector('body[data-app-name="markering"]');
    if (isStandAlone) {
        mount(document.getElementById("app"));
    }
}

export { mount };
