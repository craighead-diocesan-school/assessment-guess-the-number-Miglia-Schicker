
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
    let answer = Math.floor (Math.random()*19)
    answer = answer + 1
    while (userGuess != answer){
        userGuess = prompt ('Guess what the number is!')
        alert ('That was wrong. Try again')
        userScore = userScore + 1
 } if (userGuess == answer){
    alert('Well done that is the correct number')
    results.push (name + '=' + userScore)
 }
}

function Scoreboard (){
    alert(results)
}
