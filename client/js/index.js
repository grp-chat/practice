
const sock = io();
//let newLine = createNewLine();
var rotation = 1;
var roundNum = 1;
var wordRow = "row";
var rowNum = 1;
var userName = "Aum";
var userId = "AA";
var userName2 = "Julie ";
var userId2 = "NN";


/* var userId3 = "LK";
var userId4 = "LXR";
var userId5 = "JHA";
var userId6 = "JL";
var userId7 = "SZF";
var userId8 = ""; */

var lastClicked;

var userId3 = "LK";
var userId4 = "TJY";
var userId5 = "LXR";
var userId6 = "JHA";
var userId7 = "SZF";
var userId8 = "JL";

var team1 = ["LK", "JHA", "SZF"];
var team2 = ["TJY", "LXR", "JL"];
var otherUsers = ["TJY", "LXR", "JL", "LK", "JHA", "SZF"];
var students = ["TJY", "LXR", "JL", "LK", "JHA", "SZF"];
var rounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var nickname = '';
var connectedUser = '';
var userOnline = '';
var userOffline = '';
var aumWins = 0;
var aumChas = 1;
var ninaWins = 0;
var ninaChas = 1;
var LKWins = 0;
var LKChas = 1;
var LXRWins = 0;
var LXRChas = 1;
var JHAWins = 0;
var JHAChas = 1;
var SZFWins = 0;
var SZFChas = 1;
var JLWins = 0;
var JLChas = 1;
var TJYWins = 0;
var TJYChas = 1;

var LOKWins = 0;
var LOKChas = 1;
var CJHWins = 0;
var CJHChas = 1;
var CEDWins = 0;
var CEDChas = 1;
var KXWins = 0;
var KXChas = 1;
var KNins = 0;
var KNChas = 1;

var lifeGiven = 0;

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}


//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------
const promptMsg = () => {
    var nick = prompt("Please enter your pin number:");
    while (nick.length == 0) {
        alert("Please enter your pin number!");
        nick = prompt("Please enter your pin number:");
    }


    if (nick === '8111188') {
        nickname = 'Aum';
        correctPin = true;
    } else if (nick === '1888811') {
        nickname = 'Nina'
        correctPin = true;
    } else if (nick === '9852') {
        nickname = 'LK'
        correctPin = true;
    } else if (nick === '9035') {
        nickname = 'LXR'
        correctPin = true;
    } else if (nick === '6588') {
        nickname = 'TJY'
        correctPin = true;
    } else if (nick === '1072') {
        nickname = 'JL'
        correctPin = true;
    } else if (nick === '3839') {
        nickname = 'SZF'
        correctPin = true;
    } else if (nick === '88888') {
        nickname = 'TCR'
        correctPin = true;
    } else if (nick === '3583') {
        nickname = 'JHA'
        correctPin = true;
    } else if (nick === '5086') {
        nickname = 'CED'
    } else if (nick === '2105') {
        nickname = 'CJH'
    } else if (nick === '2167') {
        nickname = 'KX'
    } else if (nick === '7051') {
        nickname = 'KN'
    } else if (nick === '1198') {
        nickname = 'LOK'
    } else if (nick === '7089') {
        nickname = 'JW'
    } else {
        alert("Wrong pin number!");
        promptMsg();
    }
};

promptMsg();
sock.emit('newuser', nickname);
//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------



//++++++++++++++++++++++++++++++++++++++++ DOCUMENT OBJECT METHOD UPDATE +++++++++++++++++++++++++++++++++++

/* var theRound = document.getElementById("h1");
theRound.innerHTML = "Infinity War - Round" + roundNum;
document.body.appendChild(createContainerFluid());

let mainDiv = document.getElementById("maindiv"); */



/* document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId3));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId4));
rowNum++;
document.body.appendChild(createHrLine(wordRow + rowNum));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId5));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId6));
rowNum++;
document.body.appendChild(createHrLine(wordRow + rowNum));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId7));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId8));
rowNum++;
document.body.appendChild(createHrLine(wordRow + rowNum));
rowNum++;
document.body.appendChild(createBotBtn(wordRow + rowNum)); */

//++++++++++++++++++++++++++++++++++++++++ DOCUMENT OBJECT METHOD UPDATE +++++++++++++++++++++++++++++++++++


//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} LISTENERS FROM SERVER {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{
sock.on('transmituser', data => {

    if (data === "TCR") { } else {
        var span2Id = data + "span2"
        var togSpan = document.getElementById(span2Id);
        togSpan.style.background = "green";
    }

});

sock.on('userdisconnect', data => {

    if (nickname !== "TCR") {
        var span2Id = data + "span2"
        var togSpan = document.getElementById(span2Id);
        togSpan.style.background = "black";
    }

});

sock.on('updateallresults', data => {

    var tableId = data.id + "tbl"
    var updTable = document.getElementById(tableId);
    var resArray = data.results

    data.results.forEach((item, index) => {
        updTable.rows[1].cells[index + 1].innerHTML = item;
    });

    data.penalties.forEach((item, index) => {
        updTable.rows[2].cells[index + 1].innerHTML = item;
    });

});

sock.on('refreshall', data => {
    //changeBackground(rotation);
    //rotation++;

    //if (rotation >= 13) {rotation = 1};
    //lifeGiven = 0;
    roundNum = data;
    labelRes.innerHTML = "Round " + roundNum + " - Result:";


    var clearIt = document.getElementById(nickname + "inputres");
    clearIt.value = '';
    clearIt = document.getElementById(nickname + "inputpen");
    clearIt.value = '';
});

sock.on('reshistory', data => {

    console.log(data.id + "//Result:" + data.results[roundNum - 1] + "//Round:" + roundNum);
    console.log(data.id + " entered result " + data.results[roundNum - 1] + " on Round " + roundNum);

});

sock.on('chat-to-clients', data => {
    appendMessage(data);
});


