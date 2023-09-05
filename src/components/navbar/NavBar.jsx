import React from 'react'

import "./NavBar.css";

import {BiHome} from "react-icons/bi";
import {BsBriefcase} from "react-icons/bs";
import {GoPerson} from "react-icons/go";
import {FiMail} from 'react-icons/fi';
import { PiShapes } from "react-icons/pi";
import {LiaCommentSolid} from "react-icons/lia";
import {BsGrid3X2Gap} from "react-icons/bs";

const NavBar = () => {
  return (
    <div id="navbar" className='navBar'>
      <div className='navBar-icons'>
        <div className='navBar-icon'>
            <a href="#introduce"><BiHome size={"18px"}/></a>
        </div>
        <div className='navBar-icon'>
            <a href="#about"><GoPerson size={"18px"}/></a>
        </div>
        <div className='navBar-icon'>
            <a href="#resume" ><BsBriefcase size={"18px"}/></a>
        </div>
        <div className='navBar-icon'>
            <a href="#skills" ><PiShapes size={"18px"} /></a>
        </div>
        <div className='navBar-icon'>
            <a href="#portfolio" ><BsGrid3X2Gap size={"18px"} /></a>
        </div>
        <div className='navBar-icon'>
            <a href="#testimonials" ><LiaCommentSolid size={"18px"} /></a>
        </div>
        <div className='navBar-icon'>
            <a href="#contact"><FiMail size={"18px"}/></a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
