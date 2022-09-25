/**
 * Creates a button for opening the rules modal
 * @param setShowModal a state setter for updating whether or not to show the modal on screen 
 * @returns a button to allow the user to show the rules modal
 */
export function RulesButton({ setShowModal }) {
    return <div
        className='border-2 rounded-md cursor-pointer select-none self-end'
        onClick={() => setShowModal(true)}
    >
        <p className='text-white text-sm my-1 mx-7'>RULES</p>
    </div>
}

/**
 * Creates a modal which displays over all page content to show the rules
 * @param showModal a state getter for deciding whether or not to show the modal on screen
 * @param setShowModal a state setter for updating whether or not to show the modal on screen 
 * @returns a modal showing the rules of rock paper scissors
 */
export function RulesModal({ showModal, setShowModal }) {
    return showModal && <div className='bg-[rgba(0,0,0,.5)] fixed inset-0 z-40 bg-black'>
        <div className='flex justify-center items-center fixed inset-0 z-50 select-none' onClick={(event) => {
            if (event.target === event.currentTarget) {
                setShowModal(false);
            }
        }}>
            <div>
                <div className='border-0 rounded-lg drop-shadow-xl relative flex flex-col w-full bg-white'>
                    <div className='flex items-center justify-between p-5 rounded-t'>
                        <p className='text-3xl'>RULES</p>
                        <button onClick={() => setShowModal(false)}>
                            <img src='/images/icon-close.svg' />
                        </button>
                    </div>

                    <div className='relative p-6 flex-auto'>
                        <img src='/images/image-rules.svg' />
                    </div>
                </div>
            </div>
        </div>
    </div>
}