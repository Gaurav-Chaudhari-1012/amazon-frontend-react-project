import React from 'react'
import './HomeScreen.css'
import Homebanner from '../HomeBanner/Homebanner'
import Homedetails from '../HomeDetails/Homedetails'

const Homescreen = () => {
  return (
    <div className="homeScreen">
      <Homebanner/>
      <Homedetails/>
    </div>
  )
}

export default Homescreen