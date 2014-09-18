/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var constructSinglePeerInformationJson  = function(no){
var obj = new Object();
obj.type="currentPlay";
obj.id=no;
var jsonString= JSON.stringify(obj);
return obj;
}

var nextplay = function(currentid) {
    for each (var session in sessionIds ) {
      if(session.id === currentid) {
          var currentPos=  sessionIds.indexOf(session)
            constructSinglePeerInformationJson(currentPos == sessionIds.length-1?0:currentPos++) 
      }
    } 
}