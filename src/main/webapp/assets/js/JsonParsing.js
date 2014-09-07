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

function typeOfEvent(dat) {
    var type = dat.type;
     if (type === "gridClick") {
        populate(dat);
    }
    if (type === "buttonClick") {
        disableButtons(dat);
    }
    if (type === "Id Description") {
        sessionId = dat.id;
        position = dat.pos;
    }
    

}

function setJsonArray(data) {
    sessionIds = data;
}
