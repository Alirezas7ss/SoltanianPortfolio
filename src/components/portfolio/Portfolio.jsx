import React ,{useEffect,useState}  from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Slicwee 1.png'
import IMG2 from '../../assets/Dribbble shot - 1.png'
import IMG3 from '../../assets/Ca55pture.JPG'
import IMG4 from '../../assets/Dribbble shot HD - 1.png'
import IMG5 from '../../assets/Slic12e 2.png'
import IMG6 from '../../assets/portfolio6.jpg'
const random = [
  {
    id : 1,
    image : IMG1,
    title : "Tools : React , Javascript , Axios , React-router-dom , Swiper  ",
    github : "https://github.com/Alirezas7ss/Responsive_Store-",
    demo : "https://responsive-store2.vercel.app/cart" ,
  },
  
  {
    id : 2,
    image : IMG2,
    title : "Tools : Javascript , React , AOS , Swiper , CSS , HTML ",
    github : "https://github.com/Alirezas7ss/PORTFOLIO",
    demo : "https://dribble.com/Alien-pixels" ,
  },
  {
    id : 3,
    image : IMG3,
    title : "Tools : Solidity , React , Javascript , Etherjs , Truffle , Tailwind , Css , Html",
    github : "https://github.com/Alirezas7ss/ProjectNftWith-Dapp",
    demo : "https://silly-panda-815189.netlify.app/" ,
  } ,
  {
    
    id : 4,
    image : IMG4,
    title : "Tool : figma",
    github : "https://www.figma.com/file/jQ8ZwlFSv5qumlriZQhXL8/ProjectFigma?node-id=0%3A1",
    demo : "https://www.figma.com/file/jQ8ZwlFSv5qumlriZQhXL8/ProjectFigma?node-id=0%3A1" ,
  },
  {
    id : 5,
    image : IMG5,
    title : "Tools : Bootstrap , Html , Css",
    github : "https://github.com",
    demo : "https://dribble.com/Alien-pixels" ,
  },
  
]
const figma = [
  
   random[3]


]

const frontend = [
  random[0] , random[1] , random[4]
 

]

const solidity = [
  random[2]
]
const Portfolio = () => {
  const [popular, setPopular] = React.useState([])
  const [filtered, setFiltered] = React.useState([])
  const [activeGenre, setActiveGenre] = React.useState(random)
  useEffect(() => {
   if (activeGenre === random) {
    setFiltered(random)
     return;
   }
  
    setFiltered(activeGenre);
  }, [activeGenre]);
  
  return (
      <section className="portfolio">
        <h5>My React Work</h5>
        <h2>Portfolio</h2>
        <div className='button-choose'>
          <button className={activeGenre === random ? "btn btn-primary" : "btn" } onClick={() => setActiveGenre(random)} >Random</button>
          <button className={activeGenre === frontend ? "btn btn-primary" : "btn" } onClick={() => setActiveGenre(frontend)} >FrontEnd</button>
          <button className={activeGenre === solidity ? "btn btn-primary" : "btn" } onClick={() => setActiveGenre(solidity)} >Solidity</button>
          <button className={activeGenre === figma ? "btn btn-primary" : "btn" } onClick={() => setActiveGenre(figma)}  >UI/UX</button>
        </div>
        <div data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="900" className="container portfolio__container">
          {
            filtered.map(({id,image,title,github,demo}) => {
              return (
                <artifact key = {id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt="" />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn" target='_blank'>Github</a>
                    <a href={demo} target='_blank' className="btn btn-primary">Live Demo</a>
                  </div>
                </artifact>
              )
            })
          }
          
        </div>
      </section>
    )
}

export default Portfolio