import React from 'react'
import './Footer.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
        <hr></hr>
        <div className='row justify-content-lg-center'>
            <div className='col-lg-3'>
                <div className='address'>
                    <span>HỆ THỐNG CỬA HÀNG</span>  
                    <ul>
                        <li>
                            <FaMapMarkerAlt />
                            <Link to='/'>73 Lý Tự Trọng, Quận 1, Tp. HCM</Link>
                        </li>
                        <li>
                            <FaMapMarkerAlt />
                            <Link to='/'>13 Nguyễn Thiện Thuật, Quận 3, TP. HCM</Link>
                        </li>
                        <li>
                            <FaMapMarkerAlt />
                            <Link to='/'>210B Hồ Văn Huê, Quận Phú Nhuận, TP. HCM</Link>
                        </li>
                        <li>
                            <FaMapMarkerAlt />
                            <Link to='/'>261 Phố Huế, Quận Hai Bà Trưng, Hà Nội</Link>
                        </li>
                        <li>
                            <FaMapMarkerAlt />
                            <Link to='/'>371 Lê Duẩn, Quận Thanh Khê, Đà Nẵng</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-3'>
                <div className='instruct'>
                    <span>HƯỚNG DẪN KHÁCH HÀNG</span>
                    <ul>
                        <li>
                            <Link to='/'>hướng dẫn mua hàng</Link>
                        </li>
                        <li>
                            <Link to='/'>giao nhận và thanh toán</Link>
                        </li>
                        <li>
                            <Link to='/'>đổi trả và bảo hành</Link>
                        </li>
                        <li>
                            <Link to='/'>đăng kí thành viên</Link>
                        </li>
                        <li>
                            <Link to='/'>tra cứu đơn hàng</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-3'>
                <div className='policy'>
                <span>CHÍNH SÁCH</span>
                    <ul>
                        <li>
                            <Link to='/'>chăm sóc khách hàng</Link>
                        </li>
                        <li>
                            <Link to='/'>hệ thống tích điểm</Link>
                        </li>
                        <li>
                            <Link to='/'>chính sách đổi hàng</Link>
                        </li>
                        <li>
                            <Link to='/'>chính sách bảo hành</Link>
                        </li>
                        <li>
                            <Link to='/'>chính sách thanh toán</Link>
                        </li>
                        <li>
                            <Link to='/'>chính sách vận chuyển</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-3'>
                <div className='notification'>
                    <span>ĐĂNG KÍ NHẬN TIN</span>
                    <ul>
                        <li>Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.</li>
                    </ul>
                    <input className='email-notification' type='text' placeholder='Email của bạn...'/>
                    <button className='btn-notification'>ĐĂNG KÍ</button>
                </div>
            </div>
        </div>
        </div>
        <div className='coppy-by'>
            <hr></hr>
            @ coppy by giangcuong0603@gmail.com
        </div>
    </div>
  )
}
export default Footer