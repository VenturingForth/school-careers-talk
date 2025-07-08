// PROBLEM!
// We're bored and all we have is a dice in our pocket. We say to ourselves that we 
// win if we can roll the dice three times without rolling a 1 or 2; the dice win 
// if we do.

// This code generates a random whole number between 1 and 6
function rollDice(){
    return Math.ceil(Math.random() * 6)
}

// These are variables to help us track information.
let points = 0;
let canRollAgain = true;