import React from 'react'
import Working from '../img/New-Nick.png'
import './about.css'
import Cert from '../img/flatiron-cert.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <div className='about-card bg'></div>
        <div className='about-card'>
        <img
            src={Working}
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
        Development with a creative approach.
        </p>
        <p className="about-desc">
          Coming from a background in creative merchandising and marketing management, my operational approach to development by means of aesthetic delineation transcends from the front to the back end.
        </p>
        <div className="about-award">
          <img src={Cert} alt="Flatiron Certificate" className="about-award-img" />
          <div className="about-award-texts">
            <h4 className="about-award-title">Flatiron School Software Engineering Certificate</h4>
            <p className="about-award-desc">
              Full stack Software Engineering certificate with a focus on JavaScript and React for frontend development and Ruby on Rails for backend development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About