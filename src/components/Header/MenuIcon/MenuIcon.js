import React from 'react'
import { FaBars } from 'react-icons/fa';
const MenuIcon = ({onClick}) => {
  return (
    <div onClick={onClick} className='menu-icon' role='button'>
        <FaBars />
    </div>
  )
}
export default MenuIcon
