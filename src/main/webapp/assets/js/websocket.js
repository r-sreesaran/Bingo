/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var wsUri = "ws://" + document.location.host + document.location.pathname + "websocket";
console.log(wsUri);
var websocket = new WebSocket(wsUri);



websocket.onmessage = function(evt) {
    onMessage(evt)
};

websocket.onerror = function(evt) {
    onError(evt)
};

function sendText(json) {
    console.log("sending text: " + json);
    websocket.send(json);
}

function onMessage(evt) {
    var data = JSON.parse(evt.data);
    console.log(data);
    jsonParsing(data);
}

function onError(evt) {
    console.log(evt.data);
}


