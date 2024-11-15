import React from 'react'
import './campus.css'
import gallary1 from '../../assets/gallery-1.png'
import gallary2 from '../../assets/gallery-2.png'
import gallary3 from '../../assets/gallery-3.png'
import gallary4 from '../../assets/gallery-4.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallary">
            <img src={gallary1} alt="" /><img  src={gallary2} alt="" />
            <img src={gallary3} alt="" /><img src={gallary4} alt="" />
        </div>
        
      
    </div>
  )
}

export default Campus
