import React from 'react'
import Home from './home/Home'
import Left from '../components/left-sidebar/Left'
import Right from '../components/right-sidbar/Right'

const Dashboard = () => {
  return (
    <div>
      <div className='  flex '>
      <Left />
    <Home />
    <Right />
    </div>
    </div>
  )
}

export default Dashboard
