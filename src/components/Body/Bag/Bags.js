import React, { useEffect, useState } from 'react'
import './Bags.css'
import {Link} from 'react-router-dom'

const Bags = () => {
    const[products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3000/Bags')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error))
    })
  return (
    <>
        <hr></hr>
        <div className='title-best-saler'>balo thời trang</div>
        <div className='wrapper-best-saler'>
            <div className='row con-category'>
                {products.slice(0,4).map((product,index) =>(
                    <div className='col-lg-3 col-md-5 col-sm-5 categories' key={index}>
                        <Link to={`/detail/Bags/${product.id}`}>
                            <img src={product.image} alt={product.name}/>
                        </Link>
                        <div className='info-product'>
                            <div className='name-product'>
                                <span>{product.name}</span>
                            </div>
                            <div className='price-product balo'>
                                <span>{product.price.toLocaleString('en-US')}<sup>đ</sup></span>
                            </div>              
                        </div>           
                    </div>
                ))}
            </div>
            <div className='see-more-category'>
                <Link to='/bags'>Xem tất cả</Link>
            </div>
        </div>
    </>
  )
}
export default Bags
