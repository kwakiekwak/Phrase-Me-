// $( document.ready()
// start off jquery this or

/*$(function() {
  var values = [];

  var toSubmit = function() {
    var text = $('#guessBox').val();
    values.push(text);
    console.log(values);

  }*/



function startGame() {

document.turn = "red";
/*document.blue = "blue";*/

player1.style.backgroundColor = document.turn;
phraseGen();


}

var board = document.getElementsByTagName('td'); //second board
var player1 = document.getElementById('playerOne');
var player2 = document.getElementById('playerTwo');
var spinner = document.getElementById('guessButton');
var el = document.getElementById('two');
var point1 = 0;
var point2 = 0;
var currentPhrase = "";


/////////click button/////////////////////////////////

spinner.addEventListener('click', function () {

  /*letterCheck();*/
/*  console.log('hi');*/
  letterCheck(currentPhrase);
  /*console.log(currentPhrase);*/

  var text = document.getElementById('guessBox').value
  /*text.text = (text.text + ' after clicking')*/
  console.log(text);

  if (player1.style.backgroundColor == "red") {  // was ""
    player1.style.backgroundColor = "";
    player2.style.backgroundColor = "blue"; // was document.turn
   /* generateTable();*/
    //nextPlayer is called in order to change colors
    //nextPlayer();
  }
  else if (player2.style.backgroundColor == "blue") { // was "blue"
    player2.style.backgroundColor = ""; // was 'red'
    player1.style.backgroundColor = "red";
    /*nextPlayer();*/

  }
   /*else {
    console.log(document.turn);
    player1.style.backgroundColor = document.turn;
  }*/
})

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
//testing if random and points match

/*console.log(random);
console.log(points);*/
}

spinAway();

// getting the alphabets that are pushed as object properties as a: "a" etc
// 65 all caps 97 all lowercase

/*var a = 65;
var charArray = {};
for (var i = 0; i<26; i++)
    charArray[String.fromCharCode(a + i)] = String.fromCharCode(a + i);
console.log(charArray.A);
*/

    /*console.log(i);*/
    /*console.log(charArray);*/
    /*console.log(charArray[String.fromCharCode(a + i)]);*/
    /*console.log(String.fromCharCode(a+i));*/
    /*charArray[a];*/


/////////////////Working on a function that generates random phrases////////////

function phraseGen(array) {
    var array = ["just a minute", "be on time please", "hold that thought", "do you smell what the rock is cooking", "actions speak louder than words",
      "ball is in your court", "Barking up the wrong tree"];
    /*console.log(array.length);*/
    var random = Math.round(Math.random() * array.length - 1);

    for (var i=0; i<array.length; i++) {
      phraseLength(array[random]);
    }
  }


 /* for (var i=0; i<array.length; i++) {
  console.log(array[i]);

  }
}

/*var phrase = phraseGen();*/

////////////Writing a function that generates an object properties of letters

function getAlpha() {
  console.log('hi');
  /*var newArray = [];*/
  var a = 65;
  var charArray = {};
  console.log(charArray);
  for (var i = 0; i<26; i++) {
    charArray[String.fromCharCode(a + i)] = String.fromCharCode(a + i);
    /*console.log(charArray);*/

  }
  /*letterCheck(charArray);*/
}

/*var checkLetter = getAlpha(phrase);
console.log(checkLetter);
*/
function letterCheck(string) {
///////!!!!!!! try to find out how to make objects turn into array before
//////////////// pushing into another function
  /*console.log(string);*/
  var newArray = [];
  /*setTimeout(function(){*/

   /* var input = document.getElementById('guessBox')
  input.input = (input.input + ' after clicking')*/

    var input = prompt('Please Guess a letter');
    console.log(input);
    for (var i = 0; i<string.length; i++) {
    for (var j = 0; j<string[i].length; j++) {
      if (input === string[i]) {
        newArray.push(string[i]);
        board[i].innerHTML = string[i];
        board[i].style.fontFamily = "DejaVu Sans";
        board[i].style.fontWeight = "bold";
        board[i].style.fontSize = "42px";
        board[i].style.textAlign = "center";
        }

      }
    }

  /*}, 3000)*/
}
  /*console.log(input);*/


  /*console.log("You have guessed " + newArray.length + " letters on the board");*/
/*  console.log(newArray);
*/
  /*inputLetter(lettera);*/

      /*if (phrase.charAt(i).toLowerCase() in charArray.j) { */
        /*console.log(string.j);*/

///////////Making a function to let player guess//////////////
/*function inputLetter() {
  var letter = "a";
  var board = document.getElementsByTagName('td');
  console.log(letter);
  //*** if guessed letter is in phrase push into the td;

  if (input == letter) {
    phraseGen();
    console.log(board[1]);

    board[0].style.backgroundColor = 'black';
    board[13].style.backgroundColor = 'black';
    board[42].style.backgroundColor = 'black';
    board[55].style.backgroundColor = 'black';

  }
  var lowerInput = input.toLowerCase();


}
*/

///// Function that finds the length of the phrase then adds white
///// background for the length in the cells

function phraseLength(string) {
  //set the current phrase as a global var

  currentPhrase = string;
    /*if (i===0 || i===13 || i===42|| i===55)*/
  for (var i=0; i<string.length; i++) {
  /*console.log(string[i])*/
    if (string[i] === " ") {
      board[i].style.backgroundColor = '#66b8ff';
    }
    else {
      board[i].style.backgroundColor = 'white';
    }
  }
    /*console.log(string.length);
    console.log(board[i]);*/


}

// function to allow players to guess ///

/*document.getElementById('spin1').addEventListener('click', function() {
  var answer = prompt("Answer that Phrase!");
  if(answer === currentPhrase) {
    alert('You have won the game');
  } else {
    alert('Awww, maybe next time!');
  }
})
document.getElementById('spin2').addEventListener('click', function() {
  var answer = prompt("Answer that Phrase!");
  if(answer === currentPhrase) {
    alert('You have won the game');
  } else {
    alert('Awww, maybe next time!');
  }
})*/




//tried to make a function that only set borders for certain criteria
/*function setTableBorder () {
  for(var i=0; i<4; i++) {
    if (i==0 || i==3) {
      for (var j=0; j<14; j++) {
        if (j==0 || j==13) {
          document.getElementsByTagName('td')[0][0].setAttribute('border', 'none');
          document.getElementsByTagName('td')[0][13].setAttribute('border', 'none');
        }
      }

    } else {
      document.getElementsByTagName('td').setAttribute('border', 'none');
    }
  }
}*/



generateTable();
/*});*/  //from the jquery startup
