import React from 'react'
import './about.css'
import Me from '../../assets/Me.jpg'
import { BsAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon"/>
              <h5>Experience</h5>
              <small>Completed Computer Programmer Program @ Sheridan College</small>
              <small>September 2015 - January 2018</small>
              <small>Finishing Computer Programming and Analysis Advance diploma @ George Brown College</small>
              <small>January 2022 - April 2023</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>We work with startups and anyone who needs help with web development</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>5 Regular Projects Completed</small>
              <small>1 capstone project</small>
            </article>
          </div>

          <p>Hello, my name is Mohammed Vepari and I have learned good interview skills, project development, java, C#, Node JS, react Native, from george brown</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About