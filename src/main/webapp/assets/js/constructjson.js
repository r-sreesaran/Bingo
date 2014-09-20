/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var constructSinglePeerInformationJson  = function(id){
 
var data = JSON.stringify({
                "type": "currentPlay",
                "id": id
            });
return data;

}

var nextplay = function(currentid) {
   for(var count = 0 ; count < sessionIds.length;count++) {
      if( $.parseJSON(sessionIds[count]).id === currentid) {
           var pos = (count == sessionIds.length-1?0:count+1);
          console.log(pos);
          
            return constructSinglePeerInformationJson($.parseJSON(sessionIds[pos]).id);
       }
   }
}