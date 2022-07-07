import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs' ;
const Experience = () => {
  return (
    <section id ='experience' >
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
       <div className="container experience__container">
         <div data-aos-duration="1000" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="experience__frontend">
           <h3>Frontend Developer</h3>
           <div  className="experience__content">
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>REACT</h4>
                  <small className='text-light'>Experienced</small> 
                 </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small> 
                 </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small> 
                 </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>SASS</h4>
                  <small className='text-light'>Experienced</small> 
                  </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>figma</h4>
                  <small className='text-light'>intermediate</small> 
                  </div>
             </artifact>
           </div>
         </div>
         <div data-aos-duration="1000"  data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className="experience__backend">
           <h3>Backend Developer</h3>
           <div  className="experience__content">
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>SOLIDITY</h4>
                  <small className='text-light'>Experienced</small> 
                  </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>JAVASCRIPT</h4>
                  <small className='text-light'>Experienced</small> 
                  </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>WEB3 js</h4>
                  <small className='text-light'>Experienced</small> 
                  </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>PYTHON</h4>
                  <small className='text-light'>intermediate</small> 
                  </div>
             </artifact>
             
           </div>
         </div>
       </div>

    </section >
  )
}

export default Experience