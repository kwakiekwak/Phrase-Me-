$(function() {

console.log(1);
generateTable();
phraseGen();


var player1 = document.getElementById('playerOne');
var player2 = document.getElementById('playerTwo');

var el = document.getElementById('two');
var point1 = 0;
var point2 = 0;
var currentPhrase = "";
document.turn = "red";
player1.style.backgroundColor = document.turn;



/////////click button/////////////////////////////////


//changes colors/players, nextPlayer is called in the click function
/*function nextPlayer() {

  if (document.turn == 'red') {
    document.turn = 'blue';
  } else {
    document.turn = 'red';
  }
}*/

/////////////////////// Creating the table of fortune board//////////////////

function generateTable() {
  console.log(5);
  //reference for body
  var main = document.getElementById('phrase');
  //creating table and tbody elements
  var tble = document.createElement("table");
  var tblebody = document.createElement("tbody");
  // sets border attributes
  tble.setAttribute('border', '1');

  var i;
  var j;

  //creating cells
  for (i=0; i<4; i++) {
    //creates table row
    var row = document.createElement('tr');
    for (j=1; j<14; j++) {
      var cell = document.createElement('td');
      row.appendChild(cell);
    setTableBorder(i, j);
      }
    tblebody.appendChild(row);
    }

  // add the tblebody to the table
  tble.appendChild(tblebody);
  // append the table to the body
  main.appendChild(tble);
}


function setTableBorder (row, column) {
  if (row===0&&column===13) {
    $('td').addClass('test');
  }

}

//////////////////Randomizing number to $amount(points)////////////////
function spinAway() {

  var points = 0;
  var random = Math.round(Math.random() * 50)
  if (random < 2) {
    points = 1000;
  } else if (random < 4) {
    points = 900;
  } else if (random < 7) {
    points = 800;
  } else if (random < 11) {
    points = 700;
  } else if (random < 17) {
    points = 600;
  } else if (random < 26) {
    points = 500;
  } else if (random < 33) {
    points = 400;
  } else if (random < 39) {
    points = 300;
  } else if (random < 47) {
    points = 200
  } else if (random <=50) {
    points = 100;
  }
}

spinAway();

/////////////////Working on a function that generates random phrases////////////

function phraseGen() {
    var array = ["just a minute", "be on time please", "hold that thought", "do you smell what the rock is cooking", "actions speak louder than words",
      "ball is in your court", "barking up the wrong tree"];
    console.log(2);
    var random = Math.round(Math.random() * array.length - 1);

    for (var i=0; i<array.length; i++) {
    }
      phraseLength(array[random]);

  }

////////////Writing a function that generates an object properties of letters

function getAlpha() {
  console.log('hi');
  /*var newArray = [];*/
  var a = 65;
  var charArray = {};
  console.log(charArray);
  for (var i = 0; i<26; i++) {
    charArray[String.fromCharCode(a + i)] = String.fromCharCode(a + i);
  }
}

function letterCheck(string) {
///////!!!!!!! try to find out how to make objects turn into array before
//////////////// pushing into another function
  console.log(string);
  console.log(6);
  var newArray = [];
  var spinner = document.getElementById('guessButton');
  var board = document.getElementsByTagName('td');
  var input;
  var result = false;


  spinner.addEventListener('click', function () {
    input = document.getElementById('guessBox');

    /*text.text = (text.text + ' after clicking')*/
    if (player1.style.backgroundColor == "red") {  // was ""
      player1.style.backgroundColor = "";
      player2.style.backgroundColor = "blue"; // was document.turn
    }
    else if (player2.style.backgroundColor == "blue") { // was "blue"
      player2.style.backgroundColor = ""; // was 'red'
      player1.style.backgroundColor = "red";
    }

  for (var i = 0; i<string.length; i++) {
    for (var j = 0; j<string[i].length; j++) {
      if (input.value === string[i]) {
        console.log("after the click");
        newArray.push(string[i]);
        board[i].innerHTML = string[i];
        board[i].style.fontFamily = "DejaVu Sans";
        board[i].style.fontWeight = "bold";
        board[i].style.fontSize = "42px";
        board[i].style.textAlign = "center";
      } if (input.value === string) {
          newArray.push(string[i]);
          board[i].innerHTML = string[i];
          board[i].style.fontFamily = "DejaVu Sans";
          board[i].style.fontWeight = "bold";
          board[i].style.fontSize = "42px";
          board[i].style.textAlign = "center";
          board[i].style.color = 'blue';

          result = true;
      }

    }
  }

  if (result) {
    if (player1.style.backgroundColor === 'red') {
      console.log("player2 has won!");
      alert("player2 has won!");

    } else {
      console.log("player1 has won!");
      alert("player1 has won!");
    }
    console.log('hi');
  }
//////////////////guessing the phrase and get winner////////////////////

     /* if(input.value === currentPhrase) {
        alert('You have won the game');
      } else {
        alert('Awww, maybe next time!');
      }
*/
 /* $('#guessBox')[0].value = '';*/

  input.value = '';

  })
}

//////////////keeping score//////////////////////////////


function phraseLength(string) {
  var board = document.getElementsByTagName('td');
  console.log(3);
  //set the current phrase as a global var
  currentPhrase = string;
  console.log(string);
  for (var i=0; i<string.length; i++) {
  /*console.log(string[i])*/
    if (string[i] === " ") {
      board[i].style.backgroundColor = '#66b8ff';
    }
    else {
      board[i].style.backgroundColor = 'white';
    }
  }
letterCheck(string);
}
/*generateTable();*/
});
