import { useState } from 'react'
import logo from "./images/logo.svg";

function App() {

  return (
    <div className='h-screen w-full flex justify-center items-center '>
      <img src={logo} className='w-3/4 md:w-96 object-cover object-center'/>
      <div className='w-full h-24 fixed z-10'></div>
    </div>
  )
}

export default App
