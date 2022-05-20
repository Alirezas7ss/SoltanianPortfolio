import React from 'react' ;
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="hhtps://linkedin.com" target='_blank'><AiOutlineLinkedin /></a>
      <a href="https://github.com" target='_blank'><AiFillGithub  /></a>
      <a href="https://dribbble.com" target='_blank'><AiFillDribbbleCircle  /></a>
    </div>
  )
}

export default HeaderSocials