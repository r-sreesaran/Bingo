/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var wsUri = "ws://" + document.location.host + document.location.pathname + "websocket";
console.log(wsUri);
var websocket = new WebSocket(wsUri);

websocket.onopen = function(json) {
   console.log(json.data);
}

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
    console.log(evt);
    console.log("received: " + evt.data);
    var type = JSON.parse(evt.data).type;
    if (type === "gridClick")
        populate(evt.data);
    if (type === "buttonClick")
        disableButtons(evt.data);


}

function onError(evt) {
    console.log(evt.data);
}

function onopen(json) {
 $.parseJSON(function (json) {
     
 });
}
