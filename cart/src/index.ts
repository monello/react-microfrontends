import('./bootstrap').then(_ => {
    console.log('[Cart App] Loaded (index.js)');
}).catch(reason => {
    console.error(`[Cart App]: ${reason}`);
});
