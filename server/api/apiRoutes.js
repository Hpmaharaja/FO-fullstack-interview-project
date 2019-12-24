// =============================================================================
// API ROUTES FILE
// =============================================================================
var express = require('express'),
    apiRoutes = express(),
    bodyParser = require('body-parser');

apiRoutes.use(bodyParser.json());
apiRoutes.use(bodyParser.urlencoded({extended: true}));

var emailRoutes = require('./launchFlow');
apiRoutes.use('/email', emailRoutes);

module.exports = apiRoutes;
