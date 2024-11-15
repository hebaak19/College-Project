import React from 'react'
import './footer.css'
const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
  return (
    <div className='footer'>
      <p>©{year} Heba Alkatheri</p>
      <ul>
        <li>Services</li>
        <li>Policy</li>
      </ul>
    </div>
  )
}

export default Footer
