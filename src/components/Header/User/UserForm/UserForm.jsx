import React, { useEffect, useState } from 'react'
import './UserForm.css'
const UserForm = () => {

    const [signUpInvisible, setSignUpInvisible] = useState(true);
    const [signinInvisible, setSignInInvisible] = useState(true);

    const handleShowSignupForm = () =>{
        setSignUpInvisible(true);
        setSignInInvisible(false);
    }

    const checkSizeWindow = () =>{
        if(window.innerWidth < 431){
            setSignUpInvisible(false);
            setSignInInvisible(true)
        }
        else{
            setSignUpInvisible(true);
            setSignInInvisible(true)   
        }
    }

    useEffect(() =>{
        checkSizeWindow();

        window.addEventListener('resize', checkSizeWindow);

        return(() =>{
            window.removeEventListener('resize', checkSizeWindow);
        });

    }, [])

  return (
    <div className='main-userform'>
        <div className="container main-form-us">
            <div className="row">
                {signinInvisible && <div className="col-xl-6 col-lg-6 col-md-6 sign-cha">
                        <div className='text-us'>
                            <span>ĐĂNG NHẬP</span>
                        </div>
                        <div className='input-info-us'>
                            <label>Tên đăng nhập</label>
                            <input type="text" />
                            <label>Mật khẩu</label>
                            <input type="text" />
                            <div className='row button-sign-forgot'>
                                <button className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>Đăng nhập</button>
                                <button className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>Quên mật khẩu ?</button>
                            </div>
                        </div>
                        <div className='br'>
                            <div></div>
                            <span>Hoặc</span>
                            <div></div>
                        </div>
                        <div className='button-forgot'>
                            <button onClick={handleShowSignupForm}>Đăng ký</button>
                        </div>
                        <div className='button-face-google'>
                            <button>Facebook</button>
                            <button>Google</button>
                        </div>
                        <span>
                            Nếu Quý khách có vấn đề gì thắc mắc hoặc cần hỗ trợ gì thêm có thể liên hệ: <br/>
                            Hotline: 0xxx xxx xxx<br/>
                            Hoặc Inbox: giangcuong0603@gmail.com
                        </span>
                    </div>
                }
                {signUpInvisible && <div className="col-xl-6 col-lg-6 col-md-6 sign-cha sign-up-cha">
                        <div className='text-us'>
                            <span>ĐĂNG KÝ</span>
                        </div>
                        <div className='input-info-us'>
                            <label>Tên đăng nhập</label>
                            <input type="text" />
                            <label>Số điện thoại</label>
                            <input type="text" />
                            <label>Mật khẩu</label>
                            <input type="text" />
                            <label>Nhắc lại mật khẩu</label>
                            <input type="text" />
                            <div className='row button-sign-forgot-dk'>
                                <button className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}
export default UserForm
