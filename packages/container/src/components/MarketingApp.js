import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
    // create a React reference to and HTML element (init to null, but connected to the dif in the return)
    const ref = useRef(null);

    // Get the history object managed inside react-router-dom, via the useHistory hook
    // This object contains a bunch of functionality that you can manipulate the browser history with.
    // Here is a console log of this object:
    /*
    {
        action: "POP",
        block: f block(propmt)
        createRef: f createRef(location)
        go: f (n)
        goBack: f goBack()
        goForward: f goForward()
        length: 10,
        listen: f listen(listener)
        location: {pathname: '/', search: '', hash: '', state: undefined}
        push: f pusf(path, state)
        replace: f replace(path, state)
    }
    */
    const history = useHistory();

    // use effect used, without a 2nd, argument ensures that the code inside runs once only
    useEffect(() => {
        // we pass the reference to the div to the mount function
        // - inside the Marketing app, mount injects the JSX into a tagtet element that is passed in as an argument
        // - seeing as we are passing the dif below (via ref) to it, that div becomes the element mount will render the Marketing app in to
        // Seeing as we are now inside a React functional component that the turns this div as JSX, we in effect will be returning the Marketing app from this component
        // We now get back an object from the mount() function (Marketing app) that contains an `onNavigate()` function property, we destructor that out
        const { onParentNavigate } = mount(ref.current, {
            // Here we use object destrcturing & argument aliassing to get the returned `pathname` and rename it to `nextPathname`
            onNavigate: ({ pathname: nextPathname }) => {
                // Use object-destructuring to get the current path from the history object
                const { pathname } = history.location;

                // Now we check if the path we are trying to navigate to (as directed by the Child application via the callback function) is
                //  different from the current pathname, and then only do we apply the navigation
                if (pathname !== nextPathname) {
                    // Here we use the "push()" function (property on the history object), to add the new location to the browser history
                    history.push(nextPathname);
                }
            }
        });

        // Now we can use the history object in this Containet app to listen for changes in out Browser History, we call perform some action...
        // - in this case call the `onParentNavigate()` method we received form the Child app's `mount()` method
        history.listen(onParentNavigate);
    }, []);

    return (
        <div ref={ref} />
    );
};

export default MarketingApp;
