// import { useState, useEffect } from 'react';
import './UserForm.css';
import logo from '../../../Images/logoJK.png';
import React, { useState, useEffect } from 'react';
import UserIsLogged from '../UserIsLogged/UserIsLogged';

const UserForm = () => {
    const [signInForm, setSignInForm] = useState(true);
    const [signUpForm, setSignUpForm] = useState(false);
    const [addClass, setAddClass] = useState('SignIn');

    const [isLogIn, setIsLognIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignInForm = () => {
        setSignInForm(true);
        setSignUpForm(false);
        setAddClass('SignIn');
    };

    const handleSignUpForm = () => {
        setSignUpForm(true);
        setSignInForm(false);
        setAddClass('SignUp');
    };

    const handleLogin = () => {
        if (username === 'cuong' && password === '12345') {
            setIsLognIn(true);
            localStorage.setItem('isLoggedIn', true);
        } else {
            alert('Tài khoản mật khẩu không chính xác !');
        }
    };

    const handleLogout = () => {
        setIsLognIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    useEffect(() => {
        const LoggedIn = localStorage.getItem('isLoggedIn');
        if (LoggedIn) {
            setIsLognIn(true);
        }
    }, []);

    return (
        <div className='main-userform'>
            {isLogIn ? (
                <UserIsLogged onLogOut={handleLogout} username={username} />
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="main-userfrom">
                            <div className='userfrom-logo'>
                                <img src={logo} alt="Logo" />
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
                                {signInForm && (
                                    <div className='formSignIn'>
                                        <label>Tên đăng nhập: </label>
                                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                                        <label>Mật Khẩu: </label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <button onClick={handleLogin}>Đăng Nhập</button>
                                    </div>
                                )}
                                {signUpForm && (
                                    <div className='formSignUp'>
                                        <label>Tên đăng nhập: </label>
                                        <input type="text" />
                                        <label>Số điện thoại: </label>
                                        <input type="text" />
                                        <label>Mật Khẩu: </label>
                                        <input type="password" />
                                        <label>Nhắc lại mật Khẩu: </label>
                                        <input type="password" />
                                        <button>Đăng Ký</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserForm;
