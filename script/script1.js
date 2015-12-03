$(function() {

console.log(1);
generateTable();
phraseGen();

var player1 = document.getElementById('playerOne');
var player2 = document.getElementById('playerTwo');
var spin;
/*var el = document.getElementById('two');*/
var point1 = 0;
var point2 = 0;

var currentPhrase = "";
document.turn = "red";
player1.style.backgroundColor = document.turn;
///////////making an object constructor//////////////////

function Scoreboard(player) {
  this.sum = 0;
  currentPoint = spinAway();
/*  spin = spinAway();*/
  /*this.pointsFromFunction = pointsFromFunction;*/
  this.player = player;
  this.addPoints = function() {
    /*var pointsFromFunction = spinAway();*/
    /*console.log(pointsFromFunction);*/
    if(document.turn == "red") {
      this.sum += redPoints;
      point1 = this.sum;
      $('#scoreL').html(this.sum);

  } else {
      this.sum += bluePoints;
      point2 = this.sum;
      $('#scoreR').html(this.sum);
  }
 }
}

var dreamteam1 = new Scoreboard("red");
var dreamteam2 = new Scoreboard("blue");



// setting points
function scoringPoints(num, player) {

}

console.log(point1);
console.log(point2);
//////////////////Randomizing number to $amount(points)////////////////
function spinAway() {

  /*var points = 0;*/
  var random = Math.round(Math.random() * 70)
  if (random < 1) {
    points = 1000;
  } else if (random < 2) {
    points = 950;
  } else if (random < 4) {
    points = 900;
  } else if (random < 6) {
    points = 850;
  } else if (random < 8) {
    points = 800;
  } else if (random < 10) {
    points = 750;
  } else if (random < 12) {
    points = 700;
  } else if (random < 16) {
    points = 650;
  } else if (random < 20) {
    points = 600;
  } else if (random < 24) {
    points = 550;
  } else if (random < 30) {
    points = 500;
  } else if (random < 34) {
    points = 450;
  } else if (random < 38) {
    points = 400;
  } else if (random < 42) {
    points = 350;
  } else if (random < 48) {
    points = 300;
  } else if (random < 54) {
    points = 250;
  } else if (random < 60) {
    points = 200;
  } else if (random < 65) {
    points = 150;
  } else if (random <= 70) {
    points = 100;
  }
 //added this
 if (document.turn == 'red') {
  redPoints = points;
 } else {
  bluePoints = points;
 }

/* spinAway();*/
}

console.log(redPoints);
/*spinAway();*/


/////////click button/////////////////////////////////


//changes colors/players, nextPlayer is called in the click function
function nextPlayer() {

  if (document.turn == 'red') {
    document.turn = 'blue';
  } else {
    document.turn = 'red';
  }
}

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

///////!!!!!!! try to find out how to make objects turn into array before
//////////////// pushing into another function////////////////
function letterCheck(string) {
  console.log(string);
  console.log(6);

  var count = 0;
  /*var newArray = [];*/
  var spinner = document.getElementById('guessButton');
  var board = document.getElementsByTagName('td');
  var input;
  var result = false;


  spinner.addEventListener('click', function () {
    input = document.getElementById('guessBox');

    /*text.text = (text.text + ' after clicking')*/
    if (player1.style.backgroundColor == document.turn) {  // was ""
      player1.style.backgroundColor = "";
      player2.style.backgroundColor = "blue"; // was document.turn
    }
    else if (player2.style.backgroundColor == document.turn) { // was "blue"
      player2.style.backgroundColor = ""; // was 'red'
      player1.style.backgroundColor = "red";

    }
  spinAway();
  for (var i = 0; i<string.length; i++) {
    //didn't need this
    /*for (var j = 0; j<string[i].length; j++) {*/
      if (input.value === string[i]) {
        /*console.log("after the click");*/
        /*newArray.push(string[i]);*/
        board[i].innerHTML = string[i];
        board[i].style.fontFamily = "DejaVu Sans";
        board[i].style.fontWeight = "bold";
        board[i].style.fontSize = "42px";
        board[i].style.textAlign = "center";
        board[i].style.backgroundColor = "orange";

    //if a letter is already guessed try again/////
    //* it prevents player to answer but then the game doesnt run again//

        /*if (board[i].innerHTML === input.value) {
          return "try again";
          console.log('hi');
        }*/
        /*console.log(dreamteam1.addPoints());*/
        if(document.turn === "red") {
          /*console.log(spinAway);*/
          dreamteam1.addPoints();
          /*console.log(dreamteam1.sum);*/
          /*console.log(spinAway);*/
        } else {
          dreamteam2.addPoints();
          // console.log(dreamteam2.sum);
        /*}*/

      } if (input.value === string) {
          /*newArray.push(string[i]);*/

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
  console.log(dreamteam1.sum);
  console.log(dreamteam2.sum);
    nextPlayer();

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
  input.value = '';
  })
}

//////////////keeping score//////////////////////////////


function phraseLength(string) {
  var board = document.getElementsByTagName('td');
  console.log(3);
  //set the current phrase as a global var
  currentPhrase = string;
  /*console.log(string);*/
  for (var i=0; i<string.length; i++) {
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
