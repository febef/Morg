
var exec = require('sync-exec');

var git_cmd = function(path) {
   return ("git --git-dir=\"" + path +
           "/.git\" --work-tree=\"" + path +
           "\"  ");
};

var is_on_git =  function(path) {
   var ret = exec(git_cmd(path) +
          "rev-parse 2>/dev/null");
   return ret.status;
};

var git_status = function(path) {
   var ret = exec(git_cmd(path)+ "status");
   return ret.stdout;
};

var git = {
   SetPath : function(path) {
      git.path = path;
   },
   Init : function(pathRepo) {
      var ret = exec(git_cmd(git.path) + "init");
      return ret;
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
      var ret = exec(git_cmd(git.path)+ "commit -a \"" +
                     description + "\"" );
      return ret;
   },
   Pull : function(user, password) {
      var ret = exec(__dirname + "/pull" +
              " " + user + " " + password);
      return ret;
   },
   Push : function (user, password) {
      var ret = exec(__dirname + "/push" +
              " " + user + " " + password);
      return ret;
   },
   onGit : function(path) {
      return is_on_git(path);
   },
   exec : exec,
   path : ""
};

module.exports = git;
