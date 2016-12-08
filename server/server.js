/*
 * POC for Polymer
 * Server JS
 * Basic server entry for all web and service requests
 *
 * @license Apollo Global, Inc. V 1.0
 *
 * Apollo Global, Inc.
 * License MIT
 */


express = require('express');
var app = express();

var port = process.env.PORT || 8888;

app.use(express.static(__dirname + '/../public'));

app.listen(port);
console.log('Magic happens on port ' + port + ' ' + __dirname + '/../public');
module.exports = app;
