/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var sessionId;
var sessionIds;
var position;
var data;
function jsonParsing(data) {
    
    data.type !== undefined ? typeOfEvent(data) : setJsonArray(data);
}

function typeOfEvent(data) {
    var type = data.type;

    if (type === "gridClick") {
        populate(evt.data);
    }
    if (type === "buttonClick") {
        disableButtons(evt.data);
    }
    if (type === "Id Description") {
        sessionId = data.id;
        position = data.pos;
    }
    

}

function setJsonArray(data1) {
    data = data1
    console.log("condition 2");
    sessionIds = JSON.parse(data[--position]);
}