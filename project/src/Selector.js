import { moves } from './RockPaperScissors';
import React, { useEffect, useState } from 'react';

/**
 * Creates the circular buttons used for representing rock, paper, and scissors
 * @param pressed whether a button has been pressed already
 * @param setPressed used to set a variable to the pressed button so multiple buttons cant be pressed in one turn
 * @param movetype a string representing rock, paper or scissors
 * @param colour the main colour of the circle, prefixed with bg- (e.g., bg-paper or bg-[#beeeef])
 * @param shadowColour the darker variant of the `colour` property, in the same format
 * @param image the image used to represent rock, paper or scissors
 * @param className any additional styling to be passed to the outermost div of the circle
 * @returns a circle
 */
function Circle ({ pressed, setPressed, movetype, colour, shadowColour, image, className }) {
    const onButtonPress = () => {
        if(pressed) return;
        setPressed(movetype);
    }

    return <div 
        onClick={onButtonPress} 
        className={`h-32 w-32 rounded-full hover:cursor-pointer select-none hover:drop-shadow-2xl
                    ${shadowColour} ${className}
        `}
    >
        <div className={`h-full w-full ${colour} rounded-full flex justify-center items-center relative -top-1.5`}>
            <div className={`h-3/4 w-3/4 bg-button-shadow rounded-full mb-1.5`}>
                <div className={`h-full w-full bg-white rounded-full flex justify-center items-center relative top-1.5`}>
                    <img src={image} alt={movetype} />
                </div>
            </div>
        </div>
    </div>
}

/**
 * Allows the user to select their choice, tells the user if they won or lost, and allows them to play again
 * @param reference the RockPaperScissors class being used for the game
 * @returns a selector which allows the user to play the game and play again when they win or lose
 */
export default function Selector({ reference }) {
    const [pressed, setPressed] = useState(undefined);
    const [fadeout, setFadeout] = useState(false);
    const [computerChoice, setComputerChoice] = useState(undefined);
    const [showMessage, setShowMessage] = useState(false);

    /**
     * Resets the states to their default values to restart the game
     */
    const reset = () => {
        setShowMessage(false);
        setComputerChoice(undefined);
        setFadeout(false);
        setPressed(undefined);
    }

    // This actually runs the game
    useEffect(() => {
        if(pressed !== undefined) {
            setTimeout(() => { // Allow the buttons to move to destination before fading out
                setFadeout(true);
                setTimeout(() => { // Leave the buttons invisible for a moment before running the game
                    setComputerChoice(reference.runRPS(moves[pressed]));
                    setTimeout(() => { // Leave the button now made visible still for a moment before moving it out
                        setShowMessage(true);
                    }, 500);
                }, 500);
            }, 50);
        }
    }, [pressed]);

    /**
     * Checks if a given circle should be visible currently
     * @param move a string representing the move for each circle component
     * @returns a boolean representing if the circle should be visible at the current time
     */
    const shouldBeVisible = (move) => {
        if (!fadeout) return true;
        if (pressed === move || computerChoice === move) return true;
        return false;
    }

    /**
     * Returns whichever position the circle should be in based on if the win/lose message is showing
     * @param showing the styles for if the text is showing
     * @param notshowing the styles for if the text isnt showing
     * @returns the styling which should be used
     */
    const position = (showing, notshowing) => {
        return showMessage ? showing : notshowing;
    }

    /**
     * Houses all of the styling specific to the rock move, and updates the returned styling based on context
     * @returns the styling to use at the current time
     */
    const rockStyle = () => {
        const visibility = !shouldBeVisible('rock') && 'opacity-0'

        if(pressed === undefined) { // Default position for if user has not selected yet
            return `left-0 right-0 top-36 ${visibility}`;
        } else if(pressed === 'rock') { // Top-left position for if user selects it
            return `top-0 ${position('right-[10.5rem]', 'right-[5.5rem]')} ${visibility}`;
        } else { // Top-right position for if user does not select it
            return `top-0 ${position('left-[10.5rem]', 'left-[5.5rem]')} ${visibility}`;
        }
    }

    /**
     * Houses all of the styling specific to the paper move, and updates the returned styling based on context
     * @returns the styling to use at the current time
     */
    const paperStyle = () => {
        const visibility = !shouldBeVisible('paper') && 'opacity-0'

        if(pressed === undefined || pressed === 'paper') { // Default position for if user has not selected yet or user has selected paper
            return `right-0 ${position('-left-10', 'left-10')} ${visibility}`;
        } else { // Top-right position for if user does not select it
            return `right-0 ${position('left-[18.5rem]', 'left-[13.5rem]')} ${visibility}`;
        }
    }

    /**
     * Houses all of the styling specific to the scissors move, and updates the returned styling based on context
     * @returns the styling to use at the current time
     */
    const scissorsStyle = () => {
        const visibility = !shouldBeVisible('scissors') && 'opacity-0'

        if(pressed === undefined) { // Default position for if user has not selected yet
            return `right-10 ${visibility}`;
        } else if(pressed === 'scissors'){ // Top-left position for if user selects it
            return `${position('right-[18.5rem]', 'right-[13.5rem]')} ${visibility}`;
        } else { // Top-right position for if user does not select it
            return `${position('left-10', '-left-10')} ${visibility}`;
        }
    }

    return <>
        <div className={`h-64 mt-7 bg-triangle ${!shouldBeVisible(null) && 'bg-none'} bg-no-repeat bg-center flex justify-center items-center`}>
            <div className='flex h-64 transition-all'>
                <Circle
                    pressed={pressed}
                    setPressed={setPressed}
                    className={`transition-all relative ${paperStyle()}`}
                    movetype='paper'
                    colour='bg-paper'
                    shadowColour='bg-paper-shadow'
                    image='/images/icon-paper.svg'
                />
                <Circle
                    pressed={pressed}
                    setPressed={setPressed}
                    className={`transition-all relative ${rockStyle()}`}
                    movetype='rock'
                    colour='bg-rock'
                    shadowColour='bg-rock-shadow'
                    image='/images/icon-rock.svg'
                />
                <Circle
                    pressed={pressed}
                    setPressed={setPressed}
                    className={`transition-all relative ${scissorsStyle()}`}
                    movetype='scissors'
                    colour='bg-scissors'
                    shadowColour='bg-scissors-shadow'
                    image='/images/icon-scissors.svg'
                />
            </div>
        </div>
        <div className={`relative bottom-60 flex justify-center items-center flex-col transition-all ${showMessage === false && 'opacity-0'}`}>
            <p id='win/lose message' className='text-white text-4xl mb-2'>YOU WIN</p>
            <button onClick={reset} className='bg-white rounded w-32 h-7 transition-all hover:scale-105'>
                <p className='text-dark text-xs tracking-wider select-none'>PLAY AGAIN</p>
            </button>
        </div>
    </>
}
