$(document).ready( function(){

	(function ( $ ) {
	//use strict;
	$.fn.mygame = function(size) {
		console.log('hello');
		var gameObject = this.attr('id');
		var blockSize = size;
		var boardSize = blockSize * 4;
		//return this;

    var makeGrid = function() {
      initGrid = [[0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]];
      for (var row = 0; row < initGrid.length; ++row) {
    //inner loop is controlled by the expression grades[rows].length
    for (var col = 0; col < initGrid[row].length; ++col) {
      console.log(initGrid[row][col]);
    }
  }
  console.table(initGrid);

}

makeGrid();

var printGrid = function() {

}




var init = function() {
 $('#'+gameObject).append("<div></div>").css({'width':boardSize+'px', 'height':boardSize+'px', 'background-color': 'blue'});

}

var genDivs = function(){
 console.log(gameObject);
      		var e = document.getElementById(gameObject); // whatever you want to append the rows to: 
      		console.log(e);
      		for(var i = 0; i < 4; i++){ 
      			var row = document.createElement("div"); 
      			row.className = "row"; 
      			for(var x = 1; x <= 4; x++){ 
      				var cell = document.createElement("div");
      				//console.log($(this));
      				//console.log(cell);
      				//$(this).css({'height':blockSize, 'width':blockSize, 'background-color': 'white'}); 
      				cell.className = "gridsquare"; 
      				//cell.innerText = (i * 4) + x;
              //cell.idName = (i * 4) + x + "Tile";
              cell.setAttribute("id",(i * 4) + x );
              row.appendChild(cell); 
            } 
            e.appendChild(row); 
          } 
          $(".gridsquare").css({
            'width':blockSize+'px',
            'height':blockSize+'px',
            'background-color': 'red',
          //'padding': '10px',
          'border': '2px solid white',
          'box-sizing' : 'border-box',
          'float' : 'left'
        });
          $("#"+gameObject).innerText = e.innerHTML;

        }

        var randDiv = function (){
    // vary size for fun
    //var divsize = ((Math.random()*100) + 50).toFixed();
    //console.log("in");
    var divsize = blockSize;
    //console.log(divsize);
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    $newdiv = $('<div/>').css({
      'width':divsize+'px',
      'height':divsize+'px',
      'background-color': color,
      'border': '2px solid white',
      'box-sizing' : 'border-box'
    });

    // make position sensitive to size and document's width
    var posx = $(document).width();
    console.log(posx);
    var posy = $(document).height();
    console.log(posy);
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    console.log(posx);
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
    console.log(posy);


    randId = Math.floor(Math.random() * 17);
    $newdiv.appendTo( $("#"+randId) ).fadeIn(100).delay(1000).fadeOut(500, function(){
      $(this).remove();
      
    });

  };




  init();
  genDivs();
  randDiv(); 

};


})( jQuery );

$('#board').mygame(200);

//console.log("before");
//$("#test").mygame().append("<div>Appended</div>");
//$("#test").mygame().append("<div>Appended</div>").css({'width':boardSize, 'height':boardSize, 'background-color': 'blue'});
//$("#test").mygame().append("<div width=" + boardSize +" height=" + boardSize +">Appended</div>");
//console.log("after");
});


