
var morg = module.parent.exports;



morg.server.get('/', function(req, res, next) {
   res.render('/panel/home');
});
