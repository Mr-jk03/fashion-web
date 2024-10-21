import React, { useEffect, useReducer, useState } from 'react'
import {Link} from 'react-router-dom'
import './UserIsLogged.css'
import User from '../../../Images/user.png'
import { FaPen } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { PiBellSimpleRingingFill } from "react-icons/pi";
import { TbTicket } from "react-icons/tb";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import Orders from '../Orders/Orders';
import Notifications from '../Notifications/Notifications';
import Vouchers from '../Vouchers/Vouchers';
import Favoriteproduct from '../Favoriteproduct/Favoriteproduct';
import Changepass from '../Changepass/Changepass';

const UserIsLogged = ({onLogOut, username}) => {

    const [userData, setUserData] = useState({
        username: '',
        phoneNumber: '',
        email: '',
        gender: '',
        birthday: '',
    });

    useEffect(() =>{
        const LoggedInUser = localStorage.getItem('LoggedInUser');
        if(LoggedInUser){
            const user = JSON.parse(localStorage.getItem(LoggedInUser));
            setUserData({
                username: user.username,
                phoneNumber: user.phoneNumber,
                email: user.email || '',
                gender: user.gender || '',
                birthday: user.birthday || ''
            });
        }
    }, [])

    const [showUlMenu, setshowUlMenu] = useState(false);

    const handleShowULMenu = () =>{
        setshowUlMenu(!showUlMenu);
    }

    const initialState = {activeComponent: "MY_ACCOUNT" }

    const menuReducer = (state, action) =>{
        switch(action.type){
            case "MY_ACCOUNT":
                return{activeComponent: "MY_ACCOUNT"}
            case "ORDERS":
                return{activeComponent: "ORDERS"}
            case "NOTIFICATIONS": 
                return{activeComponent: "NOTIFICATIONS"}
            case "VOUCHERS":
                return{activeComponent: "VOUCHERS"}
            case "FAVORITES":
                return{activeComponent: "FAVORITES"}
            case "CHANGE_PASS":
                return{activeComponent: "CHANGE_PASS"}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(menuReducer, initialState)

  return (
    <div className='main-logged'>
        <div className='container'>
            <div className="row">
                <div className="col-xl-12 title-logger">
                    <span className='title-lg-menu'>
                        <Link to={'/'}>Trang chủ</Link>
                    </span>
                    <span>
                        Thành viên 
                    </span>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-4'>
                    <div className='avt-us-logged'>
                        <div className='avt-img'>
                            <img src={User} alt="" />
                        </div>
                        <button>
                            <FaPen />
                            Sửa hồ sơ
                        </button>
                    </div>
                    <div className='ul-menu-us-lg'>
                        <ul>
                            <li className='li-cha-us'>
                                <FaUserAlt className='FaUserAlt' />
                                <a onClick={handleShowULMenu}>Tài khoản của tôi</a>
                                {showUlMenu && (
                                    <ul className='li-con-us'>
                                        <li onClick={handleShowULMenu}>
                                            <a onClick={() => dispatch({type: "MY_ACCOUNT"})}>Hồ Sơ</a>
                                        </li>
                                        <li onClick={handleShowULMenu}>
                                            <a onClick={() => dispatch({type: "CHANGE_PASS"})}>Đổi mật khẩu</a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className='li-cha-us'>
                                <LuMenuSquare className='LuMenuSquare'/>
                                <a onClick={() => dispatch({type: "ORDERS"})}>Đơn mua</a>
                            </li>
                            <li className='li-cha-us'>
                                <PiBellSimpleRingingFill className='PiBellSimpleRingingFill'/>
                                <a onClick={() => dispatch({type: "NOTIFICATIONS"})}>Thông báo</a>
                            </li>
                            <li className='li-cha-us'>
                                <TbTicket className='TbTicket'/>
                                <a onClick={() => dispatch({type: "VOUCHERS"})}>Kho VouCher</a>
                            </li>
                            <li className='li-cha-us'>
                                <FaHeartCirclePlus className='FaHeartCirclePlus'/>
                                <a onClick={() => dispatch({type: "FAVORITES"})}>Sản phẩm yêu thích</a>
                            </li>
                            <li className='li-cha-us'>
                                <CiLogout className='CiLogout'/>
                                <Link onClick={onLogOut}>Đăng xuất</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-xl-9 col-lg-9 col-md-8'>
                    {state.activeComponent === "MY_ACCOUNT" && <div className="row right-body">
                        <div className="col-xl-12">
                            <h3>Hồ sơ của tôi</h3>
                        </div>
                        <div className="col-12 col-md-8 info-left">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Tên Đăng Nhập</label>
                                <input type="text" className="form-control" id="username" value={userData.username} placeholder="Tên Đăng Nhập" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Tên</label>
                                <input type="text" className="form-control" id="name" placeholder="Tên" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Số Điện Thoại</label>
                                <input type="text" className="form-control" id="phone" value={userData.phoneNumber} placeholder="Số điện thoại" />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="phone" className="form-label">Giới tính</label>
                                <div className='gender'>
                                    <span>Nam</span>
                                    <input type='radio' name='gender' value='male'></input>
                                    <span>Nữ</span>
                                    <input type='radio' name='gender' value='female'></input>
                                    <span>Khác</span>
                                    <input type='radio' name='gender' value='other'></input>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="phone" className="form-label">Ngày sinh</label> 
                                    <input type="date" className='date'/>
                            </div>
                            <button className='btn-save-infor'>Lưu</button>

                        </div>
                        <div className="col-12 col-md-4 text-center form-avt">
                            <img src={User} alt="Avatar" />
                            <button>Chọn Ảnh</button>
                        </div>
                    </div>
                }
                    <div className="row menureducer">
                        {state.activeComponent === "ORDERS" &&
                            <Orders />
                        }
                        {state.activeComponent === "NOTIFICATIONS" &&
                            <Notifications />
                        }
                        {state.activeComponent === "VOUCHERS" &&
                            <Vouchers />
                        }
                        {state.activeComponent === "FAVORITES" &&
                            <Favoriteproduct />
                        }
                        {state.activeComponent === "CHANGE_PASS" &&
                            <Changepass />
                        }

                    </div>
                </div>
            </div>
        </div>


        
    </div>
  )
}

export default UserIsLogged