/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * 1)created a function which generate the click action 
 * 2)function to handle the incoming click events
 * 
 * 3)Game Logic 
 * 4)Differentiate various users 
 * 5)
 */
var disabled;
var disabled1 = true;
var color;
var color1;
$(document).ready(function() {
    var position;
    $('td').click(function() {

        if (disabled) {
            var toggle = this.style;
            $(this).css('background-color', color);
            $(this).attr('value', 'true');
            toggle.color = "#fff";
            var position = $(this).attr('id');
            var json = JSON.stringify({
                "type": "gridClick",
                "position": position,
                "color": color,
            });
            sendText(json);
        }
    });
    $(".color").click(function() {
        if (!disabled) {
            var id = $(this).attr('id');
            $(this).attr('disabled', 'disabled')
            var data = JSON.stringify({
                "type": "buttonClick",
                "value": id
            });
            color = id;
            disabled = true;
            sendText(data);
        }
    })
});
//This is used for triggering the click event 
function populate(entry) {
    var position = JSON.parse(entry).position;
    var slotid = position;
    var colour = JSON.parse(entry).color;
    var slot = document.getElementById(slotid);
    $("#" + slotid).css('background-color', color1);
    $("#" + slotid).attr('value', 'true');
    slot.style.color = "#fff";
}

// This will disabled the selected button that was selected
function disableButtons(data) {
    var id = JSON.parse(data).value;
    $("#"+id).attr('disabled', 'disabled');
    color1 = $("#"+id).html();
}
var values = new Array(5);
// checks whether the player has won the game or not 



