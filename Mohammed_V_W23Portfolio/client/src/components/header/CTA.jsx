import React from 'react'
import CV from '../../assets/MohammedVepari(CV).pdf'
import Resume from '../../assets/MohammedVepari.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href={Resume} download className='btn'>Download Resume</a>
    </div>
  )
}

export default CTA