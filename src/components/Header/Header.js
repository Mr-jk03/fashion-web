import React, { useEffect, useRef, useState } from 'react'
// import Logo from './Logo/Logo'
import Logo from '../../components/Images/logoJK.png'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import User from './User/User'
import Cart from './Cart/Cart'
import MenuIcon from './MenuIcon/MenuIcon'
import './Header.css'
import MenuMobile from './Mobile/Menu/MenuMobile'
import SearchMobile from './Mobile/Search/SearchMobile'
import { Link } from 'react-router-dom';


const Header = () => {
    const searchMobile = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() =>{
        const handleResize = () =>{
            setIsMobile(window.innerWidth < 975);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return() =>{
            window.removeEventListener('resize', handleResize)
        };
    }, [])

    const handleMenuToggle = () =>{
        setMenuOpen(!menuOpen);
    }

    const handleToggleSearch = (show)=>{
        if(window.innerWidth > 1300){
            return;
        }

        if(show){
            searchMobile.current.classList.add("show")
        }else {
            searchMobile.current.classList.remove("show")
        }
    }
    const handleCloseSearchMobile = () =>{
        searchMobile.current.classList.remove("show");
    }

  return (
    <header className='header'>
        <div className='container'>
            <div className='row mobile'>{/*d_flex */}
                <div className="col-xl-3 col-lg-3 col-md-2 col-sm-6 col-6 left-item">
                    <div className="row">
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 menu-left-item'>
                            {isMobile && <MenuIcon onClick={handleMenuToggle} />}
                        </div>
                        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 logo'>
                            <Link to='/'>
                                <img src={Logo}/>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 nav-bar">
                    {!isMobile && <Navbar />}
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className='row'>
                        <div className= 'col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 right-center'>
                            <User />
                        </div>
                        <div className= 'col-xl-8 col-lg-4 col-md-4 col-sm-4 col-4 right-center'>
                            <Search onToggleSearch = {handleToggleSearch}/>
                        </div>
                        <div className= 'col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 right-center'>
                            <Cart />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className={`menu-mobile ${menuOpen ? 'open' : ''}`}>
            <MenuMobile menuOpen={menuOpen} onCloseMenu={handleMenuToggle}/>
        </div> 
        <div className='search-mobile-hd' ref={searchMobile}>
            <SearchMobile onCloseSearchMobile={handleCloseSearchMobile}/>
        </div>
    </header>
  )
}

export default Header
