import { useState } from 'react';
import Rout from './components/Rout';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
function App() {
 

  return (
    <>
    <div className='w-full h-[100%] overflow-hidden 'data-scroll-section>
    <div>
  <Rout/>
  </div>
  </div>
    </>
  )
}

export default App
