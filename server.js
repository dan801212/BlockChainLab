// var http = require('http');

// var server = http.createServer(function(req, res) {
//   res.writeHead(200);
//   res.end('Hello Http');
// });
// server.listen(8080);

var request = require('request');

var qa = {
  uri: 'https://36c591183e7a4d3aad72788dea9dcaa9-vp0.us.blockchain.ibm.com:5004/chaincode',
  method: 'POST',
  json: 
        {
     "jsonrpc": "2.0",
     "method": "query",
     "params": {
         "type": 1,
         "chaincodeID": {
             "name": "5078ced08aaf2b64718ccdf705b6f32f08b629f99ba77472757b49594b20955d6b8d441764567a3dd12de085da899426a45b3b0a2cb93d81df6e404ceca6c1ff"
         },
         "ctorMsg": {
             "function": "query",
             "args": [
                 "amy"
             ]
         },
         "secureContext": "user_type1_0"
     },
     "id": 1
 		} 
};

var qb = {
  uri: 'https://36c591183e7a4d3aad72788dea9dcaa9-vp0.us.blockchain.ibm.com:5004/chaincode',
  method: 'POST',
  json: 
        {
     "jsonrpc": "2.0",
     "method": "query",
     "params": {
         "type": 1,
         "chaincodeID": {
             "name": "5078ced08aaf2b64718ccdf705b6f32f08b629f99ba77472757b49594b20955d6b8d441764567a3dd12de085da899426a45b3b0a2cb93d81df6e404ceca6c1ff"
         },
         "ctorMsg": {
             "function": "query",
             "args": [
                 "bob"
             ]
         },
         "secureContext": "user_type1_0"
     },
     "id": 1
 		} 
};

request(qa, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.result.message) // Print the shortened url.
  }else{
    console.log(error);
  }
});

request(qb, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.result.message) // Print the shortened url.
  }else{
    console.log(error);
  }
});