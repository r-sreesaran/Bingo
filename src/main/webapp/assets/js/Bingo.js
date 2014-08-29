/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * 1)Giving only a single chance to the user
 * 2)Making it fool proof
 * 
 */
var disabled;
var sendingColor;
var recievedColor;

var values = new Array(25);
$(document).ready(function() {
    var i = 1;
    $(this).find('td').each(function() {
        values[i] = $(this).html();
        i++;
    });
    $('td').click(function() {

        if (disabled) {
            var toggle = this.style;
            $(this).css('background-color', sendingColor);
            $(this).attr('value', 'true');
            toggle.color = "#fff";
            var value = $(this).html();
            var json = JSON.stringify({
                "type": "gridClick",
                "value": value,
                "color": sendingColor,
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
            sendingColor = id;
            disabled = true;
            sendText(data);
        }
    })
});
//This is used for triggering the click event 
function populate(entry) {
    var value = JSON.parse(entry).value;
    var colour = JSON.parse(entry).color;
    var slotid = $.inArray(value, values);
    var slot = document.getElementById(slotid);
    $("#" + slotid).css('background-color', recievedColor);
    $("#" + slotid).attr('value', 'true');
    slot.style.color = "#fff";
}

// This will disabled the selected button that was selected
function disableButtons(data) {
    var id = JSON.parse(data).value;
    $("#" + id).attr('disabled', 'disabled');
    recievedColor = $("#" + id).html();
}



