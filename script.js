
// array to store scores
let results = [

]

// asks the user for their name and stored and uses the name variable to introduce the game
function GuessTheNumber() {
    let name = prompt('What is your name?')
    alert ('Hi ' + name + '! I am thinking of a number between 1 and 20 inclusive. Try and guess the number in the least amount of tries.')

// creating variables and giving them a initial value before they get changed further into the code
    let userScore = 0
    let userGuess = 0

    //computer picks a random number from 1-20 inclusive
    let answer = Math.floor (Math.random()*20)
    answer = answer + 1


    //compares users guess to the answer. If it is wrong then the question is asked again and a point is added to their score
    while (userGuess != answer){
        userGuess = prompt ('Guess what the number is!')
        userGuess = userGuess.trim()
        userScore = userScore + 1

        
        //compares user guess to the answer. If correct, outputs congradgulations message and pushes score onto the scoreboard. If wrong, outputs "Thats wrong. Try again" then the question will repeat.
        if (userGuess == answer){
            alert('Well done that is the correct number')
            results.push (name + ' = ' + userScore)
         } else if (userGuess != answer){
            alert ('That was wrong. Try again')
         }
        

        if (userGuess > 20 || userGuess < 1){
            alert('That number seems to be outside of the range. Try again with a number from 1 - 20')
            userScore = userScore - 1
         } 
  
}
}

//alerts the scoreboard of people who played its results
function Scoreboard (){
    alert(results)
}
