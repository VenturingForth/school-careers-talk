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

while (points < 3 && canRollAgain){

    const result = rollDice();
    console.log(`You rolled ${result} on the dice.`)

    if (result <= 2){
        canRollAgain = false;
        console.log(`YOU LOSE!`);
    } else if (points < 2){
        points = points + 1;
        console.log(`You have ${points} points! Roll again.`)
    } else {
        points = points + 1;
        console.log(`You have ${points} points! YOU WIN!`)
    }
}

// OTHER PROBLEMS WE CAN SOLVE!
// 1. Can we roll a 20-sided dice instead?
// 2. Can we let the player decide the size of the dice they want to use?
// 3. Can we let the player decide how many points they want to play to?
// 4. Can we roll more than one dice at a time for extra fun?

// The answer to all of these is YES! We just need to be creative.