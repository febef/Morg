
var morg = module.parent.exports;

var git = require('../git');
var gpath = morg.conf.git.path;

is_gitfile = git.isgit(gpath);
//is_gitbare = git.isgit(gpath + '.git');

function clone(obj) {
   return JSON.parse(JSON.stringify(obj));
}

if(!is_gitfile)
   git.init(gpath);

morg.git = clone(git).SetPath(gpath);

