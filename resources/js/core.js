
var core = {
   init : function() {
      $.get('/p', function(data) {
         $('#panel').html(data);
      });
      $.get('/m/user', function(data) {
         $('#user').html(data);
      });
      $.get('/m/player', function(data) {
         $('#player').html(data);
      });
      $.get('/m/downloadmanager', function(data) {
         $('#downloadmanager').html(data);
      });
   },
   chPanel : function(panel) {
      if (!core.ischPanel)
         core.ischPanel = true;
         $.get('/p/'+panel, function(data) {
            if (data=='ok') {
               $("#labelpanel").html("loading...");
               $.get('/p', function(data) {
                  $("#panel").html(data);
                  $("#labelpanel").html(panel);
               });
            core.ischPanel = false;
            }
         });
   },
   ischPanel : false
};

$(function() {
   core.init();
});
