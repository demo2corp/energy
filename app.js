var app = require('express')();

port = process.env.PORT || 3000

app.get('/customer', function (req, res) {
  // res.setHeader("X-My-Header", "42");
  res.status(200).json({"name": "Z"});
});

var server = app.listen(port)
console.log('Listening on http://localhost:' + port);
