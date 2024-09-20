import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import User from './User/User'
import Cart from './Cart/Cart'
import MenuIcon from './MenuIcon/MenuIcon'
import { Routes, Route } from 'react-router-dom';
import './Header.css'
import MenuMobile from './Mobile/Menu/MenuMobile'
import SearchMobile from './Mobile/Search/SearchMobile'


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
            <div className='row d_flex'>
                <div className='col-xl-2  menu-icon'>
                {isMobile && <MenuIcon onClick={handleMenuToggle} />}
                </div>
                <div className='col-xl-2 col-md-3 col-sm-5 col-xs-3 logo'>
                    <Logo/>
                </div>
                <div className='col-xl-6 col-md-6 navbar'>
                    {!isMobile && <Navbar />}
                    {/* <Routes>
                        <Route>
                            
                        </Route>
                    </Routes> */}
                </div>
                <div className='col-xl-2 col-md-1 col-sm-3 col-xs-2 search'>
                    <Search onToggleSearch = {handleToggleSearch}/>
                </div>
                <div className='col-xl-1 col-md-1 col-sm-2 col-xs-1 user'>
                    <User />
                </div>
                <div className='col-xl-1 col-md-1 col-sm-1 col-xs-1 cart'>
                    <Cart />
                </div>
                
            </div>
        </div>
        <div className={`menu-mobile ${menuOpen ? 'open' : ''}`}>
            <MenuMobile menuOpen={menuOpen} onCloseMenu={handleMenuToggle}/>
            {/* <Routes>

            </Routes> */}
        </div> 
        <div className='search-mobile-hd' ref={searchMobile}>
            <SearchMobile onCloseSearchMobile={handleCloseSearchMobile}/>
        </div>
    </header>
  )
}

export default Header
