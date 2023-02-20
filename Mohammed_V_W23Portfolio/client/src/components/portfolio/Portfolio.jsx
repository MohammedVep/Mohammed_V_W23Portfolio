import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio_A.png'
import IMG2 from '../../assets/Portfolio_B.png'
import IMG3 from '../../assets/Portfolio_C.png'
import IMG4 from '../../assets/Portfolio_D.png'
import IMG5 from '../../assets/Portfolio_E.png'
import ProjectVision from '../../assets/F22_T26_ProjectVision.pdf'
import ProjectPlan from '../../assets/F22_T26_ProjectPlan.pdf'
import BusinessRequirements from '../../assets/F22_T26_HighLevelRequirements.pdf'
import Mockups from '../../assets/F22_T26_Mockups.pdf'
import RequirementsAndDesign from '../../assets/F22_T26_RequirementsAnalysisandDesign.pdf'
import ProjectStatusReportOne from '../../assets/W23_T26_ProjectStatusReport_v1.0.pdf'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio - Academic and Capstone</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Weather app" />
          </div>
          <h3>Weather Application</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/MohammedVep/101345468_comp3123_labtest2' className='btn' target='_blank'>Github</a>
            <a href='https://101345468-comp3123-labtest2.vercel.app' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='Restaurant Database' />
          </div>
          <h3>Restaurant Database Mongo DB - Back End</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/MohammedVep/lab3_restaurant_database' className='btn' target='_blank'>Github</a>
            <a href='https://lab3-restaurant-database.vercel.app' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='GraphQL Assignment 1' />
          </div>
          <h3>Graph QL assignment with Mongo DB - Back End</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/MohammedVep/101345468_COMP3133_Assignment1' className='btn' target='_blank'>Github</a>
            <a href='https://101345468-comp-3133-assignment1.vercel.app' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='Lab week 9' />
          </div>
          <h3>Intro To React App</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/MohammedVep/labweek09' className='btn' target='_blank'>Github</a>
            <a href='https://labweek09.vercel.app' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt='Lab week 10' />
          </div>
          <h3>React Form</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/MohammedVep/labweek10' className='btn' target='_blank'>Github</a>
            <a href='https://labweek10.vercel.app' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <h3>Project Summary</h3>
          <p>Online tutoring web is a modern web and mobile application designed for a 21st century and fast help for homework problems. COVID 19 has changed how we live, work and interact and driving our costs down is badly needed to get more students to get help with their tutor assignments</p>
        </article>
        <article className='portfolio__item'>
          <div className='CP'>
            <a href={ProjectVision} download className='btn'>Project Vision</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='CP'>
            <a href={BusinessRequirements} download className='btn'>Business Requirements</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='CP'>
            <a href={ProjectPlan} download className='btn'>Project Plan</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='CP'>
            <a href={RequirementsAndDesign} download className='btn'>Requirements Analysis and Design</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='CP'>
            <a href={Mockups} download className='btn'>Project Mockups</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='CP'>
            <a href={ProjectStatusReportOne} download className='btn'>First Status Report</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='CP'>
            <p>Actual Project info coming soon</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio