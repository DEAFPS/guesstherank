// When the user scrolls the page, execute myFunction
	window.onscroll = function() {myFunction()};

	// Get the navbar
	var navbar = document.getElementById("navbar");

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop;
	
	var element = document.getElementById("my-element");

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
		} else {
			navbar.classList.remove("sticky");
		}
	}
	
	// Button to text field
	function fillTextField1(text) {
		document.getElementById("q1a").value = text;
		q1a = document.getElementById("q1a").value;	
	}
	function fillTextField2(text) {
		document.getElementById("q2a").value = text;
		q2a = document.getElementById("q2a").value;
	}
	function fillTextField3(text) {
		document.getElementById("q3a").value = text;
		q3a = document.getElementById("q3a").value;
	}
	function fillTextField4(text) {
		document.getElementById("q4a").value = text;
		q4a = document.getElementById("q4a").value;
	}
	function fillTextField5(text) {
		document.getElementById("q5a").value = text;
		q5a = document.getElementById("q5a").value;
	}
	function fillTextField6(text) {
		document.getElementById("q6a").value = text;
		q6a = document.getElementById("q6a").value;
	}
	function fillTextField7(text) {
		document.getElementById("q7a").value = text;
		q7a = document.getElementById("q7a").value;
	}
	function fillTextField8(text) {
		document.getElementById("q8a").value = text;
		q8a = document.getElementById("q8a").value;
	}
	function fillTextField9(text) {
		document.getElementById("q9a").value = text;
		q9a = document.getElementById("q9a").value;
	}
	function fillTextField10(text) {
		document.getElementById("q10a").value = text;
		q10a = document.getElementById("q10a").value;
	}
	
	// Bonus Button to text field
	function fillTextFieldB1(text) {
		document.getElementById("bq1a").value = text;
		bq1a = document.getElementById("bq1a").value;	
	}
	function fillTextFieldB2(text) {
		document.getElementById("bq2a").value = text;
		bq2a = document.getElementById("bq2a").value;
	}
	function fillTextFieldB3(text) {
		document.getElementById("bq3a").value = text;
		bq3a = document.getElementById("bq3a").value;
	}
	function fillTextFieldB4(text) {
		document.getElementById("bq4a").value = text;
		bq4a = document.getElementById("bq4a").value;
	}
	function fillTextFieldB5(text) {
		document.getElementById("bq5a").value = text;
		bq5a = document.getElementById("bq5a").value;
	}
	function fillTextFieldB6(text) {
		document.getElementById("bq6a").value = text;
		bq6a = document.getElementById("bq6a").value;
	}
	function fillTextFieldB7(text) {
		document.getElementById("bq7a").value = text;
		bq7a = document.getElementById("bq7a").value;
	}
	function fillTextFieldB8(text) {
		document.getElementById("bq8a").value = text;
		bq8a = document.getElementById("bq8a").value;
	}
	function fillTextFieldB9(text) {
		document.getElementById("bq9a").value = text;
		bq9a = document.getElementById("bq9a").value;
	}
	function fillTextFieldB10(text) {
		document.getElementById("bq10a").value = text;
		bq10a = document.getElementById("bq10a").value;
	}

	// Keep track of the score
	let score = 0;
	let correctOnes = 0;

	// Correct Answers Iron, Bronze, Silver, Gold, Platinum, Diamond, Ascendant, Immortal, and Radiant.
	const possibleAnswers = ['Null', 'Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ascendant', 'Immortal', 'Radiant', 'Null'];
	
	
		//1
		var nearRCorrectAnswer1 = 'Null';
		var nearLCorrectAnswer1 = 'Null';
		const correctAnswer1 = 'Immortal';
		
		//2
		var nearRCorrectAnswer2 = 'Null';
		var nearLCorrectAnswer2 = 'Null';
		const correctAnswer2 = 'Ascendant';
		
		//3
		var nearRCorrectAnswer3 = 'Null';
		var nearLCorrectAnswer3 = 'Null';
		const correctAnswer3 = 'Platinum';
		
		//4
		var nearRCorrectAnswer4 = 'Null';
		var nearLCorrectAnswer4 = 'Null';
		const correctAnswer4 = 'Gold';
		
		//5
		var nearRCorrectAnswer5 = 'Null';
		var nearLCorrectAnswer5 = 'Null';
		const correctAnswer5 = 'Diamond';
		
		//6
		var nearRCorrectAnswer6 = 'Null';
		var nearLCorrectAnswer6 = 'Null';
		const correctAnswer6 = 'Ascendant';
		
		//7
		var nearRCorrectAnswer7 = 'Null';
		var nearLCorrectAnswer7 = 'Null';
		const correctAnswer7 = 'Diamond';
		
		//8
		var nearRCorrectAnswer8 = 'Null';
		var nearLCorrectAnswer8 = 'Null';
		const correctAnswer8 = 'Immortal';
		
		//9
		var nearRCorrectAnswer9 = 'Null';
		var nearLCorrectAnswer9 = 'Null';
		const correctAnswer9 = 'Silver';
		
		//10
		var nearRCorrectAnswer10 = 'Null';
		var nearLCorrectAnswer10 = 'Null';
		const correctAnswer10 = 'Diamond';


