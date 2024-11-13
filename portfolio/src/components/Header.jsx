import React from 'react'
import profilepic from '../assets/images/chidinma black outfit.jpg'
import profileResized from '../assets/images/Ellipse 17.png'
import hamburger from '../assets/icons/jam_menu.svg'

const Header = () => {
  return (
    <div className='header'>
        <div className="profile-pic">
           <a href={profilepic}><img src={profileResized} alt="profile-picture" /> </a> 
        </div>
        <span className='menu'>
          <a className='hamburger' href=""><img className='hamburger-icon' src={hamburger} alt="" /></a> 
        </span>
        <div className="options">
            <button className='about'>About</button>
            <button className='resume'>Resume</button>
        </div>
    </div>
  )
}

export default Header