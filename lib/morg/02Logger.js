
var morg = module.parent.exports;
var c = require("../foxcli");

morg.log = {};

morg.log.NotifyGood = function(str) {
   c.theme.addkey("grey", 235);
   c.print(c.font(c.grey) + "+[" + c.font(c.blue) +
      "Morg" + c.font(c.grey) + "] " + c.font(c.green) +
      morg.i18n.__(str) + c.recetformat() + c.newline());
};
