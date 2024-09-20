import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
        <ul className='nav-ul'>
            <li className='nav-li gud'>
                <Link to='/'>Giá ưu đãi</Link>
                <ul className='nav-con-ul-gud'>
                    <li>
                        <Link>79K</Link>
                    </li>
                    <li>
                        <Link>99K-199K</Link>
                    </li>
                    <li>
                        <Link>149K-179K</Link>
                    </li>
                </ul>
            </li>
            
            <li className='nav-li nu'>
                <Link to='/'>Giày nữ</Link>
                <ul className='nav-con-ul-nu '>
                    <li>
                        <Link>GIÀY CAO GÓT</Link>
                    </li>
                    <li>
                        <Link>GIÀY THỂ THAO</Link>
                    </li>
                    <li>
                        <Link>SANDAL NỮ</Link>
                    </li>
                    <li>
                        <Link>DÉP SỤC</Link>
                    </li>
                    <li>
                        <Link>GIÀY BÚP BÊ</Link>
                    </li>
                </ul>
            </li>
            <li className='nav-li nam'>
                <Link to='/'>giày nam</Link>
                <ul className='nav-con-ul-nam '>
                    <li>
                        <Link>GIÀY THỂ THAO NAO</Link>
                    </li>
                    <li>
                        <Link>SANDAL NAM</Link>
                    </li>
                    <li>
                        <Link>DÉP NAM</Link>
                    </li>
                    <li>
                        <Link>GIÀY TÂY & SLIP ON</Link>
                    </li>
                    <li>
                        <Link>BOOT NAM</Link>
                    </li>
                </ul>
            </li>
            <li className='nav-li'>
                <Link to='/'>giày cặp</Link>
            </li>
            <li className='nav-li balo'>
                <Link to='/'>balo-túi</Link>
                <ul className='nav-con-ul-balo '>
                    <li>
                        <Link>BAOLO, LAPTO, DU LỊCH & THỜI TRANG</Link>
                    </li>
                    <li>
                        <Link>TÚI ĐEO CHÉO</Link>
                    </li>
                </ul>
            </li>
            <li className='nav-li'>
                <Link to='/'>sale 50%</Link>
            </li>
            <li className='nav-li'>
                <Link to='/'>sản phẩm bán chạy</Link>
            </li>
            <li className='nav-li'>
                <Link to='/'>phụ kiện</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar