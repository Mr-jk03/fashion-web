import React, { useEffect, useState } from 'react'
import './BestSaler.css'
import {Link} from 'react-router-dom'

const BestSaler = ({product}) => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/BestSaler')
        .then(response =>response.json())
        .then(data =>setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    },[])
  return (
    <>
        <div className='title-best-saler'>sản phẩm bán chạy</div>
        <div className='wrapper-best-saler'>
            <div className='row con-category'>
                {products.slice(0,4).map((product,index) =>(
                    <div className='col-lg-3 col-md-5 col-sm-5 categories' key={index}>
                        <Link to={`/detail/BestSaler/${product.id}`}>
                            <img src={product.image} alt={product.name}/>
                        </Link>
                        <div className='info-product'>
                            <div className='name-product'>
                                <span>{product.name}</span>
                            </div>
                            <div className='price-product best-saler'>
                                <span>{product.price.toLocaleString('en-US')}<sup>đ</sup></span>
                            </div>              
                        </div>           
                    </div>
                ))}
            </div>
            <div className='see-more-category'>
                <Link to='/bestsalerfull'>Xem tất cả</Link>
            </div>
        </div>
        <hr></hr>
    </>
  )
}
export default BestSaler