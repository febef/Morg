
var morg = module.parent.exports;

morg.server.use(function(req, res, next) {
   if (!req.session.panel) req.session.panel = "inicio";
   next();
});

morg.server.get('/', function(req, res, next) {
   res.render('initial', { panel : req.session.panel});
});

morg.server.get('/p/:panel', function(req, res, next) {
   if (req.params.panel) req.session.panel = req.params.panel;
});

morg.server.get('/p', function(req, res, next) {
   res.render('panels/'+req.session.panel, {panel : req.session.panel});
});
morg.server.get('/m/:id', function(req, res, next) {
   res.render('modules/'+req.params.id);
});

morg.server.get('/s/:id', function(req, res, next) {
   // get song
});

morg.server.get('/l/:id', function(req, res, next) {
   //get list
});
