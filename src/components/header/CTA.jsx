import React from 'react'
import { Link } from 'react-router-dom'
const CTA = () => {
  return (
    <div className='cta' >
      <Link data-aos="fade-right" data-aos-duration="900" to='/cv' className='btn'>SEE CV</Link>
      <a data-aos="fade-left" data-aos-duration="900" className='btn btn-primary' href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA