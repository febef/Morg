// console colors by febef. 06-02-2015-1553.
var colors = {
   newline : function(){
      return "\n";
   },
   returnc : function (){
      return "\n";
   },
   background : function(color){
      return "\x1b[48;5;" + color +"m";
   },
   font : function(color){
      return "\x1b[38;5;" + color + "m";
   },
   ibold : function(){
      return "\x1b[1m";
   },
   recetformat : function(){
      return "\x1b(B\x1b[m";
   },
   bold : function(text){
      return ibold() + text + recetformat();
   },
   iunderline : function(){
      return "\x1b[4m";
   },
   eunderline : function(){
      return "\x1b[24m";
   },
   underline : function(text){
      return iunderline() + text + eunderline();
   },
   print : function(text){
      return process.stdout.write(text);
   },
   theme : {
      addkey : function (key, color)
      {
         var i, abaiblekey = true;
         var ci = _inspeccionar(colors);
         for (i=0; i< ci.length; i++)
            abaiblekey = abaiblekey && ci[i].name != key;

         if (abaiblekey)
         {
            colors[key]= color;
            return true;
         }
         return false;
      },
      removekey : function(key)
      {
         var i, inf = true,
             nrk = ["theme", "print", "underline", "bold" ,
                    "iunderline", "eunderline", "newline",
                    "returnc", "font", "background",
                    "bold", "recetformat", "theme.addkey",
                    "theme.removekey", "theme.restoredefaultskeys" ];
         for (i=0; i< nrk.length; i++) inf = inf && key != nrk[i];
         if (inf) {
            colors[key] = null;
            return true;
         }
         return false;
      },
      restoredefaultskeys : function()
      {
         var i, ic = _inspeccionar(colors);

         for (i=0; i < ic.length; i++) colors.theme.removekey(ic[i].name);
         colors.black = 0;
         colors.red   = 1;
         colors.green = 2;
         colors.blue  = 4;
         colors.purple = 5;
         colors.white = 15;
         return true;
      }
   }
};

colors.theme.restoredefaultskeys();

function _inspeccionar(obj) {
   var msg = new Array();

   for (var property in obj)
   {
      if (typeof obj[property] == 'function')
      {
         var inicio = obj[property].toString().indexOf('function');
         var fin = obj[property].toString().indexOf(')')+1;
         var propertyValue=obj[property].toString().substring(inicio,fin);
         msg[msg.length] = {'type' : (typeof obj[property]), 'name' : property, 'value' : propertyValue};
      } else if (typeof obj[property] == 'unknown') {
         msg[msg.length] = {'type' : 'unknown', 'name' : property, value : 'unknown'};
      } else {
         msg[msg.length] ={'type' : (typeof obj[property]), 'name' : property, 'value' : obj[property]};
      }
   }
   return msg;
}


//colors.print(colors.background(colors.blue) + "hola\n");
//colors.theme.addkey("otherblue", 17);
//colors.print(colors.background(colors.otherblue) + "otro azul\n\n");

module.exports = colors;
