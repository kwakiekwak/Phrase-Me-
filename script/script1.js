

function startGame() {

  document.turn = "red";

}

var el = document.getElementById('two');

var spinner = document.getElementById('two');
spinner.addEventListener('click', function () {
  if (spinner.style.backgroundColor == "") {
    spinner.style.backgroundColor = document.turn;

   /* generateTable();*/
    //nextPlayer is called in order to change colors
    nextPlayer();
    /*console.log(nextPlayer);*/
  }else if(spinner.style.backgroundColor == "blue") {
    spinner.style.backgroundColor = 'red';
  }
   else {
    spinner.style.backgroundColor = document.turn;
  }
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
  var array = ["just a minute","be on time please", "hold that thought"];
  var randomQ = Math.round(Math.random() * 2);

  if (randomQ === 0) {
    /*alert(array[0]);*/
    letterCheck(array[0]);
  } else if (randomQ === 1) {
    letterCheck(array[1]);
    /*alert(array[1]);*/
  } else if (randomQ === 2) {
    letterCheck(array[2]);
    /*alert(array[2]);*/
  }

}

var phrase = phraseGen();

////////////Writing a function that checks if the guessed letter is in
//////////// the phrase
function letterCheck(phrase) {
  console.log('hi');
  var newArray = [];
  var a = 65;
  var charArray = {};
  var lettera = "a";
  console.log(charArray);
  for (var i = 0; i<26; i++) {
    charArray[String.fromCharCode(a + i)] = String.fromCharCode(a + i);
    /*console.log(charArray);*/

  guessLetter(charArray);
  }
  console.log(newArray);
}

/*var checkLetter = letterCheck(phrase);
console.log(checkLetter);
*/
function guessLetter(string) {
///////!!!!!!! try to find out how to make objects turn into array before
//////////////// pushing into another function

  for (var i = 0; i<string.length; i++) {
    for(var j in string) {
      /*if (phrase.charAt(i).toLowerCase() in charArray.j) { */
        console.log(j);
        console.log(string);
        console.log(lettera);
     if (lettera in string.j) {
        newArray.push(string.j);
      }
    }
  }
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
