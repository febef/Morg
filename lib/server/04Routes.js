
var morg = module.parent.exports;

var multer = require("multer");

morg.server.use(function(req, res, next) {
   if (!req.session.panel) {
      req.session.panel = "inicio";
      morg.log.NotifyGood("chPanel");
   }
   next();
});

morg.server.get('/', function(req, res, next) {
   res.render('initial', { panel : req.session.panel});
});

morg.server.get('/p/:panel', function(req, res, next) {
   if (req.params.panel && req.params.panel !== req.session.panel) {
      req.session.panel = req.params.panel;
      res.send('ok');
      morg.log.NotifyGood(req.session.panel);
      morg.log.NotifyGood("chPanel");
   } else
      res.send('!ch');

});

morg.server.get('/p', function(req, res, next) {
   res.render('panels/'+req.session.panel, {panel : req.session.panel});
});

morg.server.get('/m/:id', function(req, res, next) {

   var module = req.params.id;
   var data = {};

   switch ( module ) {
      case "list.songs":
      case "list.lists":
         data = {
            badmsj : ("No hay ninguna " + ((module=="list.songs")? "cancion" : "lista") + " disponible. <b>:/</b>"),
            list : (module=="list.lists") ? [] : [
               {cover: "", title: "A little song", author: "my", genere: "pureRock!", duration: 23},
               {cover: "", title: "A little song", author: "my", genere: "pureRock!", duration: 23}
            ]
         };
         module = "lista";
         break;
   }
   res.render('modules/'+module, data);
});

morg.server.post('/s', [multer({dest : './uploads'}), function(req, res) {
  morg.log.NotifyGood("recive file!");
  console.log(req.body);
  console.log(req.files);
  res.status(400).end();
}]);

morg.server.get('/s/:id', function(req, res, next) {
   // get song
});

morg.server.get('/l/:id', function(req, res, next) {
   //get list
});
