import React from 'react'
import { Home , Features, About} from '../components'


const HomePage = () => {
  return (
    <div className='w-full' >
    <Home/>
    <Features/>
    <About/>  
    </div>
  )
}

export default HomePage