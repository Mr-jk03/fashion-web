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
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
        const user = JSON.parse(localStorage.getItem(username));
        if (user && user.password === password) {
            setIsLognIn(true);
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('LoggedInUser', username);
            setUsername('');
            setPassword('');
        } else {
            alert('Tài khoản hoặc mật khẩu không chính xác!');
        }
    };

    const handleSignUp = () => {
        if (newPassword !== confirmPassword) {
            alert('Mật khẩu và xác nhận mật khẩu không khớp');
            return;
        }
        const existingUser = localStorage.getItem(newUsername);
        if (existingUser) {
            alert('Tên đăng nhập đã tồn tại');
        } else {
            const newData = { username: newUsername, phoneNumber: phoneNumber, password: newPassword };
            localStorage.setItem(newUsername, JSON.stringify(newData));
            alert('Đăng ký thành công');
            setUsername(newUsername);
            setPassword(newPassword);
            setIsLognIn(true);
        }
    };

    const handleLogout = () => {
        setIsLognIn(false);
        const loggedInUser = localStorage.getItem('LoggedInUser');
        if (loggedInUser) {
            localStorage.removeItem(`${loggedInUser}_cart`);
        }
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('LoggedInUser');
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
                <UserIsLogged onLogOut={handleLogout} isLogIn={isLogIn} />
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="main-userfrom">
                            <div className='userfrom-logo'>
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className='button-tab'>
                                <button onClick={handleSignInForm} className={addClass === 'SignIn' ? 'active' : ''}>
                                    ĐĂNG NHẬP
                                </button>
                                <button onClick={handleSignUpForm} className={addClass === 'SignUp' ? 'active' : ''}>
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
                                        <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                                        <label>Số điện thoại: </label>
                                        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                        <label>Mật Khẩu: </label>
                                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                        <label>Nhắc lại mật khẩu: </label>
                                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                        <button onClick={handleSignUp}>Đăng Ký</button>
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
