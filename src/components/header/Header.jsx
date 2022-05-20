import React from 'react'
import CTA from './CTA'
import './header.css'
import Me from '../../assets/me31.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Soltanian</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials /> 
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>scroll Down</a>
      </div>
    </header>
  )
}

export default Header