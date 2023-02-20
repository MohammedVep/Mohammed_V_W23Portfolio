import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web and app Development Services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>We build Modern Websites with HTML5, CSS3 and Javascript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We build iOS and Android Applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We make strong desktop applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We build react native and ionic cross-platform applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We build strong backend databases with mongoDB</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We build modern full stack web application with power of react and Angular in front end with Node.js, Java (Spring), C# or python with backends</p>
            </li>
          </ul>

        </article>
        <article className="service">
          <div className="service__head">
            <h3>New Programming Languages and services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>We are commited to creating new and emerging programming languages to meet growing needs of modern devices and technology</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We will work on SQL Server app development and other new future ready database technologies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We help build new authentication methods</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We are commited to building new apps for metaverse</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>We are committed to building new apps for new product categories coming out every minute</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services