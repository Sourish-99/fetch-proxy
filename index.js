let { HttpProxyAgent } = require('http-proxy-agent');
let fetch = require('node-fetch');
let config = require("./config.json");

(async () => {

    let response = await fetch('https://api.ipify.org/?format=json', { method: 'GET', headers: { 'Content-Type': 'application/json' }, agent: new HttpProxyAgent('http://' + config.address) })
        .catch(() => { console.log('Not reachable') });

    if (response.status != 200) return console.log(response.status);

    let data = await response.json();

    console.log(data.remoteip);

})();