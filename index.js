$(document).ready(function() {
var a = true;
var b = true;
var c = true;
var d = true;
var e = true;
var f = true;
var g = true;
var h = true;
var i = true;
var j = true;
var k = true;
var l = true;
var m = true;
var n = true;
var o = true;
var p = true;
var q = true;
var r = true;
var s = true;
var t = true;
var u = true;
var v = true;
var w = true;
var x = true;
var y = true;
var z = true;
var word;
var words = ['pantry', 'beast', 'computer', 'spaghetti', 'library'];
var wordselected = words[Math.floor(Math.random()*5)];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
       'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
       't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lives = 10;
if(wordselected == "pantry"){
  word=['p', 'a', 'n', 't', 'r', 'y'];
  i
}else if(wordselected == "beast"){
  word=['b', 'e', 'a', 's', 't'];
}else if(wordselected == "computer"){
   word=['c', 'o', 'm', 'p', 'u', 't', 'e', 'r'];
}else if(wordselected == "spaghetti"){
  word=['s', 'p', 'a', 'g', 'h', 'e', 't', 't', 'i'];
}else if(wordselected == "library"){
  word=['l', 'i', 'b', 'r', 'a', 'r', 'y'];
}
function loselives(){
  lives - 1;
}
if(lives == 0){
  alert("Game Over");
}

$( "#amountlives" ).append("Lives: " + lives);

// $( "#message-board" ).append(`<li class='message-box'><span class='name'> `+ name+ `: </span>`+message+`</li>`);
//   });
//
// });

//$(".flex-container").append(`<div id='item1' class='flex-item'><h3 id='item10'><center>`+ alphabet[0] +`</center></h3></div>`);
// for(var i = 0; i < alphabet.length; i++ ) {
//     console.log('<div class="div">' + alphabet[i])
// }
  for (var i = 0; i < word.length; i++) {
    $(".flex-container").append(`<div id = `+word[i]+` class='flex-item'><h3 id='item10'><center>`+ word[i] +`</center></h3></div>`);
  }
  $(".buttonclass").click(function(){
     loselives();
  });
if(a === true){
  $( "#buttona" ).click(function() {
    $( "#a" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>A</center></h3>`);
    a = false;
  });
}
  $( "#buttonb" ).click(function() {
    $( "#b" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>B</center></h3>`);
    b = false;
  });
}
  $( "#buttonc" ).click(function() {
    $( "#c" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>C</center></h3>`);
    c = false;
  });
}
  $( "#buttond" ).click(function() {
    $( "#d" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>D</center></h3>`);
    d = false;
  });
}
  $( "#buttone" ).click(function() {
    $( "#e" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>E</center></h3>`);
    e = false;
  });
}
  $( "#buttonf" ).click(function() {
    $( "#f" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>F</center></h3>`);
    a = false;
  });
}
  $( "#buttong" ).click(function() {
    $( "#g" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>G</center></h3>`);
    a = false;
  });
}
  $( "#buttonh" ).click(function() {
    $( "#h" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>H</center></h3>`);
    a = false;
  });
}
  $( "#buttoni" ).click(function() {
    $( "#i" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>I</center></h3>`);
    a = false;
  });
}
  $( "#buttonj" ).click(function() {
    $( "#j" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>J</center></h3>`);
    a = false;
  });
}
  $( "#buttonk" ).click(function() {
    $( "#k" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>K</center></h3>`);
    a = false;
  });
}
  $( "#buttonl" ).click(function() {
    $( "#l" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>L</center></h3>`);
    a = false;
  });
}
  $( "#buttonm" ).click(function() {
    $( "#m" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>M</center></h3>`);
    a = false;
  });
}
  $( "#buttonn" ).click(function() {
    $( "#n" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>N</center></h3>`);
    a = false;
  });
}
  $( "#buttono" ).click(function() {
    $( "#o" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>O</center></h3>`);
    a = false;
  });
}
  $( "#buttonp" ).click(function() {
    $( "#p" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>P</center></h3>`);
    a = false;
  });
}
  $( "#buttonq" ).click(function() {
    $( "#q" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>Q</center></h3>`);
    a = false;
  });
}
  $( "#buttonr" ).click(function() {
    $( "#r" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>R</center></h3>`);
    a = false;
  });
}
  $( "#buttons" ).click(function() {
    $( "#s" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>S</center></h3>`);
    a = false;
  });
}
  $( "#buttont" ).click(function() {
    $( "#t" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>T</center></h3>`);
    a = false;
  });
}
  $( "#buttonu" ).click(function() {
    $( "#u" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>U</center></h3>`);
    a = false;
  });
}
  $( "#buttonv" ).click(function() {
    $( "#v" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>V</center></h3>`);
    a = false;
  });
}
  $( "#buttonw" ).click(function() {
    $( "#w" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>W</center></h3>`);
    a = false;
  });
}
  $( "#buttonx" ).click(function() {
    $( "#x" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>X</center></h3>`);
    a = false;
  });
}
  $( "#buttony" ).click(function() {
    $( "#y" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>Y</center></h3>`);
    a = false;
  });
}
  $( "#buttonz" ).click(function() {
    $( "#z" ).css( "color", "black" );
    $(".wordsused").append(`<h3><center>Z</center></h3>`);
    a = false;
  });
}


});
