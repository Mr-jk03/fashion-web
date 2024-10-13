import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import './User.css'
import {Link} from 'react-router-dom'
const User = () => {
  return (
    <div className='user'>
      <Link to={'/userform'}>
        <FaUserCircle />
      </Link>
    </div>
  )
}
export default User
