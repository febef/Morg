
var morg = module.parent.exports;
module.exports = morg;
var MongoDB = require('../MongoDB');
morg.db = MongoDB.init(morg.conf.DB);
