var express = require('express');
var app = express();
var fs = require('fs');
var _ = require("underscore");
var fileData;


fs.readFile('./business.json', 'utf8', function (err, data) {
  if (err) throw err;
  fileData = JSON.parse(data);
  console.log(fileData);
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/getData', function (req, res) {
  if (fileData!=null) {
     res.json(fileData);
  }
})

app.get('/filter/:find/:stars', function (req, res) {
  console.log(req.params.stars,req.params.find);
  var filtered = _.filter(fileData, function (item) {
        if (item.stars >= req.params.stars) {
          return item
        }
    });
    var finalFiltered = _.filter(filtered, function (item) {
          if (item.name.includes(req.params.find)) {
            return item
          }
      });
    res.json(finalFiltered);

})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
