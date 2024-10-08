
import { FaShoppingCart } from "react-icons/fa";
import './Cart.css'
import {memo} from 'react'
import {Link} from 'react-router-dom'


const Cart = ({count}) => {

  return (
    <div className='cart'>
      <Link to={'/bodycart'}>
        <FaShoppingCart />
      </Link>
      <span className="total-item">
        {count}
      </span>
    </div>

  )
}

export default memo(Cart)