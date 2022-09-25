import React, { useState } from 'react';
import RockPaperScissors from './RockPaperScissors';
import Header from './Header';
import Selector from './Selector';
import { RulesButton, RulesModal } from './Rules';

/**
 * Runs the webpage
 * @returns The webpage
 */
function App() {
  const game = new RockPaperScissors();
  const [showModal, setShowModal] = useState(false);

  return <div className='bg-gradient-radial h-screen w-screen flex items-center flex-col justify-between p-5 overflow-hidden'>
    <Header />
    <Selector reference={game} />
    <RulesButton setShowModal={setShowModal} />
    <RulesModal showModal={showModal} setShowModal={setShowModal} />
  </div>
}

export default App;
