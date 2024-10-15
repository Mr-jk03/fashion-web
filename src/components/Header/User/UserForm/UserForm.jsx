// import { useState, useEffect } from 'react';
import './UserForm.css';
import logo from '../../../Images/logoJK.png'
import { useState } from 'react';

const UserForm = () => {
    
    const [signInForm, setSignInForm] = useState(true);
    const [signUpForm, setSignUpForm] = useState(false);
    const [addClass, setAddClass] = useState('SignIn');

    const handleSignInForm = () =>{
        setSignInForm(true);
        setSignUpForm(false);
        setAddClass('SignIn')
    }

    const handleSignUpForm = () =>{
        setSignUpForm(true);
        setSignInForm(false);
        setAddClass('SignUp')
    }


    return (
        <div className='main-userform'>
            <div className="container">
                <div className="row">
                    <div className="main-userfrom">
                        <div className='userfrom-logo'>
                            <img src={logo}/>
                        </div>
                        <div className='button-tab'>
                            <button 
                                onClick={handleSignInForm}
                                className={addClass === 'SignIn' ? 'active' : ''}
                            >
                                ĐĂNG NHẬP
                            </button>
                            <button 
                                onClick={handleSignUpForm}
                                className={addClass === 'SignUp' ? 'active' : ''}
                            >
                                ĐĂNG KÝ
                            </button>
                        </div>
                        <div className='main-input'>
                            {signInForm &&
                            <div className='formSignIn'>
                                <lable>Tên đăng nhập: </lable>
                                <input type="text" />
                                <lable>Mật Khẩu: </lable>
                                <input type="text" />
                                <button>Đăng Nhập</button>
                            </div>
                            }
                            {signUpForm &&
                            <div className='formSignUp'>
                                <lable>Tên đăng nhập: </lable>
                                <input type="text" />
                                <lable>Số điện thoại: </lable>
                                <input type="text" />
                                <lable>Mật Khẩu: </lable>
                                <input type="text" />
                                <lable>Nhắc lại mật Khẩu: </lable>
                                <input type="text" />
                                <button>Đăng Ký</button>
                            </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
