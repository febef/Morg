


var core = {
   init : function() {
      $.get('/p', function(data) {
         $('#panel').html(data);
      });
   }
};

$(function() {
   core.init();
});
