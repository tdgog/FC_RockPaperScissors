/**
 * The moves and their integer representations
 */
export const moves = Object.freeze({
    rock: 0,
    paper: 1,
    scissors: 2
})

/**
 * Class to run all of the rock paper scissors games and assign points based on wins/losses
 */
export default class RockPaperScissors {

    // Private score field - not accessible outside of the class
    #_score;

    /**
     * Construct a rock paper scissors game with 0 starting score 
     */
    constructor() {
        this.#_score = 0;
    }

    /**
     * Sets the value of score to a different value, ensuring score can never be < 0. The function also updates page text to display the score and whether the user won or lost.
     * @param value the value to set the score to
     */
    set #score(value) {
        if(value > this.#_score) {
            document.getElementById('win/lose message').innerHTML = "YOU WIN";
        } else {
            document.getElementById('win/lose message').innerHTML = "YOU LOSE";
        }
        this.#_score = Math.max(0, value);
        document.getElementById('score').innerHTML = this.#_score;
    }

    /**
     * Privately accessible getter for the private score. Only used by the setter.
     */
    get #score() {
        return this.#_score;
    }

    /**
     * Publically accessible getter for the private score
     */
    get score() {
        return this.#_score;
    }

    /**
     * Gets the computer's choice of move (rock, paper, or scissors)
     * @returns integer from 0-2 representing the computer's choice of rock, paper, or scissors
     */
    #computerSelect() {
        return Math.floor(Math.random() * 3);
    }

    /**
     * Runs the rock paper scissors game and returns the computer's choice as a string
     * @param  playerChoice integer representing the player's choice of rock, paper or scissors (0, 1 or 2)
     * @returns string representing the computer's choice
     */
    runRPS(playerChoice) {
        const computerChoice = this.#computerSelect();

        if (computerChoice === playerChoice) {
            return this.runRPS(playerChoice);
        } else if (playerChoice === moves.rock && computerChoice === moves.scissors) {
            this.#score += 1;
        } else if (playerChoice === moves.paper && computerChoice === moves.rock) {
            this.#score += 1;
        } else if (playerChoice === moves.scissors && computerChoice === moves.paper) {
            this.#score += 1;
        } else {
            this.#score -= 1;
        }

        return Object.keys(moves).find(key => moves[key] === computerChoice);
    }
}
