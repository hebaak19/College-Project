import React from 'react'

import './slide.css'
const Slide = (props) => {
  return (
    <div className="slider">
    <ul>
        <li>
            <div className="slide">
                <div className="user-info">
                   
                    <img src={props.img} alt="" />
                    <div className='info'>
                        <h3>{props.name}</h3>
                        <span>{props.company}</span>
                    </div>
                </div>
            </div>
        </li>
    </ul>
  </div>
  )
}

export default Slide
