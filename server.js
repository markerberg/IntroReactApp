var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

// middleware to change https to http for api
app.use(function(req, res, next){
  // check if headers has http req
  // process req normally if so, else redirect
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server up on port ' + PORT);
});
