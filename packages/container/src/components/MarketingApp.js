import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
    // create a React reference to and HTML element (init to null, but connected to the dif in the return)
    const ref = useRef(null);

    // use effect used, without a 2nd, argument ensures that the code inside runs once only
    useEffect(() => {
        // we pass the reference to the div to the mount function
        // - inside the Marketing app, mount injects the JSX into a tagtet element that is passed in as an argument
        // - seeing as we are passing the dif below (via ref) to it, that div becomes the element mount will render the Marketing app in to
        // Seeing as we are now inside a React functional component that the turns this div as JSX, we in effect will be returning the Marketing app from this component
        mount(ref.current, {
            onNavigate: () => {
                console.log('The container noticed navigation in Marketing');
            }
        });
    });

    return (
        <div ref={ref} />
    );
};

export default MarketingApp;
