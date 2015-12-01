

function startGame() {


document.turn = "red";
document.blue = "blue";

player1.style.backgroundColor = document.turn;

}

var player1 = document.getElementById('playerOne');
var player2 = document.getElementById('playerTwo');
var spinner = document.getElementById('two');
var el = document.getElementById('two');

spinner.addEventListener('click', function () {

  inputLetter();
  if (player1.style.backgroundColor == "red") {  // was ""
    player1.style.backgroundColor = '';
    player2.style.backgroundColor = "blue"; // was document.turn
   /* generateTable();*/
    //nextPlayer is called in order to change colors
    //nextPlayer();
  }
  else if(player2.style.backgroundColor == "blue") { // was "blue"
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
    for (j=0; j<14; j++) {
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

function phraseGen() {
  var array = ["just a minuteaa","be on time pleaseaa", "hold that thougaaht"];
  var randomQ = Math.round(Math.random() * 2);

  if (randomQ === 0) {
    /*alert(array[0]);*/
    /*letterCheck(array[0]);*/
    guessLetter(array[0]);
  } else if (randomQ === 1) {
    /*letterCheck(array[1]);*/
    guessLetter(array[1]);
    /*alert(array[1]);*/
  } else if (randomQ === 2) {
    guessLetter(array[2]);

    /*letterCheck(array[2]);*/
    /*alert(array[2]);*/
  }
}

/*var phrase = phraseGen();*/

////////////Writing a function that generates an object properties of letters

function letterCheck() {
  console.log('hi');
  /*var newArray = [];*/
  var a = 65;
  var charArray = {};
  console.log(charArray);
  for (var i = 0; i<26; i++) {
    charArray[String.fromCharCode(a + i)] = String.fromCharCode(a + i);
    /*console.log(charArray);*/

  }
  /*guessLetter(charArray);*/
}

/*var checkLetter = letterCheck(phrase);
console.log(checkLetter);
*/
function guessLetter(string) {
///////!!!!!!! try to find out how to make objects turn into array before
//////////////// pushing into another function
  var newArray = [];
  var lettera = "a";
  console.log(string);

  for (var i = 0; i<string.length; i++) {
    for(var j = 0; j<string[i].length; j++) {
      if(string[i] === "a") {
        newArray.push(string[i]);
      }
    }
  }
  console.log("You have guessed " + newArray.length + " letters on the board");
  console.log(newArray);
  /*inputLetter(lettera);*/
}
      /*if (phrase.charAt(i).toLowerCase() in charArray.j) { */
        /*console.log(string.j);*/

///////////Making a function to let player guess//////////////
function inputLetter() {
  var letter = "a";
  var board = document.getElementsByTagName('td');
  console.log(letter);
  //*** if guessed letter is in phrase push into the td;
  var input = prompt('Please Guess a letter');

  if (input == letter) {
    phraseGen();
    console.log(board);

    board[1].style.backgroundColor = 'black';

  }
  var lowerInput = input.toLowerCase();


}









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
