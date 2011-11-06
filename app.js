
/**
 * Module dependencies.
 */

var https = require('https')
  , fs = require('fs')
  , express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer({cert:fs.readFileSync('ssl/server.crt'), key:fs.readFileSync('ssl/server.key')});

// Configuration

var config = {port:3000};

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

app.get('*', routes.notfound);

app.listen(config.port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
