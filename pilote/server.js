const gateway = require('fast-gateway');
const CONFIG = require('./config');
const PORT = process.env.PORT || 8080;

gateway({
  middlewares: [
    require('cors')(),
    require('helmet')()
  ],

  routes: [{
    prefix: '/user',
    target: CONFIG.IP_UTILISATEUR
  }, {
    prefix: '/film',
    target: CONFIG.IP_OBJECTS,
  }, {
    prefix: '/location',
    target: CONFIG.IP_LOCATION,
  }, {
    prefix: '/film/details',
    target: CONFIG.IP_DETAILFILM,
  }]
}).start(PORT).then(server => {
  console.log(`API Gateway listening on ${PORT} port!`)
});
