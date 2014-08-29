
$(document).ready(function() {
    var validate = new Array(25);
    var usedArray = new Array(25);
    
        for (var i = 0; i < 25; i++) {
            usedArray[i] = i;
            validate[i + 1] = false;
        }
        usedArray.sort(function() {
            return Math.random() - 0.5;
        });
        for (var i = 0; i < 25; i++) {
            var k = i + 1;
            $('#' + k).html(usedArray[i]);
        }
    
});

