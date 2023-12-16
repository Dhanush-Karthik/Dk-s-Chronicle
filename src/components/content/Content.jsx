import React from 'react'

import "./Content.css";
import Introduce from '../introduce/Introduce';
import About from '../about/About';
import Resume from '../resume/Resume';
// import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import Testimonials from '../testimonials/Testimonials';
import Portfolio from '../portfolio/Portfolio';


const Content = () => {
  return (
    <div className='content'>
      <Introduce />
      <About />
      <Resume />
      {/* <Skills /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Content
