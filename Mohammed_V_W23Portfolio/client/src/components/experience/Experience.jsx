import React from 'react'
import './experience.css'
import {IoIosCheckmarkCircle} from 'react-icons/io'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoIosCheckmarkCircle />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <IoIosCheckmarkCircle />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <IoIosCheckmarkCircle />
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <IoIosCheckmarkCircle />
              <h4>BootStrap</h4>
              <small className="text-light">Learning</small>
            </article>
            <article className="experience__details">
              <IoIosCheckmarkCircle />
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <IoIosCheckmarkCircle />
              <h4>Angular</h4>
              <small className="text-light">Learning</small>
            </article>
          </div>
        
        </div>
        
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoIosCheckmarkCircle />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoIosCheckmarkCircle />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
            <article className="experience__details">
              <IoIosCheckmarkCircle />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoIosCheckmarkCircle />
              <div>
                <h4>Java</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
            <article className="experience__details">
              <IoIosCheckmarkCircle />
              <h4>PHP</h4>
              <small className="text-light">Learning</small>
            </article>
            <article className="experience__details">
              <IoIosCheckmarkCircle />
              <h4>C#</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Experience