/* sock.on('updateallwins', data => {
    if (data.aumWins > aumWins) {
        var aumWinDif = data.aumWins - aumWins;
        var userId = "AA"
        updateAllWins(userId, aumWinDif);
        aumWins = data.aumWins;
    }
    if (data.ninaWins > ninaWins) {
        var ninaWinDif = data.ninaWins - ninaWins;
        var userId = "NN"
        updateAllWins(userId, ninaWinDif);
        ninaWins = data.ninaWins;
    }
    if (data.LKWins > LKWins) {
        var LKWinDif = data.LKWins - LKWins;
        var userId = "LK"
        updateAllWins(userId, LKWinDif);
        LKWins = data.LKWins;
    }
    if (data.LXRWins > LXRWins) {
        var LXRWinDif = data.LXRWins - LXRWins;
        var userId = "LXR"
        updateAllWins(userId, LXRWinDif);
        LXRWins = data.LXRWins;
    }
    if (data.JHAWins > JHAWins) {
        var JHAWinDif = data.JHAWins - JHAWins;
        var userId = "JHA"
        updateAllWins(userId, JHAWinDif);
        JHAWins = data.JHAWins;
    }
    if (data.SZFWins > SZFWins) {
        var SZFWinDif = data.SZFWins - SZFWins;
        var userId = "SZF"
        updateAllWins(userId, SZFWinDif);
        SZFWins = data.SZFWins;
    }
    if (data.JLWins > JLWins) {
        var JLWinDif = data.JLWins - JLWins;
        var userId = "JL"
        updateAllWins(userId, JLWinDif);
        JLWins = data.JLWins;
    }
    if (data.TJYWins > TJYWins) {
        var TJYWinDif = data.TJYWins - TJYWins;
        var userId = "TJY"
        updateAllWins(userId, TJYWinDif);
        TJYWins = data.TJYWins;
    }

    //MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    if (data.aumWins < aumWins) {
        var userId = "AA"
        removeWin(userId, aumWins);
        aumWins = data.aumWins;
    }
    if (data.ninaWins < ninaWins) {
        var userId = "NN"
        removeWin(userId, ninaWins);
        ninaWins = data.ninaWins;
    }
    if (data.LKWins < LKWins) {
        var userId = "LK"
        removeWin(userId, LKWins);
        LKWins = data.LKWins;
    }
    if (data.LXRWins < LXRWins) {
        var userId = "LXR"
        removeWin(userId, LXRWins);
        LXRWins = data.LXRWins;
    }
    if (data.JHAWins < JHAWins) {
        var userId = "JHA"
        removeWin(userId, JHAWins);
        JHAWins = data.JHAWins;
    }
    if (data.SZFWins < SZFWins) {
        var userId = "SZF"
        removeWin(userId, SZFWins);
        SZFWins = data.SZFWins;
    }
    if (data.JLWins < JLWins) {
        var userId = "JL"
        removeWin(userId, JLWins);
        JLWins = data.JLWins;
    }
    if (data.TJYWins < TJYWins) {
        var userId = "TJY"
        removeWin(userId, TJYWins);
        TJYWins = data.TJYWins;
    }

});

sock.on('updateallchas', data => {
    if (data.aumChas > aumChas) {
        var aumChaDif = data.aumChas - aumChas;
        var userId = "AA"
        updateAllChas(userId, aumChaDif);
        aumChas = data.aumChas;
    }
    if (data.ninaChas > ninaChas) {
        var ninaChaDif = data.ninaChas - ninaChas;
        var userId = "NN"
        updateAllChas(userId, ninaChaDif);
        ninaChas = data.ninaChas;
    }
    if (data.LKChas > LKChas) {
        var LKChaDif = data.LKChas - LKChas;
        var userId = "LK"
        updateAllChas(userId, LKChaDif);
        LKChas = data.LKChas;
    }
    if (data.LXRChas > LXRChas) {
        var LXRChaDif = data.LXRChas - LXRChas;
        var userId = "LXR"
        updateAllChas(userId, LXRChaDif);
        LXRChas = data.LXRChas;
    }
    if (data.JHAChas > JHAChas) {
        var JHAChaDif = data.JHAChas - JHAChas;
        var userId = "JHA"
        updateAllChas(userId, JHAChaDif);
        JHAChas = data.JHAChas;
    }
    if (data.SZFChas > SZFChas) {
        var SZFChaDif = data.SZFChas - SZFChas;
        var userId = "SZF"
        updateAllChas(userId, SZFChaDif);
        SZFChas = data.SZFChas;
    }
    if (data.JLChas > JLChas) {
        var JLChaDif = data.JLChas - JLChas;
        var userId = "JL"
        updateAllChas(userId, JLChaDif);
        JLChas = data.JLChas;
    }
    if (data.TJYChas > TJYChas) {
        var TJYChaDif = data.TJYChas - TJYChas;
        var userId = "TJY"
        updateAllChas(userId, TJYChaDif);
        TJYChas = data.TJYChas;
    }

    //CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC

    if (data.aumChas < aumChas) {
        var userId = "AA"
        removeCha(userId, aumChas);
        aumChas = data.aumChas;
    }
    if (data.ninaChas < ninaChas) {
        var userId = "NN"
        removeCha(userId, ninaChas);
        ninaChas = data.ninaChas;
    }
    if (data.LKChas < LKChas) {
        var userId = "LK"
        removeCha(userId, LKChas);
        LKChas = data.LKChas;
    }
    if (data.LXRChas < LXRChas) {
        var userId = "LXR"
        removeCha(userId, LXRChas);
        LXRChas = data.LXRChas;
    }
    if (data.JHAChas < JHAChas) {
        var userId = "JHA"
        removeCha(userId, JHAChas);
        JHAChas = data.JHAChas;
    }
    if (data.SZFChas < SZFChas) {
        var userId = "SZF"
        removeCha(userId, SZFChas);
        SZFChas = data.SZFChas;
    }
    if (data.JLChas < JLChas) {
        var userId = "JL"
        removeCha(userId, JLChas);
        JLChas = data.JLChas;
    }
    if (data.TJYChas < TJYChas) {
        var userId = "TJY"
        removeCha(userId, TJYChas);
        TJYChas = data.TJYChas;
    }

});





sock.on('updateallresults', data => {
    if (data.userId === "AA") {
        var updatebox = document.getElementById('AAinput');
        updatebox.value = data.aumRes;
    }
    if (data.userId === "NN") {
        var updatebox = document.getElementById('NNinput');
        updatebox.value = data.ninaRes;
    }
    if (data.userId === "LK") {
        var updatebox = document.getElementById('LKinput');
        updatebox.value = data.LKRes;
    }
    if (data.userId === "LXR") {
        var updatebox = document.getElementById('LXRinput');
        updatebox.value = data.LXRRes;
    }
    if (data.userId === "JHA") {
        var updatebox = document.getElementById('JHAinput');
        updatebox.value = data.JHARes;
    }
    if (data.userId === "SZF") {
        var updatebox = document.getElementById('SZFinput');
        updatebox.value = data.SZFRes;
    }
    if (data.userId === "JL") {
        var updatebox = document.getElementById('JLinput');
        updatebox.value = data.JLRes;
    }
    if (data.userId === "TJY") {
        var updatebox = document.getElementById('TJYinput');
        updatebox.value = data.TJYRes;
    }
});

sock.on('sendchallenge', data => {
    if (nickname === "TCR") {
        alert(data + " has called for a Challenge");
    }
});

sock.on('refreshall', data => {
    changeBackground(rotation);
    rotation++;
    
    if (rotation >= 13) {rotation = 1};
    lifeGiven = 0;
    roundNum = data;
    theRound.innerHTML = "Infinity War - Round" + roundNum;
    var refreshIt = document.getElementById(nickname + "submitbtn");
    if (nickname != "TCR") {
        refreshIt.disabled = false;
    }
    var refreshIt2 = document.getElementById(nickname + "callcha");
    if (nickname != "TCR") {
        refreshIt2.disabled = false;
    }
    var refreshIt3 = document.getElementById(nickname + "givebtn");
    if (nickname != "TCR") {
        refreshIt3.disabled = false;
    }
    var refreshIt4 = document.getElementById(nickname + "reqbtn");
    if (nickname != "TCR") {
        refreshIt4.disabled = false;
    }
    var clearIt = document.getElementById("LKinput");
    clearIt.value = '';
    clearIt = document.getElementById("LXRinput");
    clearIt.value = '';
    clearIt = document.getElementById("JHAinput");
    clearIt.value = '';
    clearIt = document.getElementById("SZFinput");
    clearIt.value = '';
    clearIt = document.getElementById("JLinput");
    clearIt.value = '';
    clearIt = document.getElementById("TJYinput");
    clearIt.value = '';

});

sock.on('lifegained', data => {
    if (nickname === data.receiverId) {
        alert("You have gained 1 life from " + data.giverId);
    }
});

sock.on('sendrequest', data => {
    if (nickname === data.requestToId) {
        alert(data.requesterId +  " is requesting 1 life from you");
    }
}); */
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} LISTENERS FROM SERVER {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{



//(((((((((((((((((((((((((((((((((((((((( FACTORY FUNCTIONS ))))))))))))))))))))))))))))))))))))))))))))))))

function createContainerFluid() {
    var createDiv = document.createElement('div');
    createDiv.className = "container-fluid";
    createDiv.setAttribute("id", "maindiv");
    return createDiv;
}

function createNewRow(rowNum, userName, userId) {

    var divRow = mainDiv.appendChild(document.createElement('div'));
    divRow.className = "row";
    divRow.setAttribute("id", rowNum);

    var divCol1 = divRow.appendChild(document.createElement('div'));
    divCol1.className = "col1";
    divCol1.style.padding = "10px";
    var label1 = divCol1.appendChild(document.createElement('h2'));
    label1.innerHTML = userId;
    label1.style.width = "80px";
    label1.style.color = "mediumblue";
    //label1.style = "background:rgba(255, 255, 0, 0.3)"
    var span1 = label1.appendChild(document.createElement('span'));
    span1.setAttribute("id", userId + "span");
    span1.style = "width:20px;height:20px";
    span1.style.display = "inline-block";
    span1.style.background = "red";

    /* var divCol1e = divRow.appendChild(document.createElement('div'));
    divCol1e.className = "col1e";
    divCol1e.style.padding = "10px";
    var span1 = divCol1e.appendChild(document.createElement('span'));
    span1.style = "width:10rem;height:10rem;background:red"; */

    var divCol2 = divRow.appendChild(document.createElement('div'));
    divCol2.className = "col2"
    divCol2.setAttribute("id", userId + "border");
    //createDiv.style.border = "5px solid black"
    //createDiv.style.padding = "40px"
    divCol2.style = "width:400px;height:65px"
    //createDiv.style.float = "left"
    //createDiv.className = "rounded"
    divCol2.style.backgroundImage = "url(https://lh3.googleusercontent.com/g1-vQvca_v4Juug9neJuXRY9Nnwh4sdNnxqG0THU_WocwJiD7ixvJL4CoGTWmdyZyCFtjz4gTI7LQCJaJ29eMk9xg_h2qonU0bcDbVYvxQ2BKzZWYs-VL02fLFHqhlfo3Cheh-om=w2400)"
    divCol2.style.backgroundSize = "100%"
    divCol2.style.backgroundRepeat = "no-repeat"

    var divCol1a = divRow.appendChild(document.createElement('input'));
    divCol1a.className = "input1";
    divCol1a.style.width = "7%";
    divCol1a.setAttribute("id", userId + "input");
    divCol1a.setAttribute("type", "number");
    if (userId != nickname) {
        divCol1a.disabled = true;
    }

    var divCol1b = divRow.appendChild(document.createElement('button'));
    divCol1b.className = "btn btn-secondary";
    //divCol1b.style.width = "7%";
    divCol1b.setAttribute("id", userId + "submitbtn");
    divCol1b.innerHTML = "Submit"
    if (userId != nickname) {
        divCol1b.disabled = true;
    }
    divCol1b.addEventListener('click', function () {
        var result = document.getElementById(userId + "input").value;
        sock.emit('submit', { userId, result });
        divCol1b.disabled = true;
    });

    var divCol1c = divRow.appendChild(document.createElement('button'));
    divCol1c.className = "btn btn-warning";
    //divCol1b.style.width = "7%";
    divCol1c.setAttribute("id", userId + "callcha");
    divCol1c.innerHTML = "Challenge"
    if (userId != nickname) {
        divCol1c.disabled = true;
    }
    divCol1c.addEventListener('click', function () {
        sock.emit('challenge', userId);
        divCol1c.disabled = true;
    });

    var divCol3 = divRow.appendChild(document.createElement('div'));
    divCol3.className = "col3"
    divCol3.style.padding = "10px";
    divCol3.appendChild(createButtonGroup("btnGrp1", userId + "border", userId));

    var divCol4a = divRow.appendChild(document.createElement('div'));
    divCol4a.setAttribute("id", userId + "listdiv");
    divCol4a.className = "col4a";
    if (team1.includes(userId)) {
        createDropList(userId, divCol4a, team1);
    }
    if (team2.includes(userId)) {
        createDropList(userId, divCol4a, team2);
    }

    var divCol4b = divRow.appendChild(document.createElement('button'));
    divCol4b.className = "btn btn-success";
    divCol4b.setAttribute("id", userId + "givebtn");
    divCol4b.innerHTML = "Give"
    if (userId != nickname) {
        divCol4b.disabled = true;
    }

    divCol4b.addEventListener('click', function () {
        //GIVE  

        if (userId === "LK" && LKWins <= 1) {
            alert("You do not have enough life to give");
            divCol4b.disabled = true;
        };
        if (userId === "LK" && LKWins >= 2) {
            var selection = document.getElementById(userId + "droplist");
            var giveToId = selection.options[selection.selectedIndex].text;
            if (confirm("ARE YOU SURE YOU WANT TO GIVE LIFE TO " + giveToId + "?") === true) {
                alert(userId + " has given 1 life to " + giveToId)
                sock.emit('give', { giveToId, userId });
                lifeGiven++;
            } else { alert("You cancelled") }

        }

        if (userId === "LXR" && LXRWins <= 1) {
            alert("You do not have enough life to give");
            divCol4b.disabled = true;
        };
        if (userId === "LXR" && LXRWins >= 2) {
            var selection = document.getElementById(userId + "droplist");
            var giveToId = selection.options[selection.selectedIndex].text;
            if (confirm("ARE YOU SURE YOU WANT TO GIVE LIFE TO " + giveToId + "?") === true) {
                alert(userId + " has given 1 life to " + giveToId)
                sock.emit('give', { giveToId, userId });
                lifeGiven++;
            } else { alert("You cancelled") }

        }

        if (userId === "JHA" && JHAWins <= 1) {
            alert("You do not have enough life to give");
            divCol4b.disabled = true;
        };
        if (userId === "JHA" && JHAWins >= 2) {
            var selection = document.getElementById(userId + "droplist");
            var giveToId = selection.options[selection.selectedIndex].text;
            if (confirm("ARE YOU SURE YOU WANT TO GIVE LIFE TO " + giveToId + "?") === true) {
                alert(userId + " has given 1 life to " + giveToId)
                sock.emit('give', { giveToId, userId });
                lifeGiven++;
            } else { alert("You cancelled") }

        }

        if (userId === "SZF" && SZFWins <= 1) {
            alert("You do not have enough life to give");
            divCol4b.disabled = true;
        };
        if (userId === "SZF" && SZFWins >= 2) {
            var selection = document.getElementById(userId + "droplist");
            var giveToId = selection.options[selection.selectedIndex].text;
            if (confirm("ARE YOU SURE YOU WANT TO GIVE LIFE TO " + giveToId + "?") === true) {
                alert(userId + " has given 1 life to " + giveToId)
                sock.emit('give', { giveToId, userId });
                lifeGiven++;
            } else { alert("You cancelled") }

        }

        if (userId === "JL" && JLWins <= 1) {
            alert("You do not have enough life to give");
            divCol4b.disabled = true;
        };
        if (userId === "JL" && JLWins >= 2) {
            var selection = document.getElementById(userId + "droplist");
            var giveToId = selection.options[selection.selectedIndex].text;
            if (confirm("ARE YOU SURE YOU WANT TO GIVE LIFE TO " + giveToId + "?") === true) {
                alert(userId + " has given 1 life to " + giveToId)
                sock.emit('give', { giveToId, userId });
                lifeGiven++;
            } else { alert("You cancelled") }

        }

        if (userId === "TJY" && TJYWins <= 1) {
            alert("You do not have enough life to give");
            divCol4b.disabled = true;
        };
        if (userId === "TJY" && TJYWins >= 2) {
            var selection = document.getElementById(userId + "droplist");
            var giveToId = selection.options[selection.selectedIndex].text;
            if (confirm("ARE YOU SURE YOU WANT TO GIVE LIFE TO " + giveToId + "?") === true) {
                alert(userId + " has given 1 life to " + giveToId)
                sock.emit('give', { giveToId, userId });
                lifeGiven++;
            } else { alert("You cancelled") }

        }

        if (lifeGiven >= 2) {
            divCol4b.disabled = true;
        }

    });

    var divCol4c = divRow.appendChild(document.createElement('button'));
    divCol4c.className = "btn btn-danger";
    divCol4c.setAttribute("id", userId + "reqbtn");
    divCol4c.innerHTML = "Request"
    if (userId != nickname) {
        divCol4c.disabled = true;
    }
    divCol4c.addEventListener('click', function () {
        var selection = document.getElementById(userId + "droplist");
        var requestToId = selection.options[selection.selectedIndex].text;
        sock.emit('requestlife', { nickname, requestToId });
        divCol4c.disabled = true;
        alert("You have sent a request to " + requestToId + " to give you 1 life");
    });

    var divCol4 = divRow.appendChild(document.createElement('div'));
    divCol4.setAttribute("id", userId + "chadiv");
    divCol4.className = "col4";
    //divCol4.style.padding = "10px";
    createChallenges(userId, userId + "chadiv", 1);
    //createChallenges(userId, userId + "chadiv", 2);
    //createChallenges(userId, userId + "chadiv", 3);
    //divCol4.appendChild(createChallenges(userId + "chadiv"));


    /* var select = document.createElement("select");
    select.name = "team1";
    select.id = "team1"
    for (const val of team1)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
    var listLabel = document.createElement("label");
    listLabel.innerHTML = "Give: "
    listLabel.htmlFor = "team1";
    divCol4a.appendChild(listLabel).appendChild(select); */


    var divCol5 = divRow.appendChild(document.createElement('div'));
    divCol5.className = "col5"
    divCol5.style.padding = "10px";
    divCol5.appendChild(createChaButtons(userId));
    return mainDiv;
}

function createChallenges(userId, elToApply, chaCount) {
    var createDiv = document.getElementById(elToApply);
    createDiv.className = "float-left";
    //createDiv.setAttribute("id", "col4");
    var img = document.createElement('img');
    /* img.src =  "https://cdn2.iconfinder.com/data/icons/geometric-abstract-geometry-shape-vol-1/512/abstract_geometric_shape_polygon_geomatry_symbol_--40-1024.png"; */
    img.src = "https://lh3.googleusercontent.com/xpz43lDxs3mmfni85cCGkIX4GeKMsoC5RHDoLRxOpj28VggUjXnadGBq7Oh_TX4Hp7-cT68YfJhmh_LB-5RooPgxNhFn0NKSM1z6PKVwtLUmACeKct8Uo6N269krf5tg9KMOmf0y=w2400";
    img.referrerPolicy = 'no-referer';
    img.style = "width:55px;height:55px";
    img.setAttribute("id", userId + "cha" + chaCount);
    createDiv.appendChild(img);
    return createDiv;
}

function createButtonGroup(name, elToApply, userId) {
    let winCount = 0;
    var createDiv = document.createElement('div');
    createDiv.setAttribute("id", name)
    createDiv.className = "btn-group"
    //createDiv.style.display = 'block'
    //createDiv.style = "width:100px;height:80px"
    //createDiv.style.clear = "left"
    let btn1 = createDiv.appendChild(document.createElement('button'));
    btn1.setAttribute("id", "btn1")
    btn1.className = "btn btn-success"
    btn1.innerHTML = "+"
    let btn2 = createDiv.appendChild(document.createElement('button'));
    btn2.setAttribute("id", "btn2")
    btn2.className = "btn btn-dark"
    btn2.innerHTML = "-"

    btn1.addEventListener('click', function () {
        sock.emit('addWin', userId);
    })
    btn2.addEventListener('click', function () {
        sock.emit('minusWin', userId);
    })

    if (nickname != "TCR") {
        //alert("hello")
        btn1.style.visibility = "hidden"
        btn2.style.visibility = "hidden"
    }
    return createDiv;

}

function createChaButtons(userId) {
    //var chaCount = 3;
    var createDiv = document.createElement('div');
    createDiv.setAttribute("id", userId + "chabtndiv");
    createDiv.className = "btn-group";
    let chaBtn1 = createDiv.appendChild(document.createElement('button'));
    chaBtn1.setAttribute("id", userId + "chabtn1");
    chaBtn1.className = "btn btn-success";
    chaBtn1.innerHTML = "+C";
    //chaBtn1.disabled = "true";
    let chaBtn2 = createDiv.appendChild(document.createElement('button'));
    chaBtn2.setAttribute("id", userId + "chabtn2");
    chaBtn2.className = "btn btn-dark";
    chaBtn2.innerHTML = "-C";

    chaBtn1.addEventListener('click', function () {
        sock.emit('addCha', userId);
    });

    chaBtn2.addEventListener('click', function () {
        sock.emit('minusCha', userId);
    });

    if (nickname != "TCR") {
        chaBtn1.style.visibility = "hidden";
        chaBtn2.style.visibility = "hidden";
    }



    return createDiv;

}

function removeWin(userId, winCount) {
    //alert(userId + "win" + winCount);
    var removeWin = document.getElementById(userId + "win" + winCount);
    removeWin.parentNode.removeChild(removeWin);


}

function removeCha(userId, chaCount) {

    var removeCha = document.getElementById(userId + "cha" + chaCount);
    removeCha.parentNode.removeChild(removeCha);
    //chaCount -= 1;

}

function addChallenge(userId, chaCount) {
    //chaCount++;
    var addCha = document.getElementById(userId + "chadiv");
    var img = document.createElement('img');
    img.src = "https://lh3.googleusercontent.com/xpz43lDxs3mmfni85cCGkIX4GeKMsoC5RHDoLRxOpj28VggUjXnadGBq7Oh_TX4Hp7-cT68YfJhmh_LB-5RooPgxNhFn0NKSM1z6PKVwtLUmACeKct8Uo6N269krf5tg9KMOmf0y=w2400";
    img.style = "width:35px;height:35px";
    //chaCount += 1;
    img.setAttribute("id", userId + "cha" + chaCount);
    //alert(userId + "cha" + chaCount);
    //img.style.padding = "10px"
    addCha.appendChild(img);
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function createHrLine(rowNum) {
    var divRow = mainDiv.appendChild(document.createElement('div'));
    divRow.className = "row";
    divRow.setAttribute("id", rowNum);

    var createLine = divRow.appendChild(document.createElement('hr'));
    createLine.setAttribute("width", "1300px");
    return mainDiv;
}

function createBotBtn(rowNum) {
    var divRow = mainDiv.appendChild(document.createElement('div'));
    divRow.className = "row";
    divRow.setAttribute("id", rowNum);

    var botBtn = divRow.appendChild(document.createElement('button'));
    botBtn.setAttribute("id", userId + "botbtn");
    botBtn.className = "btn btn-success btn-lg";
    botBtn.innerHTML = "Next Round";
    botBtn.style.visibility = "hidden";
    if (nickname === "TCR") {
        botBtn.style.visibility = "visible";

        botBtn.addEventListener('click', function () {
            roundNum++;
            sock.emit('nextround', roundNum);
            var clearIt = document.getElementById("LKinput");
            clearIt.value = '';
            clearIt = document.getElementById("LXRinput");
            clearIt.value = '';
            clearIt = document.getElementById("JHAinput");
            clearIt.value = '';
            clearIt = document.getElementById("SZFinput");
            clearIt.value = '';
            clearIt = document.getElementById("JLinput");
            clearIt.value = '';
            clearIt = document.getElementById("TJYinput");
            clearIt.value = '';

        });
    }

    var resetBtn = divRow.appendChild(document.createElement('button'));
    resetBtn.setAttribute("id", userId + "resetbtn");
    resetBtn.className = "btn btn-secondary btn-lg";
    resetBtn.innerHTML = "Reset Round";
    resetBtn.style.visibility = "hidden";
    if (nickname === "TCR") {
        resetBtn.style.visibility = "visible";

        resetBtn.addEventListener('click', function () {
            roundNum = 1;
            sock.emit('nextround', roundNum);
            var clearIt = document.getElementById("LKinput");
            clearIt.value = '';
            clearIt = document.getElementById("LXRinput");
            clearIt.value = '';
            clearIt = document.getElementById("JHAinput");
            clearIt.value = '';
            clearIt = document.getElementById("SZFinput");
            clearIt.value = '';
            clearIt = document.getElementById("JLinput");
            clearIt.value = '';
            clearIt = document.getElementById("TJYinput");
            clearIt.value = '';

        });
    }

    return mainDiv;
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function updateAllWins(userId, winDif) {
    if (userId === "AA") {
        counter = aumWins;
    }
    if (userId === "NN") {
        counter = ninaWins;
    }
    if (userId === "LK") {
        counter = LKWins;
    }
    if (userId === "LXR") {
        counter = LXRWins;
    }
    if (userId === "JHA") {
        counter = JHAWins;
    }
    if (userId === "SZF") {
        counter = SZFWins;
    }
    if (userId === "JL") {
        counter = JLWins;
    }
    if (userId === "TJY") {
        counter = TJYWins;
    }

    for (var i = counter + 1; i < winDif + counter + 1; i++) {
        var displayWin = document.getElementById(userId + "border");
        var img = document.createElement('img');
        img.src = "https://cdn3.iconfinder.com/data/icons/phuzion/PNG/Misc/fav-heart.png"
        //img.src = "https://cdn0.iconfinder.com/data/icons/startup-and-new-business-3/24/trophy-1024.png"
        //img.src = "https://cdn4.iconfinder.com/data/icons/trophy-and-awards-1/64/Icon_Star_Trophy_Awards_Gold-1024.png";
        img.style = "width:30px;height:30px"
        img.style.position = "relative"
        img.style.top = "17px"
        img.style.left = "10px"
        img.setAttribute("id", userId + "win" + i);
        displayWin.appendChild(img);
        //alert(userId + "win" + i)
    };

}

function updateAllChas(userId, chaDif) {
    if (userId === "AA") {
        counter = aumChas;
    }
    if (userId === "NN") {
        counter = ninaChas;
    }
    if (userId === "LK") {
        counter = LKChas;
    }
    if (userId === "LXR") {
        counter = LXRChas;
    }
    if (userId === "JHA") {
        counter = JHAChas;
    }
    if (userId === "SZF") {
        counter = SZFChas;
    }
    if (userId === "JL") {
        counter = JLChas;
    }
    if (userId === "TJY") {
        counter = TJYChas;
    }

    for (var i = counter + 1; i < chaDif + counter + 1; i++) {
        var addCha = document.getElementById(userId + "chadiv");
        var img = document.createElement('img');
        img.src = "https://lh3.googleusercontent.com/xpz43lDxs3mmfni85cCGkIX4GeKMsoC5RHDoLRxOpj28VggUjXnadGBq7Oh_TX4Hp7-cT68YfJhmh_LB-5RooPgxNhFn0NKSM1z6PKVwtLUmACeKct8Uo6N269krf5tg9KMOmf0y=w2400";
        img.style = "width:55px;height:55px";
        img.setAttribute("id", userId + "cha" + i);
        addCha.appendChild(img);
    }

}

function createDropList(userId, elToApply, teamNum) {
    var select = document.createElement("select");
    select.name = teamNum;
    //select.id = teamNum;
    select.setAttribute("id", userId + "droplist");
    select.className = "form-control";
    select.style.width = "80px";

    if (userId != nickname) {
        select.disabled = true;
    }

    teamNum = teamNum.filter(function (passId) {
        return passId !== userId;
    });
    for (const val of teamNum) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }

    var listLabel = document.createElement("label");
    listLabel.innerHTML = ""
    listLabel.htmlFor = teamNum;

    elToApply.appendChild(listLabel).appendChild(select);
}

function createDropList2(students) {
    var select = document.createElement("select");
    select.name = students;
    //select.id = teamNum;
    select.setAttribute("id", "students");
    select.className = "form-control";
    select.style.width = "80px";

    for (const val of students) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }

    var listLabel = document.createElement("label");
    listLabel.innerHTML = ""
    listLabel.htmlFor = students;

    document.body.appendChild(listLabel).appendChild(select);
}

function changeBackground(rotation) {
    if (rotation === 2) {
        var url = 'https://cdnb.artstation.com/p/assets/images/images/014/324/815/large/chris-kesler-1.jpg?1543495968';
        document.body.style.backgroundImage = "url(" + url + ")";
        document.body.style.backgroundSize = "1750px";
    }

    if (rotation === 4) {
        url = 'https://www.awn.com/sites/default/files/styles/original/public/image/attached/1046374-anf3740compv0081020cc-lr.jpg?itok=Pf44ptMv';
        document.body.style.backgroundImage = "url(" + url + ")";
        document.body.style.backgroundSize = "1500px";
    }

    if (rotation === 6) {
        url = 'https://www.teahub.io/photos/full/94-945045_marvel-comic-space-backgrounds.jpg';
        document.body.style.backgroundImage = "url(" + url + ")";

    }

    if (rotation === 8) {
        url = 'https://m.media-amazon.com/images/M/MV5BOTg0ODU3ODY2NF5BMl5BanBnXkFtZTgwMTg4MjkzNTM@._V1_.jpg';
        document.body.style.backgroundImage = "url(" + url + ")";
    }

    if (rotation === 10) {
        url = 'https://lumiere-a.akamaihd.net/v1/images/g_avengers_infinitywar_05_54868e20.jpeg?region=0%2C0%2C1200%2C560';
        document.body.style.backgroundImage = "url(" + url + ")";
    }

    if (rotation === 12) {
        url = 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/02/1452510174-movies-thanos-infinity-gauntlet-marvel-cinematic-universe.jpg';
        document.body.style.backgroundImage = "url(" + url + ")";
        document.body.style.backgroundSize = "1700px";
    }






}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function appendMessage (message) {
    const messageDiv = document.createElement('div');
    messageDiv.innerText = message;
    div3.append(messageDiv);
    div3.scrollTop = div3.scrollHeight;
}

function clickableGrid(rows, cols, callback, tblName, userId) {
    var i = 0;
    var grid = document.createElement('table');
    grid.setAttribute("id", userId + "tbl")
    grid.className = 'grid';
    grid.style = "color:black";
    //grid.style.float = "left";
    redTitle = grid.appendChild(document.createElement('th'));
    redTitle.style = "background:rgba(255, 0, 0, 0.6); color:white";
    redTitle.colSpan = 3;
    redTitle.innerHTML = userId;
    var span2 = redTitle.appendChild(document.createElement('span'));
    span2.setAttribute("id", userId + "span2");
    span2.style = "width:20px;height:20px";
    span2.style.display = "inline-block";
    span2.style.background = "black";
    if (nickname === "TCR") {span2.style.background = "green";}
    for (var r = 0; r < rows; ++r) {
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c = 0; c < cols; ++c) {
            var cell = tr.appendChild(document.createElement('td'));
            if (r === 0) {
                cell.innerHTML = c;
                cell.style.backgroundColor = 'rgba(222,184,135, 0.7)';
            } else {
                cell.innerHTML = 0;
            }

            cell.addEventListener('click', (function (el, r, c, i) {
                return function () {
                    callback(el, r, c, i);
                }
            })(cell, r, c, i), false);
        }
    }
    grid.rows[0].cells[0].innerHTML = "Round";
    grid.rows[0].cells[0].style.backgroundColor = "rgba(222,184,135, 0.7)";    
    grid.rows[1].cells[0].innerHTML = "Result";
    grid.rows[1].cells[0].style.backgroundColor = "rgba(222,184,135, 0.7)";  
    grid.rows[2].cells[0].innerHTML = "Penalties";
    grid.rows[2].cells[0].style.backgroundColor = "rgba(222,184,135, 0.7)";  
    return grid;
}

function createNewDiv() {
    var div = document.createElement("div");
    div.setAttribute("id", "botdiv");
    div.style.width = "750px";
    div.style.height = "300px";
    //div.style = "background:rgba(255, 255, 255, 0.5); color:black; overflow: auto;"
    div.style.background = "rgba(255, 255, 255, 0.5)";
    div.style.color = "black";
    div.style.overflow = "auto";
    div.style.overflowX = "hidden";
    //div.style.float = "left";
    div.style.marginLeft = "2%";
    //div.innerHTML = "div";
    return div;
}

const index = otherUsers.indexOf(nickname);
if (index > -1) {
    otherUsers.splice(index, 1);
}
//alert(otherUsers);

var grid = clickableGrid(3, 11, function (el, row, col, i) {
    console.log("You clicked on element:", el);
    console.log("You clicked on row:", row);
    console.log("You clicked on col:", col);
    console.log("You clicked on item #:", i);

    el.className = 'clicked';
    if (lastClicked) lastClicked.className = '';
    lastClicked = el;
    number = i

    /* if (i == 15){
        alert("play hit video")
    } */
}, "tbl1", nickname);

var grid2 = clickableGrid(3, 11, function (el, row, col, i) {
    console.log("You clicked on element:", el);
    console.log("You clicked on row:", row);
    console.log("You clicked on col:", col);
    console.log("You clicked on item #:", i);

    el.className = 'clicked';
    if (lastClicked) lastClicked.className = '';
    lastClicked = el;
    number = i

    /* if (i == 15){
        alert("play hit video")
    } */
}, "tbl2", otherUsers[0]);

var grid3 = clickableGrid(3, 11, function (el, row, col, i) {
    console.log("You clicked on element:", el);
    console.log("You clicked on row:", row);
    console.log("You clicked on col:", col);
    console.log("You clicked on item #:", i);

    el.className = 'clicked';
    if (lastClicked) lastClicked.className = '';
    lastClicked = el;
    number = i

    /* if (i == 15){
        alert("play hit video")
    } */
}, "tbl3", otherUsers[1]);

var grid4 = clickableGrid(3, 11, function (el, row, col, i) {
    console.log("You clicked on element:", el);
    console.log("You clicked on row:", row);
    console.log("You clicked on col:", col);
    console.log("You clicked on item #:", i);

    el.className = 'clicked';
    if (lastClicked) lastClicked.className = '';
    lastClicked = el;
    number = i

    /* if (i == 15){
        alert("play hit video")
    } */
}, "tbl4", otherUsers[2]);

var grid5 = clickableGrid(3, 11, function (el, row, col, i) {
    console.log("You clicked on element:", el);
    console.log("You clicked on row:", row);
    console.log("You clicked on col:", col);
    console.log("You clicked on item #:", i);

    el.className = 'clicked';
    if (lastClicked) lastClicked.className = '';
    lastClicked = el;
    number = i

    /* if (i == 15){
        alert("play hit video")
    } */
}, "tbl5", otherUsers[3]);

var grid6 = clickableGrid(3, 11, function (el, row, col, i) {
    console.log("You clicked on element:", el);
    console.log("You clicked on row:", row);
    console.log("You clicked on col:", col);
    console.log("You clicked on item #:", i);

    el.className = 'clicked';
    if (lastClicked) lastClicked.className = '';
    lastClicked = el;
    number = i

    /* if (i == 15){
        alert("play hit video")
    } */
}, "tbl6", otherUsers[4]);

if (nickname === "TCR") {
    var grid7 = clickableGrid(3, 11, function (el, row, col, i) {
        console.log("You clicked on element:", el);
        console.log("You clicked on row:", row);
        console.log("You clicked on col:", col);
        console.log("You clicked on item #:", i);

        el.className = 'clicked';
        if (lastClicked) lastClicked.className = '';
        lastClicked = el;
        number = i

        /* if (i == 15){
            alert("play hit video")
        } */
    }, "tbl7", otherUsers[5]);
}

document.body.appendChild(grid);
grid.style.marginLeft = "2.8%";
grid.style.float = "left";


//LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====
labelRes = document.createElement('h2');
//labelRes.setAttribute("id", "labelres");
labelRes.innerHTML = "Round 1 - Result:";
labelRes.style.width = "300px";
labelRes.style.color = "mediumblue";
labelRes.style.float = "left";
labelRes.style.marginLeft = "10px"
document.body.appendChild(labelRes);
//LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====

//INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====
var inputRes = document.createElement('input');
inputRes.className = "form-control input-lg";
inputRes.style.width = "7.8%";
inputRes.style.height = "48px";
inputRes.setAttribute("id", nickname + "inputres");
inputRes.setAttribute("type", "number");
inputRes.style.float = "left";
document.body.appendChild(inputRes);
//INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====

//BUTTON=====BUTTON=====BUTTON=====BUTTON=====BUTTON=====BUTTON=====BUTTON=====BUTTON=====BUTTON=====
var subBtn = document.createElement('button');

subBtn.className = "btn btn-secondary btn-lg";
subBtn.setAttribute("id", nickname + "subbtn");
subBtn.innerHTML = "Submit"
if (nickname === "TCR") {
    subBtn.disabled = true;
}
document.body.appendChild(subBtn);

//BUTTON=====BUTTON=====BUTTON=====BUTTON=====BUTTON=====BUTTON=====BUTTON=====BUTTON=====BUTTON=====

//LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====
labelPen = document.createElement('h2');
labelPen.innerHTML = "Penalty Points:";
labelPen.style.width = "300px";
labelPen.style.color = "mediumblue";
labelPen.style.float = "left";
labelPen.style.marginLeft = "10px"
document.body.appendChild(labelPen);
//LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====LABEL=====

//INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====
var inputPen = document.createElement('input');
inputPen.className = "form-control input-lg";
inputPen.style.width = "7.8%";
inputPen.style.height = "48px";
inputPen.setAttribute("id", nickname + "inputpen");
inputPen.setAttribute("type", "number");
inputPen.style.float = "left";
document.body.appendChild(inputPen);
//INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====INPUT=====

//BUTTON===LISTENER===BUTTON===LISTENER===BUTTON===LISTENER===BUTTON===LISTENER===BUTTON===LISTENER===
subBtn.addEventListener('click', function () {
    var result = document.getElementById(nickname + "inputres").value;
    if (result) { } else { result = 0; }
    var penalties = document.getElementById(nickname + "inputpen").value;
    if (penalties) { } else { penalties = 0; }
    sock.emit('submit', { nickname, result, penalties });
    //subBtn.disabled = true;
});
//BUTTON===LISTENER===BUTTON===LISTENER===BUTTON===LISTENER===BUTTON===LISTENER===BUTTON===LISTENER===

//EDIT=====BUTTON=====EDIT=====BUTTON=====EDIT=====BUTTON=====EDIT=====BUTTON=====EDIT=====BUTTON=====
if (nickname === "TCR") {
    var select = document.createElement("select");
    select.name = students;
    select.setAttribute("id", "studentslist");
    select.className = "form-control";
    select.style.width = "80px";
    for (const val of students) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
    var listLabel = document.createElement("label");
    listLabel.innerHTML = ""
    listLabel.htmlFor = students;
    document.body.appendChild(listLabel).appendChild(select);
    select.style.position = "absolute";
    select.style.top = "170px";
    select.style.right = "170px";


    var select2 = document.createElement("select");
    select2.name = students;
    select2.setAttribute("id", "roundslist");
    select2.className = "form-control";
    select2.style.width = "80px";
    for (const val of rounds) {
        var option = document.createElement("option");
        option.value = val;
        option.textContent = val;
        select2.appendChild(option);
    }
    var listLabel2 = document.createElement("label");
    listLabel2.innerHTML = ""
    listLabel2.htmlFor = rounds;
    document.body.appendChild(listLabel2).appendChild(select2);
    select2.style.position = "absolute";
    select2.style.top = "170px";
    select2.style.right = "250px";

    var editBtn = document.createElement('button');
    editBtn.className = "btn btn-warning btn-lg";
    editBtn.setAttribute("id", "editbtn");
    editBtn.innerHTML = "Edit";
    editBtn.style.position = "absolute";
    editBtn.style.top = "170px";
    editBtn.style.right = "100px";
    document.body.appendChild(editBtn);

    var nextrndBtn = document.createElement('button');
    nextrndBtn.className = "btn btn-success btn-lg";
    nextrndBtn.setAttribute("id", "nextrndbtn");
    nextrndBtn.innerHTML = "Next Round";
    nextrndBtn.style.position = "absolute";
    nextrndBtn.style.top = "230px";
    nextrndBtn.style.right = "100px";
    document.body.appendChild(nextrndBtn);
}

//EDIT=====BUTTON=====EDIT=====BUTTON=====EDIT=====BUTTON=====EDIT=====BUTTON=====EDIT=====BUTTON=====

//BUTTON===LISTENER===BUTTON===LISTENER===BUTTON===LISTENER===BUTTON===LISTENER===BUTTON===LISTENER===
if (nickname === "TCR") {
    editBtn.addEventListener('click', function () {
        var result = document.getElementById(nickname + "inputres").value;
        if (result) { } else { result = 0; }
        var penalties = document.getElementById(nickname + "inputpen").value;
        if (penalties) { } else { penalties = 0; }
        var round = document.getElementById("roundslist").value;
        if (round) { } else { round = 1; }
        var student = document.getElementById("studentslist").value;

        sock.emit('editresult', { student, result, penalties, round });
        //subBtn.disabled = true;
    });

    nextrndBtn.addEventListener('click', function () {

        sock.emit('nextround');
        //subBtn.disabled = true;
    });
}
//BUTTON===LISTENER===BUTTON===LISTENER===BUTTON===LISTENER===BUTTON===LISTENER===BUTTON===LISTENER===


var div0 = createNewDiv();
div0.style.clear = "both";
div0.style.width = "1000px";
div0.style.height = "5px";
div0.style.backgroundColor = "";
document.body.appendChild(div0);

//BOTTOM===DIV===BOTTOM===DIV===BOTTOM===DIV===BOTTOM===DIV===BOTTOM===DIV===BOTTOM===DIV===BOTTOM===DIV===
var div1 = createNewDiv();
div1.style.float = "left";


var bottomDiv = document.body.appendChild(div1);
bottomDiv.appendChild(grid2);
bottomDiv.appendChild(grid3);
bottomDiv.appendChild(grid4);
bottomDiv.appendChild(grid5);
bottomDiv.appendChild(grid6);

if (nickname === "TCR") {
    bottomDiv.appendChild(grid7);
}
//BOTTOM===DIV===BOTTOM===DIV===BOTTOM===DIV===BOTTOM===DIV===BOTTOM===DIV===BOTTOM===DIV===BOTTOM===DIV===


var div2 = createNewDiv();
div2.style.width = '450px';
div2.style.color = 'black';
//div2.innerHTML = 'div2';
var chatDiv = document.body.appendChild(div2);

var chatInput = document.createElement('input');
chatInput.className = "form-control";
chatInput.style.width = "350px";
chatInput.style.height = "48px";
chatInput.setAttribute("id", "chatinput");
chatInput.setAttribute("type", "text");
chatInput.style.display = "inline";
chatDiv.appendChild(chatInput);

var chatBtn = document.createElement('button');

chatBtn.className = "btn btn-secondary";
chatBtn.setAttribute("id", "chatBtn");
chatBtn.innerHTML = "Send";

chatDiv.appendChild(chatBtn);

var div3 = createNewDiv();
div3.style.width = '420px';
div3.style.height = '250px'
div3.style.color = 'black';
div3.style.background = 'rgba(236, 236, 236, 0.5)';
div3.setAttribute("id", "chatdiv");
chatDiv.appendChild(div3);

chatBtn.addEventListener('click', function () {
    var message = nickname + ': ';
    message += chatInput.value;
    sock.emit('chat-to-server', message);
    chatInput.value = '';
});

chatInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("chatBtn").click();
    }

});




//var createLine = document.createElement('hr');
//createLine.setAttribute("width", "500px");

//document.body.appendChild(grid2);
//document.body.appendChild(grid3);
//document.body.appendChild(grid4);
//document.body.appendChild(grid5);
