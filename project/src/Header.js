function Score(props) {
    const { children = 'null' } = { ...props };
    return <div className='h-[90%] w-32 bg-white flex items-center justify-center flex-col p-2 rounded-lg'>
        <p className='text-score text-xs'>SCORE</p>
        <p className='text-dark text-4xl'>{children}</p>
    </div>
}

export default function Header() {
    return <div className='h-28 w-[800px] mt-5 border-outline border-2 rounded-xl p-3 px-6 flex items-center justify-between'>
        <p className='text-white text-2xl font-bold leading-7'>ROCK<br />PAPER<br />SCISSORS</p>
        <Score>213</Score>
    </div>
}
