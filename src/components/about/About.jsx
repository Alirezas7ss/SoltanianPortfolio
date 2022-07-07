import React from 'react' ;
import './about.css' ;
import { FaAward } from "react-icons/fa";
import ME from '../../assets/me-about2.png';
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id = 'about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="800"  className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

              <artifact data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </artifact>
            
            
              <artifact data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1200" className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Not yet</h5>
                {/* <small>2+ Worldwide</small> */}
              </artifact>
            

            
              <artifact data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1500" className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Project</h5>
                <small>5+ Completed</small>
              </artifact>
            
          </div>
            <p>
              i'm a developer in web2 and web3 world , in world i'm frontend and solidity developer
              you can see in the portfolio my experiences and projects also can see my github and linkedin 
              to get to know me better if have question or Speech You can send me a message from the Contact ME. I will be happy to talk to you :)
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About