// Near Correct automation
// Near Correct 1
function setNearRCorrectAnswer1(correctAnswer1) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer1);
  var nextIndex = (currentIndex + 1) % possibleAnswers.length;
  nearRCorrectAnswer1 = possibleAnswers[nextIndex];
}

function setNearLCorrectAnswer1(correctAnswer1) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer1);
  var nextIndex = (currentIndex - 1) % possibleAnswers.length;
  nearLCorrectAnswer1 = possibleAnswers[nextIndex];
}


// Near Correct 2
function setNearRCorrectAnswer2(correctAnswer2) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer2);
  var nextIndex = (currentIndex + 1) % possibleAnswers.length;
  nearRCorrectAnswer2 = possibleAnswers[nextIndex];
}

function setNearLCorrectAnswer2(correctAnswer2) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer2);
  var nextIndex = (currentIndex - 1) % possibleAnswers.length;
  nearLCorrectAnswer2 = possibleAnswers[nextIndex];
}


// Near Correct 3
function setNearRCorrectAnswer3(correctAnswer3) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer3);
  var nextIndex = (currentIndex + 1) % possibleAnswers.length;
  nearRCorrectAnswer3 = possibleAnswers[nextIndex];
}

function setNearLCorrectAnswer3(correctAnswer3) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer3);
  var nextIndex = (currentIndex - 1) % possibleAnswers.length;
  nearLCorrectAnswer3 = possibleAnswers[nextIndex];
}


// Near Correct 4
function setNearRCorrectAnswer4(correctAnswer4) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer4);
  var nextIndex = (currentIndex + 1) % possibleAnswers.length;
  nearRCorrectAnswer4 = possibleAnswers[nextIndex];
}

function setNearLCorrectAnswer4(correctAnswer4) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer4);
  var nextIndex = (currentIndex - 1) % possibleAnswers.length;
  nearLCorrectAnswer4 = possibleAnswers[nextIndex];
}


// Near Correct 5
function setNearRCorrectAnswer5(correctAnswer5) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer5);
  var nextIndex = (currentIndex + 1) % possibleAnswers.length;
  nearRCorrectAnswer5 = possibleAnswers[nextIndex];
}

function setNearLCorrectAnswer5(correctAnswer5) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer5);
  var nextIndex = (currentIndex - 1) % possibleAnswers.length;
  nearLCorrectAnswer5 = possibleAnswers[nextIndex];
}


// Near Correct 6
function setNearRCorrectAnswer6(correctAnswer6) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer6);
  var nextIndex = (currentIndex + 1) % possibleAnswers.length;
  nearRCorrectAnswer6 = possibleAnswers[nextIndex];
}

function setNearLCorrectAnswer6(correctAnswer6) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer6);
  var nextIndex = (currentIndex - 1) % possibleAnswers.length;
  nearLCorrectAnswer6 = possibleAnswers[nextIndex];
}


// Near Correct 7
function setNearRCorrectAnswer7(correctAnswer7) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer7);
  var nextIndex = (currentIndex + 1) % possibleAnswers.length;
  nearRCorrectAnswer7 = possibleAnswers[nextIndex];
}

function setNearLCorrectAnswer7(correctAnswer7) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer7);
  var nextIndex = (currentIndex - 1) % possibleAnswers.length;
  nearLCorrectAnswer7 = possibleAnswers[nextIndex];
}


// Near Correct 8
function setNearRCorrectAnswer8(correctAnswer8) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer8);
  var nextIndex = (currentIndex + 1) % possibleAnswers.length;
  nearRCorrectAnswer8 = possibleAnswers[nextIndex];
}

function setNearLCorrectAnswer8(correctAnswer8) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer8);
  var nextIndex = (currentIndex - 1) % possibleAnswers.length;
  nearLCorrectAnswer8 = possibleAnswers[nextIndex];
}


// Near Correct 9
function setNearRCorrectAnswer9(correctAnswer9) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer9);
  var nextIndex = (currentIndex + 1) % possibleAnswers.length;
  nearRCorrectAnswer9 = possibleAnswers[nextIndex];
}

