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
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

              <artifact className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </artifact>
            
            
              <artifact className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
              </artifact>
            

            
              <artifact className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Project</h5>
                <small>10+ Completed</small>
              </artifact>
            
          </div>
            <p>
              iusto exercitationem corrupti corporis doloribus, odio consequuntur quae, consectetur autem, obcaecati excepturi? Dolores sequi vitae nostrum voluptatibus quae incidunt minus quos iste magni porro adipisci maiores, temporibus animi vero rerum veritatis doloribus ut ipsum impedit, dolorem sint dicta delectus aut! Deleniti, facere corporis odit repellendus perferendis totam voluptatibus consequuntur suscipit nobis beatae incidunt consectetur quos consequatur molestias deserunt aut delectus esse fuga quaerat officia numquam sequi dignissimos! Fugiat, aliquam? Deserunt, nihil et corporis natus dignissimos ratione vel unde, impedit eligendi molestiae officia consequatur nostrum incidunt illo pariatur possimus. Ipsum minus expedita quo sed nemo deserunt suscipit laboriosam pariatur molestiae, obcaecati optio placeat excepturi architecto, in temporibus mollitia, cupiditate eum. Necessitatibus ducimus fugit libero quia?
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About