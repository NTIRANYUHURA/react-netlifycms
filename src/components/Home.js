import React from 'react'
import { HomeData } from '../components/HomeData';

const Home = () => {
  return (
    <div className = "home">
    {
      HomeData.map((item)=> <div  key = {item.id}  className = "home"> <img src = {item.image} alt = "im" className='logo'/></div>
    )}
  </div>
  )
}

export default Home