function setNearLCorrectAnswer9(correctAnswer9) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer9);
  var nextIndex = (currentIndex - 1) % possibleAnswers.length;
  nearLCorrectAnswer9 = possibleAnswers[nextIndex];
}


// Near Correct 10
function setNearRCorrectAnswer10(correctAnswer10) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer10);
  var nextIndex = (currentIndex + 1) % possibleAnswers.length;
  nearRCorrectAnswer10 = possibleAnswers[nextIndex];
}

function setNearLCorrectAnswer10(correctAnswer10) {
  var currentIndex = possibleAnswers.indexOf(correctAnswer10);
  var nextIndex = (currentIndex - 1) % possibleAnswers.length;
  nearLCorrectAnswer10 = possibleAnswers[nextIndex];
}








// Rank Answer Check logic
// Answer 1
function checkAnswer1() {
  if (q1a === correctAnswer1) {
    //If Correct
    score = score + 10;
    correctOnes = correctOnes + 1;
    document.getElementById("q1r").innerHTML = "Richtig!";
    document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
  } else {
    // check nearly right
    if (q1a === nearRCorrectAnswer1) {
      score = score + 5;
      document.getElementById("q1r").innerHTML =
        "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer1 + "</span>";
      document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
    } else {
      if (q1a === nearLCorrectAnswer1) {
        score = score + 5;
        document.getElementById("q1r").innerHTML =
          "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer1 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      } else {
        // If Wrong
        document.getElementById("q1r").innerHTML =
          "Falsch! Der richtige Rang ist: <span class=red>" + correctAnswer1 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      }
    }
  }
}
	
	
	
	
	
// Answer 2
function checkAnswer2() {
  if (q2a === correctAnswer2) {
    //If Correct
    score = score + 10;
    correctOnes = correctOnes + 1;
    document.getElementById("q2r").innerHTML = "Richtig!";
    document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
  } else {
    // check nearly right
    if (q2a === nearRCorrectAnswer2) {
      score = score + 5;
      document.getElementById("q2r").innerHTML =
        "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer2 + "</span>";
      document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
    } else {
      if (q2a === nearLCorrectAnswer2) {
        score = score + 5;
        document.getElementById("q2r").innerHTML =
          "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer2 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      } else {
        // If Wrong
        document.getElementById("q2r").innerHTML =
          "Falsch! Der richtige Rang ist: <span class=red>" + correctAnswer2 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      }
    }
  }
}
	
	
	
	
	
// Answer 3
function checkAnswer3() {
  if (q3a === correctAnswer3) {
    //If Correct
    score = score + 10;
    correctOnes = correctOnes + 1;
    document.getElementById("q3r").innerHTML = "Richtig!";
    document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
  } else {
    // check nearly right
    if (q3a === nearRCorrectAnswer3) {
      score = score + 5;
      document.getElementById("q3r").innerHTML =
        "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer3 + "</span>";
      document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
    } else {
      if (q3a === nearLCorrectAnswer3) {
        score = score + 5;
        document.getElementById("q3r").innerHTML =
          "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer3 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      } else {
        // If Wrong
        document.getElementById("q3r").innerHTML =
          "Falsch! Der richtige Rang ist: <span class=red>" + correctAnswer3 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      }
    }
  }
}
	
	
	
	
	
// Answer 4
function checkAnswer4() {
  if (q4a === correctAnswer4) {
    //If Correct
    score = score + 10;
    correctOnes = correctOnes + 1;
    document.getElementById("q4r").innerHTML = "Richtig!";
    document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
  } else {
    // check nearly right
    if (q4a === nearRCorrectAnswer4) {
      score = score + 5;
      document.getElementById("q4r").innerHTML =
        "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer4 + "</span>";
      document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
    } else {
      if (q4a === nearLCorrectAnswer4) {
        score = score + 5;
        document.getElementById("q4r").innerHTML =
          "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer4 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      } else {
        // If Wrong
        document.getElementById("q4r").innerHTML =
          "Falsch! Der richtige Rang ist: <span class=red>" + correctAnswer4 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      }
    }
  }
}
	
	
	
	
	
// Answer 5
function checkAnswer5() {
  if (q5a === correctAnswer5) {
    //If Correct
    score = score + 10;
    correctOnes = correctOnes + 1;
    document.getElementById("q5r").innerHTML = "Richtig!";
    document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
  } else {
    // check nearly right
    if (q5a === nearRCorrectAnswer5) {
      score = score + 5;
      document.getElementById("q5r").innerHTML =
        "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer5 + "</span>";
      document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
    } else {
      if (q5a === nearLCorrectAnswer5) {
        score = score + 5;
        document.getElementById("q5r").innerHTML =
          "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer5 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      } else {
        // If Wrong
        document.getElementById("q5r").innerHTML =
          "Falsch! Der richtige Rang ist: <span class=red>" + correctAnswer5 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      }
    }
  }
}
	
	
	
	
	
