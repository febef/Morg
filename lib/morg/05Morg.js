
var morg = module.parent.exports;

morg.init = function() {
   morg.log.NotifyGood("Hola mundo!");

   morg.server.listen(morg.conf.server.port, function(){
      morg.log.NotifyGood("El server esta andando y escucha por el puerto " + morg.conf.server.port);
   });

};
