$(document).ready( function(){

    (function ( $ ) {
        //use strict;
        $.fn.mygame = function(size) {
            //console.log('hello');
            var gameObject = this.attr('id');
            var blockSize = size;
            var boardSize = blockSize * 4;
            //return this;

            var makeGrid = function() {
                initGrid = [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ];

                for (var row = 0; row < initGrid.length; ++row) {
                    //inner loop is controlled by the expression grades[rows].length
                    for (var col = 0; col < initGrid[row].length; ++col) {
                        console.log(initGrid[row][col]);
                    }
                }
                console.table(initGrid);
            }
            makeGrid();

            var isDisponible = function () {
                var index = 1;
                var list = Array();
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 4; j++) {
                        if (initGrid[i][j] == 0) {
                            list.push(index);
                        }
                        index++;
                    }
                }
                return list;
            }

            var printGrid = function() {
            }

            var init = function() {
                $('#'+gameObject).append("<div></div>").css({'width':boardSize+'px', 'height':boardSize+'px', 'background-color': 'blue'});
            }

            var genDivs = function() {
                console.log(gameObject);
                var e = document.getElementById(gameObject); // whatever you want to append the rows to:
                while(e.firstChild){
                    e.removeChild(e.firstChild);
                }
                console.log(e);
                for(var i = 0; i < 4; i++){
                    var row = document.createElement("div");
                    row.className = "row";
                    for(var x = 1; x <= 4; x++){
                        var cell = document.createElement("div");
                        cell.className = "gridsquare";
                        cell.setAttribute("id",(i * 4) + x );
                        row.appendChild(cell);
                    }
                    e.appendChild(row);
                }

                $(".gridsquare").css({
                    'width':blockSize+'px',
                    'height':blockSize+'px',
                    'line-height':blockSize+'px',
                    'background-color': 'black',
                    //'padding': '10px',
                    'border': '2px solid white',
                    'font-size': '70px',
                    'text-align': 'center',
                    'box-sizing' : 'border-box',
                    'float' : 'left'
                });

                var index = 1;
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 4; j++) {
                        if (initGrid[i][j] != 0) {
                            if (initGrid[i][j] == 2)
                                document.getElementById(index).style.backgroundColor = "blue";
                            if (initGrid[i][j] == 4)
                                document.getElementById(index).style.backgroundColor = "green";
                            if (initGrid[i][j] == 8)
                                document.getElementById(index).style.backgroundColor = "yellow";
                            if (initGrid[i][j] == 16)
                                document.getElementById(index).style.backgroundColor = "DarkGray";
                            if (initGrid[i][j] == 32)
                                document.getElementById(index).style.backgroundColor = "DarkOrange";
                            if (initGrid[i][j] == 64)
                                document.getElementById(index).style.backgroundColor = "DarkTurquoise";
                            if (initGrid[i][j] == 128)
                                document.getElementById(index).style.backgroundColor = "DeepPink";
                            if (initGrid[i][j] == 256)
                                document.getElementById(index).style.backgroundColor = "Khaki";
                            if (initGrid[i][j] == 512)
                                document.getElementById(index).style.backgroundColor = "Magenta";
                            if (initGrid[i][j] == 1024)
                                document.getElementById(index).style.backgroundColor = "MediumSlateBlue";
                            if (initGrid[i][j] == 2048)
                                document.getElementById(index).style.backgroundColor = "Olive";
                            document.getElementById(index).innerHTML = initGrid[i][j];
                        }
                        index++;
                    }
                }
                $("#"+gameObject).innerText = e.innerHTML;



            }

            var randDiv = function (){
                // make position sensitive to size and document's width
                var dispo = isDisponible();
                console.log(dispo);
                randId = Math.floor(Math.random() * dispo.length);
                console.log(randId);
                
                randIdBis = Math.floor(Math.random() * 2);
                var alea;
                if (randIdBis == 1)
                    alea = 2;
                else
                    alea = 4;

                var index = 1;
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 4; j++) {
                        if (index == dispo[randId]) {
                            initGrid[i][j] = alea;
                        }
                        index++;
                    }
                }

            };
            init();
            randDiv();
            randDiv();
            genDivs();
            var movetoTop = function () {
                for (var cols = 0; cols < 4; cols++) {
                    var dispo = 0;
                    for (var lines = 0; lines < 4; lines++) {
                        if (initGrid[lines][cols] != 0) {
                            if (lines == dispo) {
                                if ((lines > 0) && (initGrid[dispo - 1][cols] == initGrid[lines][cols])) {
                                    initGrid[dispo - 1][cols] = (initGrid[dispo - 1][cols]) * 2;
                                    initGrid[lines][cols] = 0;
                                } else {
                                    dispo++;
                                }
                            }
                            else {
                                if ((dispo != 0) && (initGrid[lines][cols] == initGrid[dispo - 1][cols])) {
                                    initGrid[dispo - 1][cols] = (initGrid[dispo - 1][cols]) * 2;
                                    initGrid[lines][cols] = 0;
                                } else {
                                    initGrid[dispo][cols] = initGrid[lines][cols];
                                    initGrid[lines][cols] = 0;
                                    dispo++;
                                }
                            }
                        }
                    }
                }

            };

            var movetoDown = function () {
                for (var cols = 0; cols < 4; cols++) {
                    var dispo = 3;
                    for (var lines = 3; lines >= 0; lines--) {
                        if (initGrid[lines][cols] != 0) {
                            if (lines == dispo) {
                                if ((lines < 3) && (initGrid[dispo + 1][cols] == initGrid[lines][cols])) {
                                    initGrid[dispo + 1][cols] = (initGrid[dispo + 1][cols]) * 2;
                                    initGrid[lines][cols] = 0;
                                } else {
                                    dispo--;
                                }
                            }
                            else {
                                if ((dispo != 3) && (initGrid[lines][cols] == initGrid[dispo + 1][cols])) {
                                    initGrid[dispo + 1][cols] = (initGrid[dispo + 1][cols]) * 2;
                                    initGrid[lines][cols] = 0;
                                } else {
                                    initGrid[dispo][cols] = initGrid[lines][cols];
                                    initGrid[lines][cols] = 0;
                                    dispo--;
                                }
                            }
                        }
                    }
                }
            };

            var movetoLeft = function () {
                for (var lines = 0; lines < 4; lines++) {
                    var dispo = 0;
                    for (var cols = 0; cols < 4; cols++) {
                        if (initGrid[lines][cols] != 0) {
                            if (cols == dispo) {
                                if ((cols > 0) && (initGrid[lines][dispo - 1] == initGrid[lines][cols])) {
                                    initGrid[lines][dispo - 1] = (initGrid[lines][dispo - 1]) * 2;
                                    initGrid[lines][cols] = 0;
                                } else {
                                    dispo++;
                                }
                            }
                            else {
                                if ((dispo != 0) && (initGrid[lines][dispo - 1] == initGrid[lines][cols])) {
                                    initGrid[lines][dispo - 1] = (initGrid[lines][dispo - 1]) * 2;
                                    initGrid[lines][cols] = 0;
                                } else {
                                    initGrid[lines][dispo] = initGrid[lines][cols];
                                    initGrid[lines][cols] = 0;
                                    dispo++;
                                }
                            }
                        }
                    }
                }

            };

            var movetoRight = function () {
                for (var lines = 0; lines < 4; lines++) {
                    var dispo = 3;
                    for (var cols = 3; cols >= 0; cols--) {
                        if (initGrid[lines][cols] != 0) {
                            if (cols == dispo) {
                                if ((cols < 3) && (initGrid[lines][dispo + 1] == initGrid[lines][cols])) {
                                    initGrid[lines][dispo + 1] = (initGrid[lines][dispo + 1]) * 2;
                                    initGrid[lines][cols] = 0;
                                } else {
                                    dispo--;
                                }
                            }
                            else {
                                if ((dispo != 3) && (initGrid[lines][dispo + 1] == initGrid[lines][cols])) {
                                    initGrid[lines][dispo + 1] = (initGrid[lines][dispo + 1]) * 2;
                                    initGrid[lines][cols] = 0;
                                } else {
                                    initGrid[lines][dispo] = initGrid[lines][cols];
                                    initGrid[lines][cols] = 0;
                                    dispo--;
                                }
                            }
                        }
                    }
                }

            };
            
            //while (1) {
                $(document).keypress(function (e){
                    if (e.keyCode == 37)
                        movetoLeft();
                    if (e.keyCode == 38)
                        movetoTop();
                    if (e.keyCode == 39)
                        movetoRight();
                    if (e.keyCode == 40)
                        movetoDown();
                    genDivs();
                    //console.table(initGrid);
                    randDiv();
                    genDivs();
            });
            //}

        };
    })( jQuery );
    $('#board').mygame(200);
});