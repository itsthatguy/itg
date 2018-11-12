/* eslint-disable no-console */
var path = require('path');
var express = require('express');
var exec = require('child_process').execSync;

var app = express();

var staticPath = path.resolve(__dirname, 'build');

// static assets
app.use(express.static(staticPath));

// productionCallback() is used, if we are running within an NGINX environment
/* eslint-disable no-unused-vars */
function productionCallback () {
  console.log('EXPRESS: Now listening');
  exec('touch /tmp/app-initialized');
  console.log('NGINX: App Initialized');
}
/* eslint-enable no-unused-vars */

function developmentCallback () {
  console.log(`EXPRESS: Now listening on ${this.address().port}`);
}

var appListenPort = process.env.PORT || 3002;
var appListenCallback = developmentCallback;

app.get('*', function (req, res) {
  res.sendFile(staticPath + '/index.html');
});

app.listen(appListenPort, appListenCallback);
