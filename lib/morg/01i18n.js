var morg = module.parent.exports;
var path = require("path");
var i18n = require("i18n");


morg.conf.i18n.directory = path.join(__dirname, morg.conf.i18n.directory);
i18n.configure(morg.conf.i18n);

morg.i18n = i18n;
