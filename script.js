// array to store users scores
let results = []

// asks the user for their name and stores and uses the name variable to introduce the game and explains the rules
function GuessTheNumber() {
  let name = prompt("What is your name?")
  alert("Hi " + name + "! I am thinking of a number between 1 and 20 inclusive. Try and guess the number in the least amount of tries.")

  // creating variables and giving them a initial value before some get changed further into the code
  let userScore = 0
  let userGuess = 0

  //declaring variables with const that will not be reassigned a new variable
  const maximum = 20
  const minimum = 1
  const point = 1
  const raise = 1

  //computer secretly picks a random number from 1-20 inclusive.
  let index = Math.floor(Math.random() * maximum)
  //raise the random number by one so it is between 1-20 instead of 0-19
  let answer = index + raise

  //compares users guess to the answer. If it is wrong then the question is asked again and a point is added to their score.
  while (userGuess != answer) {
    userGuess = prompt("Guess what the number is!")
    //trims the users guess so that any unnecessary spaces do not affect their guess
    userGuess = userGuess.trim()
    //Turn the user guess into a number so it can be accurately compared to the answer instead of becoming a string
    userGuess = Number(userGuess)
    userScore = userScore + point

    //compares user guess to the answer. If correct, outputs congratulations message and pushes score onto the scoreboard. If wrong, it will compare and see if the guess is bigger or smaller than the answer and outputs a message which tells the user if their guess was too small or too big.
    if (userGuess == answer) {
      alert("Well done that is the correct number")
      //pushes the result onto the scoreboard. \n outputs the message on a new line
      results.push("\n" + name + " : " + userScore)
    } else if (userGuess > answer && userGuess <= maximum && userGuess >= minimum) {
      alert("That guess is too big. Try again")
    } else if (userGuess < answer && userGuess <= maximum && userGuess >= minimum) {
      alert("That guess is too small. Try again")
      //Checks if an answer is invalid or outside the number range. Outputs a invalid message then allows the user to try again. If the answer is invalid the point origionally added to their score from that round will be taken away so that guess will not affect their score.
    } else if (userGuess > maximum || userGuess < minimum) {
      alert("That number seems to be outside of the range. Try again with a number from 1 - 20")
      userScore = userScore - point
    } else {
      alert("That is an invalid answer. Try again with a number from 1 - 20")
      userScore = userScore - point
    }
  }
}

//outputs the scoreboard of people who played its results
function Scoreboard() {
  alert(results)
}
