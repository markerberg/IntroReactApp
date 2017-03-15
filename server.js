var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

// middleware to change https to http for api
app.use(function(req, res, next){
  // check if headers has https req
  // if so redirect to http, else go normally
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server up on port ' + PORT);
});
