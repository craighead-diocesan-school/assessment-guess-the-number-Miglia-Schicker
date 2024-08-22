// array to store users scores
let results = []

// asks the user for their name and stored and uses the name variable to introduce the game
function GuessTheNumber() {
  let name = prompt("What is your name?")
  alert("Hi " + name + "! I am thinking of a number between 1 and 20 inclusive. Try and guess the number in the least amount of tries.")

  // creating variables and giving them a initial value before some get changed further into the code
  let userScore = 0
  let userGuess = 0
  let maximum = 20
  let minimum = 1
  let point = 1

  //computer picks a random number from 1-20 inclusive. Turn the random number into a number in the code instead of string
  let index = Math.floor(Math.random() * 20)
  let answer = index + 1
  answer = Number(answer)

  //compares users guess to the answer. If it is wrong then the question is asked again and a point is added to their score.
  while (userGuess != answer) {
    userGuess = prompt("Guess what the number is!")
    //trims the users guess so that any unnecessary spaces do not affect their guess
    userGuess = userGuess.trim()
    //Turn the user guess into a number so it can be accurately compared to the answer
    userGuess = Number(userGuess)
    userScore = userScore + point

    //compares user guess to the answer. If correct, outputs congradgulations message and pushes score onto the scoreboard. If wrong, it will compare and see if the guess is bigger or smaller than the answer and outputs a message which tells the user if their guess was too small or too big.
    if (userGuess == answer) {
      alert("Well done that is the correct number")
      results.push("\n" + name + " = " + userScore)
    } else if (userGuess > answer && userGuess <= maximum && userGuess >= minimum) {
      alert("That guess is too big. Try again")
    } else if (userGuess < answer && userGuess <= maximum && userGuess >= minimum) {
      alert("That guess is too small. Try again")
      //Checks if an answer is invalid or outside the number range. Outputs a invalid message then allows the user to try again.
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
