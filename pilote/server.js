const gateway = require('fast-gateway');
const CONFIG = require('./config');
const PORT = process.env.PORT || 8080;

gateway({
  middlewares: [
    require('cors')(),
    require('helmet')()
  ],

  routes: [{
    prefix: '/utilisateur',
    target: CONFIG.IP_UTILISATEUR
  }, {
    prefix: '/objects',
    target: CONFIG.IP_OBJECTS,
  }, {
    prefix: '/locations',
    target: CONFIG.IP_LOCATION,
  }]
}).start(PORT).then(server => {
  console.log(`API Gateway listening on ${PORT} port!`)
});
