import React from 'react'
import Home from './pages/home/Home'
import Left from './components/left-sidebar/Left'
import Right from './components/right-sidbar/Right'

const App = () => {
  return (
    <div className='  flex '>
      <Left />
    <Home />
    <Right />
    </div>
  )
}

export default App
