const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const PORT = process.env.PORT || 3000;

const app = express();

const clientPath = `${__dirname}/client`;
console.log(`Serving static files from path ${clientPath}`);

app.use(express.static(clientPath));
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT);
console.log("Server listening at " + PORT);

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
var roundNum = 1;
var aumIn = false;
var aumWins = 0;
var aumChas = 1;
var aumRes = 0;

var ninaIn = false;
var ninaWins = 0;
var ninaChas = 1;
var ninaRes = 0;

var LKIn = false;
var LKWins = 0;
var LKChas = 1;
var LKRes = 0;

var LXRIn = false;
var LXRWins = 0;
var LXRChas = 1;
var LXRRes = 0;

var JHAIn = false;
var JHAWins = 0;
var JHAChas = 1;
var JHARes = 0;

var SZFIn = false;
var SZFWins = 0;
var SZFChas = 1;
var SZFRes = 0;

var JLIn = false;
var JLWins = 0;
var JLChas = 1;
var JLRes = 0;

var TJYIn = false;
var TJYWins = 0;
var TJYChas = 1;
var TJYRes = 0;

var users = ["TJY", "LXR", "JL", "LK", "JHA", "SZF"];

function Person(id, r1, p1, r2, p2, inOrOut) {
    this.id = id;
    this.r1 = r1;
    this.p1 = p1;
    this.r2 = r2;
    this.p2 = p2;
    this.inOrOut = inOrOut;
    this.results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.penalties = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

var objLXR = new Person("LXR", 0, 0, 0, 0, false);
var objLK = new Person("LK", 0, 0, 0, 0, false);
var objTJY = new Person("TJY", 0, 0, 0, 0, false);
var objJHA = new Person("JHA", 0, 0, 0, 0, false);
var objJL = new Person("JL", 0, 0, 0, 0, false);
var objSZF = new Person("SZF", 0, 0, 0, 0, false);
var objUsers = [objTJY, objLXR, objJL, objLK, objJHA, objSZF];

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

io.on('connection', (sock) => {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('newuser', (data) => {

        if (data !== "TCR") {
            var index = users.indexOf(data);
            objUsers[index].inOrOut = true;
            sock.id = data;
            //console.log(objUsers[index].id + " " + objUsers[index].inOrOut + " does this work???")
        } else {
            sock.id = data;
        }

    });

    sock.on('disconnect', () => {

        objUsers.forEach((obj) => {
            if (obj.id === sock.id) {
                obj.inOrOut = false;
            }
        });


    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('addWin', (data) => {
        if (data === "AA") {
            aumWins++;
        }
        if (data === "NN") {
            ninaWins++;
        }
        if (data === "LK") {
            LKWins++;
        }
        if (data === "LXR") {
            LXRWins++;
        }
        if (data === "JHA") {
            JHAWins++;
        }
        if (data === "SZF") {
            SZFWins++;
        }
        if (data === "JL") {
            JLWins++;
        }
        if (data === "TJY") {
            TJYWins++;
        }
    });

    sock.on('give', (data) => {

        if (data.userId === "LK") {
            LKWins--;
            if (data.giveToId === "JHA") {
                JHAWins++
            }
            if (data.giveToId === "SZF") {
                SZFWins++
            }
        }
        if (data.userId === "LXR") {
            LXRWins--;
            if (data.giveToId === "TJY") {
                TJYWins++
            }
            if (data.giveToId === "JL") {
                JLWins++
            }
        }
        if (data.userId === "JHA") {
            JHAWins--;
            if (data.giveToId === "LK") {
                LKWins++
            }
            if (data.giveToId === "SZF") {
                SZFWins++
            }
        }
        if (data.userId === "SZF") {
            SZFWins--;
            if (data.giveToId === "LK") {
                LKWins++
            }
            if (data.giveToId === "JHA") {
                JHAWins++
            }
        }
        if (data.userId === "JL") {
            JLWins--;
            if (data.giveToId === "TJY") {
                TJYWins++
            }
            if (data.giveToId === "LXR") {
                LXRWins++
            }
        }
        if (data.userId === "TJY") {
            TJYWins--;
            if (data.giveToId === "LXR") {
                LXRWins++
            }
            if (data.giveToId === "JL") {
                JLWins++
            }
        }
        var giverId = data.userId
        var receiverId = data.giveToId
        io.emit("lifegained", { giverId, receiverId });
    });

    sock.on('requestlife', (data) => {
        var requesterId = data.nickname;
        var requestToId = data.requestToId;
        io.emit('sendrequest', { requesterId, requestToId });

    });


    sock.on('minusWin', (data) => {
        if (data === "AA") {
            aumWins--;
            //console.log("did this run? " + data + " " + aumWins);
        }
        if (data === "NN") {
            ninaWins--;
        }
        if (data === "LK") {
            LKWins--;
        }
        if (data === "LXR") {
            LXRWins--;
        }
        if (data === "JHA") {
            JHAWins--;
        }
        if (data === "SZF") {
            SZFWins--;
        }
        if (data === "JL") {
            JLWins--;
        }
        if (data === "TJY") {
            TJYWins--;
        }

    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS CHALLENGES ~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('addCha', (data) => {
        if (data === "AA") {
            aumChas++;
        }
        if (data === "NN") {
            ninaChas++;
        }
        if (data === "LK") {
            LKChas++;
        }
        if (data === "LXR") {
            LXRChas++;
        }
        if (data === "JHA") {
            JHAChas++;
        }
        if (data === "SZF") {
            SZFChas++;
        }
        if (data === "JL") {
            JLChas++;
        }
        if (data === "TJY") {
            TJYChas++;
        }
    });

    sock.on('minusCha', (data) => {
        if (data === "AA") {
            aumChas--;
        }
        if (data === "NN") {
            ninaChas--;
        }
        if (data === "LK") {
            LKChas--;
        }
        if (data === "LXR") {
            LXRChas--;
        }
        if (data === "JHA") {
            JHAChas--;
        }
        if (data === "SZF") {
            SZFChas--;
        }
        if (data === "JL") {
            JLChas--;
        }
        if (data === "TJY") {
            TJYChas--;
        }
    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS CHALLENGES ~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('submit', (data) => {

        var index = users.indexOf(data.nickname);
        objUsers[index].results[roundNum - 1] = data.result;
        objUsers[index].penalties[roundNum - 1] = data.penalties;
        console.log("The result received on server is " + objUsers[index].results[roundNum - 1] + " for user " + objUsers[index].id);
        io.emit('reshistory', objUsers[index]);

    });

    sock.on('editresult', (data) => {

        var index = users.indexOf(data.student);
        objUsers[index].results[data.round - 1] = data.result;
        objUsers[index].penalties[data.round - 1] = data.penalties;

    });

    sock.on('chat-to-server', (data) => {
        io.emit('chat-to-clients', data);
    });

    sock.on('challenge', (data) => {
        var userId = data;
        io.emit('sendchallenge', userId);

    });

    sock.on('nextround', () => {
        roundNum++;
        io.emit('refreshall', roundNum);
    });

});


setInterval(function () {
    objUsers.forEach((obj) => {
        if (obj.inOrOut === true) {
            io.emit("transmituser", obj.id);
        }
    });

    objUsers.forEach((obj) => {
        if (obj.inOrOut === false) {
            io.emit("userdisconnect", obj.id);
        }
    });


    //dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

    /* io.emit('updateallwins', { aumWins, ninaWins, LKWins, LXRWins, JHAWins, SZFWins, JLWins, TJYWins });
    io.emit('updateallchas', { aumChas, ninaChas, LKChas, LXRChas, JHAChas, SZFChas, JLChas, TJYChas }); */

    objUsers.forEach((obj) => {
        io.emit("updateallresults", obj);

    });



    /* io.emit('updateAA', aumWins);
    io.emit('updateNN', ninaWins); */

}, 500);


