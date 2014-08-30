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
var filledPosition = new Array(25);
var values = new Array(25);
$(document).ready(function() {
    for (var i = 1; i < 25; i++) {
        filledPosition[i] = 'false'
    }

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
            var position = $(this).attr('id');
            var json = JSON.stringify({
                "type": "gridClick",
                "value": value,
                "color": sendingColor,
                "peers": '0',
            });
            filledPosition[position] = 'true';
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
    recievedColor = JSON.parse(entry).color;
    var slotid = $.inArray(value, values);
    var slot = document.getElementById(slotid);
    filledPosition[slotid] = 'true';

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

function validateClaim() {
    var totalCount = 0;
    var count = 0;
    //This will count the maximum number of continous vertical combinations
    for (var i = 0, count = 0; i < 5; i++) {
        for (var j = (5 * i), count = 0; j < (5 * (i + 1)); j++) {
            if (filledPosition[j + 1] == 'true') {
                console.log(j + 1);
                count++;
            }
        }
        if (count == 5) {
            totalCount++;
        }

    }

    //This will count the maximum number of horizontal combinations
    for (var i = 1, count = 0; i <= 5; i++) {
        for (var j = i, count = 0; j <= (20) + i; j = j + 5) {
            if (filledPosition[j] == 'true') {
                count++;
            }
        }
        if (count == 5) {
            totalCount++;
        }

    }
    //This will check if the diagonals are complete
    for (var i = 1, count = 0; i <= 25; i = i + 6) {

        if (filledPosition[i] == 'true') {
            count++;
        }
    }
    if (count == 5) {
        totalCount++;
    }


    for (var i = 5, count = 0; i <= 21; i = i + 4) {
        if (filledPosition[i] == 'true') {
            count++;
        }
    }
    if (count == 5) {
        totalCount++;
    }

    if (totalCount == 5) {
        alert("you have won");
    }
}


