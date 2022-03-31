import('./bootstrap').then(_ => {
    console.log("Hello From Container (index.js)");
}).catch((reason) => {
    console.error(`Reason: ${reason}`);
});
