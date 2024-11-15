import React from 'react'
import './testi.css'
import Slide from '../Slide/Slide'
import info from '../info'
function createSlide(item){
    return <Slide name={item.name} img={item.img} company={item.company}/>
}
const Testimonials = () => {
  return (
    <div className='Testi'>
      {info.map(createSlide)}
    </div>
  )
}

export default Testimonials
