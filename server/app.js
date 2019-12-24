// =============================================================================
// MAIN NODEJS APP ENTRY FILE *DO NOT MODIFY*
// =============================================================================
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var appRoutes = require('./routes');
app.use('/', appRoutes);


app.listen(port, function() {
  console.log('Listening on port ' + port);
});

// =============================================================================
// MAIN NODEJS APP ENTRY FILE *DO NOT MODIFY*
// =============================================================================
