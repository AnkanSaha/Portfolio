const express = require('express');
const app = express.Router();
const DefPATH = `${__dirname}/static/` // Default Path
const SaveData = require('./Other Services/saveData');
const SaveToServer = require('./Server/SendToMongoDbatlas');

// Endpoint
app.get('/', (request, response)=>{
    var UserIP = request.socket.remoteAddress
    SaveData.SaveIPAddress(UserIP);
    response.sendFile(`${DefPATH}index.html`);
});

app.post('/contactus', (request, response)=>{
    var name = request.body.name
    var email = request.body.email
    var massage = request.body.message
    var Time = new Date()
    var  Final = `Hello Sir, I am ${name}. i am facing some problem in your website. my query is ${massage}. please reply me on my email address. my email address is ${email}.( Request Time : ${Time})`
    SaveToServer.SaveToServer(name, email, massage,Final, response);
    var FileName = `${request.body.name}(${email})`;
    var SaveStatus = SaveData.SaveUserRequest(FileName, Final);
    console.log(SaveStatus)
});

module.exports ={FastRouter:app};