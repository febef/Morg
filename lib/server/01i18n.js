var morg = module.parent.exports;

morg.server.use(morg.i18n.init);
morg.server.use(function( req, res, next ){
   if(req.session.locale)
      req.setLocale(req.session.locale);
   next();
});
