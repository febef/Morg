
var core = {
   init : function() {
      $.get('/p', function(data) {
         $('#panel').html(data);
      });
      $.get('/m/user', function(data) {
         $('#user').html(data);
      });
   }
};

$(function() {
   core.init();
});
