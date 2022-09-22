function Circle({ colour, image }) {
    return <div className={`h-32 w-32 ${colour} rounded-full`}>

    </div>
}

export default function Selector() {
    return <div className="h-96 w-96 bg-dark">
        <Circle colour='bg-scissors-shadow' image='icon-rock.svg' />
    </div>
}