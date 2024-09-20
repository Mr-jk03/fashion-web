import React, { useState } from 'react'
import '../Menu/Menumobile.css'
import { Link } from 'react-router-dom';
import { FaCaretLeft } from "react-icons/fa";

const MenuMobile = ({menuOpen, onCloseMenu}) => {

  return (
    <div className={`menu ${menuOpen ? 'open' : 'close'}`}>
        <div className='menu-head'>
                <span>menu</span>
                <i onClick={onCloseMenu }>
                    <FaCaretLeft />
                </i>
        </div>
        <div className='main-menu'>
            <ul className='ul-mobile'>
                <li>
                    <Link>giá ưu đãi</Link>
                </li>
                <li>
                    <Link>giày nữ</Link>
                </li>
                <li>
                    <Link>giày nam</Link>
                </li>
                <li>
                    <Link>giày cặp</Link>
                </li>
                <li>
                    <Link>balo-túi</Link>
                </li>
                <li>
                    <Link>sale 50%</Link>
                </li>
                <li>
                    <Link>sản phẩm bán chạy</Link>
                </li>
                <li>
                    <Link>phụ kiện</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MenuMobile
