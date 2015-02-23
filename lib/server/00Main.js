
var s = module.parent.exports.server;

var path         = require( 'path'            );
var morgan       = require( 'morgan'          );
var bodyParser   = require( 'body-parser'     );
var cookieParser = require( 'cookie-parser'   );
var stylus       = require( 'stylus'          );
var express      = require( 'express'         );
var session      = require( 'express-session' );

s.set( 'views', path.join(__dirname, './+views') );
s.set( 'view engine', 'jade'                     );

s.use( morgan(morg.conf.morgan)                                         );
s.use( bodyParser.json()                                                );
s.use( cookieParser()                                                   );
s.use( stylus.middleware(path.join(__dirname, '../../resources'))       );
s.use( express.static(path.join(__dirname, '../../resources'))          );
s.use( session(morg.conf.server.session)                                );

