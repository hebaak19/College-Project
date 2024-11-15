import React from 'react'
import './about.css'
import img from '../../assets/about.png'

const About = () => {
  return (
    <div className='about ' >
      <div className="about-left">
        <img src={img} alt="" className='about-img'/>
        
      </div>
      <div className="about-right">
        <h3>The Value of a College Education</h3>
        <h2>STUDENTS TODAY ARE OUR LEADERS TOMMOROW</h2>
        <p>College is essential for career preparation and personal growth, offering specialized knowledge, critical skills, and valuable experiences. It fosters independence, resilience, and connections that benefit students throughout life. A college degree often leads to better job opportunities, higher earning potential, and a path to lifelong learning. </p>
      </div>
    </div>
  )
}

export default About
