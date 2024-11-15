import React, { useEffect } from 'react'
import {Link} from 'react-scroll'
import "./navbar.css"
import logo from "../../assets/logo.png"
import menu from '../../assets/menu-icon.png'



const Navbar = () => {
  const [click,setClick]=React.useState(true)
  const handleClick=()=>{
    click?setClick(false):setClick(true)
  }
  const [dark,setDark]=React.useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>500 ?setDark(true):setDark(false)
    })
  },[])
  return (
    <nav className={`container ${dark?"dark":null}`}>
      <img  src={logo} alt="" />
      <img onClick={handleClick} className="menu"src={menu} alt="" />
      <ul className={click?'':"small-menu"}>
    
      <li><Link to='Hero' smooth={true} duration={500} offset={0}>Home</Link></li>
      <li><Link to="program" smooth={true} duration={500} offset={-250}>Program</Link></li>
      <li><Link to="about" smooth={true} duration={500} offset={-150}>About us</Link></li>
      <li><Link to="campus" smooth={true} duration={500} offset={-250}>Campus</Link></li>
      <li><Link to='Testi' smooth={true} duration={500} offset={-250}>Testimonial</Link></li>
      <li><Link to="contact" smooth={true} duration={500} offset={-250}> <button className='btn'>Contact us</button></Link></li>
      
      </ul>
      
    </nav>
  )
}

export default Navbar
