import React from 'react'
import imgLogo from '../../Images/logoJK.png'
import './Logo.css'
import {Link} from 'react-router-dom'
const Logo = () => {
  return (
    <Link to='/'>
      <img src={imgLogo} />
    </Link>
    
  )
}

export default Logo