import React from 'react'
import './title.css'
const Title = (props) => {
  return (
    <div className='title   container'>
      <p>{props.title}</p>
      <h2>{props.subTitle}</h2>
    </div>
  )
}

export default Title
