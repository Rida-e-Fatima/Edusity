import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="container hero">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting edge curriculum is designed to empower students with the knowlegde, skills and experiences needed to excel in the dynamiceild of education.</p>
        <button className="btn">Explore More<img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
