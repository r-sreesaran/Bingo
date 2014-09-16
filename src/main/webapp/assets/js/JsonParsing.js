/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var sessionId;
var sessionIds;
var position;
var data;
var currentPlay;
var jsonParsing= function(data) {
    
    data.type !== undefined ? typeOfEvent(data) : setJsonArray(data);
}

var typeOfEvent = function(dat) {
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
    if (type === "firstStart") {
        currentplay = dat.id;
    }

}

var setJsonArray = function(data) {
    sessionIds = data;
}


var nextplayer =  function(data) {
   var jsonObj = $.parseJSON(data);
   
}