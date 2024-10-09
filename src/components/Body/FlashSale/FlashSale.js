import React, { useEffect, useState } from 'react'
import './FlashSale.css'
import {Link} from 'react-router-dom'
const FlashSale = () => {

  const[time, setTime] = useState({
    hours: 1,
    minutes: 30,
    seconds: 0
  });
  useEffect (() => {
    const timer = setInterval(() =>{
      setTime(prevTime =>{
        const {hours, minutes, seconds} = prevTime;

        if(seconds > 0){
          return{hours, minutes, seconds: seconds - 1};
        }else if(minutes > 0){
          return{hours, minutes: minutes - 1, seconds: 59};
        }else if(hours > 0){
          return{hours: hours - 1, minutes: 59, seconds: 59}
        }else{
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      }); 
    }, 1000)
    return () => clearInterval(timer);
  }, [])


  return (
    <div className='container row flash-sale-title '>
        <div className='col-xl-3 col-lg-5 col-md-5 col-sm-7 col-5 flash-sale-text '>
          <h2>
            <Link to='/'>Flash Sale</Link>
          </h2>
        </div>
        <div className='col-xl-6 col-sm-5 col-xs-3 flash-sale-countdown'>
          <span>{String(time.hours).padStart(2, '0')}</span>:
          <span>{String(time.minutes).padStart(2, '0')}</span>:
          <span>{String(time.seconds).padStart(2, '0')}</span>
        </div>
    </div>
  )
}
export default FlashSale
