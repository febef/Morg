
var sh = require('execSync');

var git_cmd = function(path) {
   return ("git --git-dir=\"" + path +
           "/.git\" --work-tree=\"" + path +
           "\"  ");
};

var is_on_git =  function(path) {
   return sh.run(git_cmd(path) +
          "rev-parse 2>/dev/null");
};

var git_status = function(path) {
   var ret = sh.exec(git_cmd(path)+ "status");
   return ret.stdout;
};

var git = {
   SetPath : function(path) {
      git.path = path;
   },
   Init : function(pathRepo) {
      return sh.exec(git_cmd(git.path) + "init");
   },
   Status : function() {
      return git_status(git.path);
   },
   JsonStatus : function() {
      var ret, str = git_status(git.path);
      ret = {
         ahead  : (str.indexof("ahead") > -1),
         behind : (str.indexOf("behind") > -1),
         dirty  : (str.indexOf("Untracked") > -1 ||
                   str.indexOf("not staged") > -1)
      };
      return ret;
   },
   Commit : function(description) {
      return sh.exec(git_cmd(git.path)+ "commit -a \"" +
                     description + "\"" );
   },
   Pull : function(user, password) {
      return sh.exec(__dirname + "/pull" +
              " " + user + " " + password);
   },
   Push : function (user, password) {
      return sh.exec(__dirname + "/push" +
              " " + user + " " + password);
   },
   onGit : function(path) {
      return is_on_git(path);
   },
   sh : sh,
   path : ""
};

module.exports = git;