// Answer 6
function checkAnswer6() {
  if (q6a === correctAnswer6) {
    //If Correct
    score = score + 10;
    correctOnes = correctOnes + 1;
    document.getElementById("q6r").innerHTML = "Richtig!";
    document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
  } else {
    // check nearly right
    if (q6a === nearRCorrectAnswer6) {
      score = score + 5;
      document.getElementById("q6r").innerHTML =
        "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer6 + "</span>";
      document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
    } else {
      if (q6a === nearLCorrectAnswer6) {
        score = score + 5;
        document.getElementById("q6r").innerHTML =
          "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer6 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      } else {
        // If Wrong
        document.getElementById("q6r").innerHTML =
          "Falsch! Der richtige Rang ist: <span class=red>" + correctAnswer6 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      }
    }
  }
}
	
	
	
	
	
// Answer 7
function checkAnswer7() {
  if (q7a === correctAnswer7) {
    //If Correct
    score = score + 10;
    correctOnes = correctOnes + 1;
    document.getElementById("q7r").innerHTML = "Richtig!";
    document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
  } else {
    // check nearly right
    if (q7a === nearRCorrectAnswer7) {
      score = score + 5;
      document.getElementById("q7r").innerHTML =
        "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer7 + "</span>";
      document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
    } else {
      if (q7a === nearLCorrectAnswer7) {
        score = score + 5;
        document.getElementById("q7r").innerHTML =
          "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer7 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      } else {
        // If Wrong
        document.getElementById("q7r").innerHTML =
          "Falsch! Der richtige Rang ist: <span class=red>" + correctAnswer7 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      }
    }
  }
}
	
	
	
	
	
// Answer 8
function checkAnswer8() {
  if (q8a === correctAnswer8) {
    //If Correct
    score = score + 10;
    correctOnes = correctOnes + 1;
    document.getElementById("q8r").innerHTML = "Richtig!";
    document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
  } else {
    // check nearly right
    if (q8a === nearRCorrectAnswer8) {
      score = score + 5;
      document.getElementById("q8r").innerHTML =
        "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer8 + "</span>";
      document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
    } else {
      if (q8a === nearLCorrectAnswer8) {
        score = score + 5;
        document.getElementById("q8r").innerHTML =
          "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer8 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      } else {
        // If Wrong
        document.getElementById("q8r").innerHTML =
          "Falsch! Der richtige Rang ist: <span class=red>" + correctAnswer8 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      }
    }
  }
}
	
	
	
	
	
// Answer 9
function checkAnswer9() {
  if (q9a === correctAnswer9) {
    //If Correct
    score = score + 10;
    correctOnes = correctOnes + 1;
    document.getElementById("q9r").innerHTML = "Richtig!";
    document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
  } else {
    // check nearly right
    if (q9a === nearRCorrectAnswer9) {
      score = score + 5;
      document.getElementById("q9r").innerHTML =
        "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer9 + "</span>";
      document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
    } else {
      if (q9a === nearLCorrectAnswer9) {
        score = score + 5;
        document.getElementById("q9r").innerHTML =
          "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer9 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      } else {
        // If Wrong
        document.getElementById("q9r").innerHTML =
          "Falsch! Der richtige Rang ist: <span class=red>" + correctAnswer9 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      }
    }
  }
}
	
// Answer 10
function checkAnswer10() {
  if (q10a === correctAnswer10) {
    //If Correct
    score = score + 10;
    correctOnes = correctOnes + 1;
    document.getElementById("q10r").innerHTML = "Richtig!";
    document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
  } else {
    // check nearly right
    if (q10a === nearRCorrectAnswer10) {
      score = score + 5;
      document.getElementById("q10r").innerHTML =
        "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer10 + "</span>";
      document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
    } else {
      if (q10a === nearLCorrectAnswer10) {
        score = score + 5;
        document.getElementById("q10r").innerHTML =
          "Fast Richtig! Der richtige Rang ist: <span class=red>" + correctAnswer10 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      } else {
        // If Wrong
        document.getElementById("q10r").innerHTML =
          "Falsch! Der richtige Rang ist: <span class=red>" + correctAnswer10 + "</span>";
        document.getElementById("score").innerHTML = score;
 document.getElementById("correctOnes").innerHTML = correctOnes;
      }
    }
  }
}