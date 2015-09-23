$(document).ready(function(){
    var circleIcon = '<i class="fa fa-circle-o fa-2x"></i>';
    var crossIcon = '<i class="fa fa-times fa-2x"></i>';

    var userIcon = circleIcon;
    var cpuIcon = crossIcon;

    var cornersMiddleIds = [1, 3, 5, 7, 9];
    var winningCombos = [[1, 5, 9], [3, 5, 7], [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9]];
    var availableNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var userIndex = [];
    var cpuIndex = [];

    var cpuWins = 0;
    var draws = 0;

    var wonState = false;

    Array.prototype.del = function(val){
        if(availableNums.contains(val)){
            availableNums.splice(availableNums.indexOf(val), 1);
        }
    }

    Array.prototype.contains = function(val){
        return this.indexOf(val) !== -1;
    }

    cpuInit();

    function cpuInit(){
        var cornersOrMiddle = cornersMiddleIds[Math.floor(Math.random() * cornersMiddleIds.length)];
        switch (cornersOrMiddle){
            case 1: $('#one').html(cpuIcon);    cpuIndex.push(1);  availableNums.del(1); break;
            case 3: $('#three').html(cpuIcon);  cpuIndex.push(3);  availableNums.del(3); break;
            case 5: $('#five').html(cpuIcon);   cpuIndex.push(5);  availableNums.del(5); break;
            case 7: $('#seven').html(cpuIcon);  cpuIndex.push(7);  availableNums.del(7); break;
            case 9: $('#nine').html(cpuIcon);   cpuIndex.push(9);  availableNums.del(9); break;
            default:    console.log('error');   break;
        }
    }

    var counter = 0;

    $('#one').click(function(){
        userChooses(1);
        $(this).html(userIcon);
    });

    $('#two').click(function(){
        userChooses(2);
        $(this).html(userIcon);
    });

    $('#three').click(function(){
        userChooses(3);
        $(this).html(userIcon);
    });

    $('#four').click(function(){
        userChooses(4);
        $(this).html(userIcon);
    });

    $('#five').click(function(){
        userChooses(5);
        $(this).html(userIcon);
    });

    $('#six').click(function(){
        userChooses(6);
        $(this).html(userIcon);
    });

    $('#seven').click(function(){
        userChooses(7);
        $(this).html(userIcon);
    });

    $('#eight').click(function(){
        userChooses(8);
        $(this).html(userIcon);
    });

    $('#nine').click(function(){
        userChooses(9);
        $(this).html(userIcon);
    });

    function userChooses(val){
        if(!userIndex.contains(val) && !cpuIndex.contains(val)) {
            userIndex.push(val);
            availableNums.del(val);
            cpuChoosesBasedOnUserChoiceOf(val);
            checkIfWon();
        }
    }

    function cpuSelects(num){
        if(cpuIndex.indexOf(num) === -1 && userIndex.indexOf(num) === -1){
            switch (num) {
                case 1:
                    $('#one').html(cpuIcon);
                    cpuIndex.push(1);
                    availableNums.del(1);
                    break;
                case 2:
                    $('#two').html(cpuIcon);
                    cpuIndex.push(2);
                    availableNums.del(2);
                    break;
                case 3:
                    $('#three').html(cpuIcon);
                    cpuIndex.push(3);
                    availableNums.del(3);
                    break;
                case 4:
                    $('#four').html(cpuIcon);
                    cpuIndex.push(4);
                    availableNums.del(4);
                    break;
                case 5:
                    $('#five').html(cpuIcon);
                    cpuIndex.push(5);
                    availableNums.del(5);
                    break;
                case 6:
                    $('#six').html(cpuIcon);
                    cpuIndex.push(6);
                    availableNums.del(6);
                    break;
                case 7:
                    $('#seven').html(cpuIcon);
                    cpuIndex.push(7);
                    availableNums.del(7);
                    break;
                case 8:
                    $('#eight').html(cpuIcon);
                    cpuIndex.push(8);
                    availableNums.del(8);
                    break;
                case 9:
                    $('#nine').html(cpuIcon);
                    cpuIndex.push(9);
                    availableNums.del(9);
                    break;
            }
        }
    }

    var completeAttempt = function(arr){
        for(var i = 0; i < winningCombos.length; i++){
            if(arr.contains(winningCombos[i][0]) && arr.contains(winningCombos[i][1])){
                cpuSelects(winningCombos[i][2]);

            } else if(arr.contains(winningCombos[i][1]) && arr.contains(winningCombos[i][2])){
                cpuSelects(winningCombos[i][0]);

            } else if(arr.contains(winningCombos[i][0]) && arr.contains(winningCombos[i][2])){
                cpuSelects(winningCombos[i][1]);
            }
        }
    };

    var blockAttempt = function(arr){
        for(var i = 0; i < winningCombos.length; i++){
            if(arr.contains(winningCombos[i][0]) && arr.contains(winningCombos[i][1])){
                    cpuSelects(winningCombos[i][2]);


            } else if(arr.contains(winningCombos[i][1]) && arr.contains(winningCombos[i][2])){
                    cpuSelects(winningCombos[i][0]);


            } else if(arr.contains(winningCombos[i][0]) && arr.contains(winningCombos[i][2])){
                    cpuSelects(winningCombos[i][1]);
            }
        }
    };

    function winBlockRand(){
        var len = availableNums.length;
        completeAttempt(cpuIndex);
        if(len === availableNums.length){
            console.log('cpu tried to win and now will block user');
            blockAttempt(userIndex);
            if(len === availableNums.length){
                console.log('cpu could not block user, so is choosing itself');
                cpuSelects(availableNums[Math.floor(Math.random() * availableNums.length)]);
            }
        }
        counter++;
    }

    function cpuChoosesBasedOnUserChoiceOf(userVal){
        console.log(counter);

        if(counter === 4){
            winBlockRand();
        }

        if(counter === 3){
            winBlockRand();
        }

        if(counter === 2){
            winBlockRand();
        }

        if(counter === 1){
            winBlockRand();
        }

        if(counter === 0) {
            // ROUND 1: Cpu chose the middle
            if (cpuIndex.contains(5)) {
                console.log('cpuIndex contains 5');
                switch (userVal) {
                    case 1:
                        cpuSelects(9);
                        counter++;
                        break;
                    case 3:
                        cpuSelects(7);
                        counter++;
                        break;
                    case 7:
                        cpuSelects(3);
                        counter++;
                        break;
                    case 9:
                        cpuSelects(1);
                        counter++;
                        break;
                    default:
                        cpuSelects(9);
                        counter++;
                        break;
                }
            } else if(userVal === 5){
            // ROUND 1: Cpu chose a corner and I just chose middle
                if(cpuIndex.contains(1)){
                    cpuSelects(9);
                } else if(cpuIndex.contains(3)){
                    cpuSelects(7);
                } else if(cpuIndex.contains(7)){
                    cpuSelects(3);
                } else if(cpuIndex.contains(9)){
                    cpuSelects(1);
                }
            // I mistakenly did not choose middle
            } else {
                cpuSelects(5);
            }
            counter++;
        }
    }

    function resetBoard(){
        cpuIndex = [];
        $('td').html('');
        availableNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        counter = 0;
        userIndex = [];
        wonState = false;
        cpuInit();
    }

    function isInUserArray(element){
        return userIndex.indexOf(element) !== -1;
    }

    function isInCpuArray(element){
        return cpuIndex.indexOf(element) !== -1;
    }

    function checkIfWon(){
        console.log('available nums: ' + availableNums);
        console.log('user has: ' + userIndex);
        console.log('cpu has: ' + cpuIndex);
        for(var i = 0; i < winningCombos.length; i++){
            if(winningCombos[i].every(isInUserArray)){
                alert('You won. Well done for doing the impossible!');
            } else if(winningCombos[i].every(isInCpuArray)){
                custom_alert('CPU wins!');
                wonState = true;
                cpuWins++;
                $('#cpuWins').html(cpuWins.toString());
                break;
            }
        }
        if(availableNums.length === 0 && !wonState){
            custom_alert('Game drawn!');
            draws++;
            $('#draws').html(draws.toString());
        }
    }

    function custom_alert(output_msg) {

        $("<div></div>").html(output_msg).dialog({
            height: 150,
            width: 200,
            resizable: false,
            modal: true,
            position: { my: "top", at: "top", of: window },
            buttons: [
                {
                    text: "Ok",
                    click: function () {
                        $(this).dialog("close");
                        resetBoard();
                    }
                }
            ]
        });
    }
});