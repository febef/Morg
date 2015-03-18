$(function() {

   core.netmanager = {
      showInfo : function(message) {
         core.hide('div.progress');
         core.hide('#formupload');
      },
       uploadfile : function(evt) {

         evt.preventDefault();
         core.hide('div.progress');
         core.hide('#formupload');

         var formData = new FormData();
         var file = document.getElementById('file').files[0];

         formData.append('myFile', file);

         var xhr = new XMLHttpRequest();

         xhr.open('post', '/s', true);
         xhr.upload.onprogress = function(e) {

            if (e.lengthComputable) {
               var percentage = (e.loaded / e.total) * 100;
               $('div.progress div.bar').css('width', percentage + '%');
            }
         };

         xhr.onerror = function(e) {
            core.downloadmanager.showInfo('An error occurred while submitting the form. Maybe your file is too big');
         };

         xhr.onload = function() {
            core.downloadmanager.showInfo(this.statusText);
         };

         xhr.send(formData);
      }
   };
});
