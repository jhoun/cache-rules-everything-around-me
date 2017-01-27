const redis = require("redis");

module.exports = function isCache(req, res, next){
  console.log('req.url: ', req.url);
  client.set("cache", "<h1>THIS IS THE API ROUTE</h1><p>super slow &colon;&lt;</p>" , redis.print);
  client.get("cache", function(err, reply) {

  })
  next();
}

