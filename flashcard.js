// dependency for inquirer npm package
var inquirer = require("inquirer");
var partTxt;
//var delTxt;
function basicCard(front, back){
	this.front = front;
	this.back = back;
} // close basicCard()

function clozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
} // close clozeCard
	clozeCard.prototype.partial = function(){
		console.log(partTxt);
	}; // close partial
	clozeCard.prototype.clozeDeletion = function(){
		console.log(this.cloze);
	}; // close clozeDeletion
	clozeCard.prototype.fullText = function(){
		console.log(this.text);
	}; // close partial()

inquirer.prompt([

  // Here we create a basic text prompt.
  /*
  {
    type: "input",
    message: "What is front of your card?",
    name: "front"
  },
  */
  {
    type: "list",
    message: "What kind of flash card do you want?",
    choices: ["Basic", "Cloze"],
    name: "cardType"
  },
  {
    type: "list",
    message: "Choose a topic",
    choices: ["History", "Science"],
    name: "topic"
  }
  /*
  // Here we create a basic text prompt.
  {
    type: "input",
    message: "What is the back of your card?",
    name: "back"
  }
*/


// Once we are done with all the questions... "then" we do stuff with the answers
// In this case, we store all of the answers into a "user" object that inquirer makes for us.
]).then(function(answers) {
	var cardType = answers.cardType;
	var topic = answers.topic
	/*
	var newCard = new basicCard(
        answers.front,
        answers.back);
     */  
      // printInfo method is run to show that the newguy object was successfully created and filled
      //console.log(newCard);
      //console.log(newCard.front);
      //console.log(newCard.back);
      console.log("We'll make a " + cardType + " flash card about " + topic);
      
if(cardType === 'Basic' && topic === 'History'){
	newCard = new basicCard("Who was the 44th president of the United States?", "Barack Obama");
	console.log("********* F R O N T  O F  F L A S H C A R D  **********");
	console.log(newCard.front);
	console.log("********* B A C K  O F  F L A S H C A R D  **********");
	console.log(newCard.back);
		
}
else if(cardType === 'Basic' && topic === 'Science'){
	newCard = new basicCard("Who invented the refrigerator in 1926?", "Albert Einstein");
	console.log("********* F R O N T  O F  F L A S H C A R D  **********");
	console.log(newCard.front);
	console.log("********* B A C K  O F  F L A S H C A R D  **********");
	console.log(newCard.back);
}
else if(cardType === 'Cloze' && topic === 'History'){
	newCard = new clozeCard("Barack Obama was the 44th president of the United States.", "Barack Obama");
	partTxt = "...was the 44th president of the united states.";
	//delTxt = "Barack Obama";
	//console.log(newCard.partial);
	console.log("********* C L O Z E  F L A S H C A R D  **********");
	console.log(newCard.cloze);
	console.log(newCard.text);
	console.log("********* C L O Z E  D E L E T I O N  F L A S H C A R D  **********");
	newCard.fullText();
	newCard.partial();
	newCard.clozeDeletion();
	//console.log(newCard.back);
}
else if(cardType === 'Cloze' && topic === 'Science'){
	newCard = new clozeCard("Albert Einstein invented the refrigerator in 1926.", "Albert Einstein");
	partTxt = "...invented the refrigerator in 1926.";
	console.log("********* C L O Z E  F L A S H C A R D  **********");
	console.log(newCard.cloze);
	console.log(newCard.text);
	console.log("********* C L O Z E  D E L E T I O N  F L A S H C A R D  **********");
	newCard.fullText();
	newCard.partial();
	newCard.clozeDeletion();
}

});

