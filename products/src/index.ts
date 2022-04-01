import('./bootstrap').then(_ => {
    console.log("[Products App] Loaded (index.js)");
}).catch((reason) => {
    console.error(`[Products App]: ${reason}`);
});
