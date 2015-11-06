var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/api/queue', function(request, response) {
  response.status(200).send(queue);
});

app.post('/api/queue', function(request, response) {
  if (!request.body) return response.sendStatus(400);
  var newuser = request.body;
  console.log(newuser);
  newuser.uuid = guid();
  queue.unplugged.push(newuser);

  response.status(200).send(queue);
});

app.delete('/api/queue/:uuid', function(request, response) {
  if (!request.body) return response.sendStatus(400);
  var deluserId = request.params.uuid;
  deleteUser(deluserId);
  response.status(200).send(queue);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var queue = {
  unplugged:[
    {"username":"unplugged","uuid":"21312"},
    {"username":"unplugged","uuid":"12312"}
  ],
  plugged:[
    {"username":"plugged1","uuid":"12312"},
    {"username":"plugged2","uuid":"42142"}
  ]
};


function deleteUser(deluserId){
  var founduser = queue.unplugged.filter(function(item){
    return item.uuid == deluserId;
  })[0];

  var index = queue.unplugged.indexOf(founduser);
  if(index >=0){
    queue.unplugged.splice(index,1);
    queue.plugged.push(founduser);
  }
  //console.log(queue);
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
}
//Clear Queue
setTimeout(function(){
  queue.unplugged = [];
  queue.plugged = [];
},86400000);


