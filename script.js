let numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
]

let result = [

]

function GuessTheNumber() {
    let name = prompt('What is your name?')
    alert ('Hi ' + name + '! I am thinking of a number between 1 and 20 inclusive. Try and guess the number in the least amount of tries.')

    let index = Math.floor (Math.random()*20)
    let number = answers[index]

    let userGuess = ''
    while (userGuess != number)
    alert('Guess what the number is!')
}
