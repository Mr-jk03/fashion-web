import React from 'react'
import FlashSale from './FlashSale/FlashSale'
import './Body.css'
import CategoryFlashSale from './CategoryFlashSale/CategoryFlashSale'
import { Routes, Route } from 'react-router-dom'
import BestSaler from './BestSaler/BestSaler'
import WomenShoes from './WomenShoes/WomenShoes'
import Bags from './Bag/Bags'
import SandalGirl from './SandalGirl/SandalGirl'
import SandalBoys from './SandalBoy/SandalBoys'
import {Link} from 'react-router-dom'
import PhoneRing from '../../components/Images/icon-2.png'
const Body = () => {
  return (
    <div className='main-body'>
            <FlashSale />
            <CategoryFlashSale />
            <BestSaler />
            <WomenShoes />
            <Bags />
            <SandalGirl />
            <SandalBoys />
            {/* <Routes>
                
            </Routes> */}

            <div class="hotline-phone-ring">
              <div class="hotline-phone-ring-circle"></div>
              <div class="hotline-phone-ring-circle-fill"></div>
              <div class="hotline-phone-ring-img-circle">
                    <Link to='/'>
                      <img src={PhoneRing}/>
                    </Link>
              </div>
        </div>
    </div>
  )
}
export default Body
