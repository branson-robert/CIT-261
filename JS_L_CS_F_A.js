function showOnDisplay() {
   document.getElementById("while").style.display = 'block'; 
}

function numberOfBoys() {
   var userNumber = document.getElementById("userInput").value;
   const pop = 10;
   let  boys = 0;
  while (boys < userNumber) {
	   boys++;
	}
   
   document.getElementById("result").innerHTML = "There's room for " + (pop - boys) + " more boys.";
}


function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
//  return numberSelected;
  
  output.innerHTML = "There's room for " + (numberSelected) + " more boys.";
}

//var btn = document.getElementById('btn');
//btn.addEventListener('click', function() {
//  alert('Number of options selected: ' + howMany(document.sportsForm.sportTypes));
 // console.log('Number of options selected: ' + howMany(document.sportsForm.sportTypes));
//});




function showCars() {
   document.getElementById("cars").style.display = 'block';
}

function carNames(clickedButton) {
	var chevyCarNames = ['Spark', 'Sonic', 'Cruze', 'Malibu', 'Impala', 'Volt', 'Bolt EV', 'Camaro', 'Corvette'];
	var cadillacCarNames = ['ATS', 'CTS', 'XTS', 'CT6',];
	var buickCarNames = ['Regal', 'LaCrosse', 'Cascada'];
	var userChoice;
	var result = 'List of car models:<br><br>';
	
	switch (clickedButton) {
		case 'chevyButton':
			userChoice = chevyCarNames;
			break;
		case 'cadillacButton':
			userChoice = cadillacCarNames;
			break;
		case 'buickButton':
			userChoice = buickCarNames;
			break;
	
	}
	
	for (var i = 0; i < userChoice.length; i++) {
		result += userChoice[i] + "<br>";
	}
	
	document.getElementById("choiceOfMake").innerHTML = result;
}
