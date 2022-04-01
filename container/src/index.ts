import('./bootstrap').then(_ => {
    console.log("[Container App] Loaded (index.js)");
}).catch((reason) => {
    console.error(`[Container App]: ${reason}`);
});
