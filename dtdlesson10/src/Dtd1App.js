import React from 'react'
import DUseState from './conponents/DUseState'
import DUseEffect from './conponents/DUseEffect'

export default function Dtd1App() {
  return (
    <div className='container border my-2 '>
      <h1>Demo React Hook</h1>
      <DUseState/> 
      <DUseEffect/>
    </div>
  )
}
