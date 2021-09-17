

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

data = [{ message: "Hello User! ", createdAt: '2021-09-14T13:23:02.298Z', sender: 'agent', _id: 1 },
{ message: 'Hi ', createdAt: '2021-09-14T13:23:02.298Z', sender: 'user', _id: 2 },
{ message: 'How are you doing today?', createdAt: '2021-09-14T13:23:02.298Z', sender: 'agent', _id: 3 },
{ message: 'I am good, how about you?', createdAt: '2021-09-14T13:23:02.298Z', sender: 'user', _id: 4 },
{ message: 'I am good, thanks for asking', createdAt: '2021-09-14T13:23:02.298Z', sender: 'agent', _id: 5 }]

function getdatabyserver() {
    return data;
}

var messages = getdatabyserver();

for (var i = 0; i < messages.length; i++) {
    messages[i].createdAt = new Date(messages[i].createdAt)
    messages[i].timeAgo = timeSince(messages[i].createdAt)
}

function constructor() {
        var messages = getdatabyserver();
        for (var i = 0; i < messages.length; i++) {
            if (messages[i].sender == "agent") {
                var msgHere = document.getElementById('msghere');
                var msg = document.createElement('section');
                msg.id = "client-msg";
                msg.className = "msg-container";
                var msgDiv = document.createElement('div');
                msgDiv.className = "dp";
                msg.appendChild(msgDiv);
                var msgDiv2 = document.createElement('div');
                msgDiv2.className = "msg";
                var msgTxt = document.createElement('p');
                msgTxt.innerText = messages[i].message;
                msgDiv2.appendChild(msgTxt);
                var time = document.createElement('p');
                time.className="ct";
                time.innerText = messages[i].timeAgo;
                msg.appendChild(msgDiv2);
                msgDiv2.appendChild(time);
                msgHere.appendChild(msg);


            }

            else {
                var msgHere = document.getElementById('msghere');
                var msg = document.createElement('section');
                msg.id = "user-msg";
                msg.className = "msg-container";
                var msgDiv = document.createElement('div');
                msgDiv.className = "dp";
                msg.appendChild(msgDiv);
                var msgDiv2 = document.createElement('div');
                msgDiv2.className = "msgus";
                var msgTxt = document.createElement('p');
                msgTxt.innerText = messages[i].message;
                msgDiv2.appendChild(msgTxt);
                msg.appendChild(msgDiv2);
                var time = document.createElement('p');
                time.className="ut";
                time.innerText = messages[i].timeAgo;
                msgDiv2.appendChild(time);
                msgHere.appendChild(msg);
            }
        }
    }

constructor();




let textbox = document.getElementById("umsg");
let button = document.getElementById("send");
var msgHere = document.getElementById('msghere');


button.addEventListener("click", function () {
    if (textbox.value != '') {
        var msgObj = { message: textbox.value, createdAt: new Date(), sender: 'user', _id: data.length + 1, timeAgo: '0 min ago' }
        var msg = document.createElement('section');
        msg.id = "user-msg";
        msg.className = "msg-container";
        var msgDiv = document.createElement('div');
        msgDiv.className = "dp";
        msg.appendChild(msgDiv);
        var msgDiv2 = document.createElement('div');
        msgDiv2.className = "msgus";
        var msgTxt = document.createElement('p');
        msgTxt.innerText = textbox.value;
        msgDiv2.appendChild(msgTxt);
        var time = document.createElement('p');
        time.className="ut";
        var date = new Date();
        time.innerText = timeSince(date);
        msg.appendChild(msgDiv2);
        msgDiv2.appendChild(time);
        msgHere.appendChild(msg);
        textbox.value = "";
        data.push(msgObj)
    }
});