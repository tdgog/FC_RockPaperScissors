import React from 'react';

/**
 * Creates a component to display the user's current score
 * @returns a component displaying the score
 */
function Score() {
    return <div className='h-[90%] w-32 bg-white flex items-center justify-center flex-col p-2 rounded-lg'>
        <p className='text-score text-xs select-none'>SCORE</p>
        <p id='score' className='text-dark text-4xl'>0</p>
    </div>
}

/**
 * Creates a component for the header, including a score 
 * @returns a component containing a header
 */
export default function Header() {
    return <div className='h-28 w-1/2 min-w-[300px] mt-5 border-outline border-2 rounded-xl p-3 px-6 flex items-center justify-between'>
        <p className='text-white text-2xl font-bold leading-7'>ROCK<br />PAPER<br />SCISSORS</p>
        <Score />
    </div>
}
