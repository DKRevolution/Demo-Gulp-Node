var express = require('express');
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.port || 3000));
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(app.get('port'), function(){
 console.log('server is listening port:' + app.get('port'));
});


//********************************************************************************************//
//handling resquest from client
app.get('/user-details', function (req, res) {
    //console.log('sending user-details json file');
    res.sendFile( __dirname + "/json/user-details.json" );
});


app.post('/startjourneysocial', function(req, res){
    console.log('starting journey for user logged in through social network');
    //console.log(JSON.stringify(req.body));
    //console.log(JSON.stringify(req.header));
    var data = JSON.stringify(req.body);
    console.log(data);
    /*request({
      uri: "http://"+ip+":8080/spindas_poc/startjourneysocial.html",
      method: "POST",
      form: data
    }, function(error, response, body) {
        console.log('response from server');
        console.log(response.body);
        res.send(response.body);
    });*/
    var send = {
            exist: true
        };
    console.log('sending dummy data from node');
    res.send(send);
});
app.post('/adduser', function (req, res) {
    console.log('saving user data to josn file');
    if (fs.existsSync('json')) {
        process.chdir('json');
        console.log('inside json directory '+JSON.stringify(req.body) );
        fs.writeFileSync('user-data.json',  JSON.stringify(req.body));
        process.chdir('..');
    }
    /*********http start***********/
    var data = JSON.stringify(req.body);
    request({
      uri: "http://"+ip+":8080/spindas_poc/adduser.html",
      method: "POST",
      form: data
    }, function(error, response, body) {
        console.log('response from server')
        console.log(body);
    });
    console.log('sent to server');
    /*********http end*************/
    res.json(JSON.stringify(req.body));
});


app.get('/initial-profile', function (req, res) {
    console.log('sending initial profile details json file');
    res.sendFile( __dirname + "/json/initial-profile.json" );
});
app.get('/user-profile-data', function (req, res) {
    console.log('sending user profile details json file');
    res.sendFile( __dirname + "/json/user-data.json" );
});