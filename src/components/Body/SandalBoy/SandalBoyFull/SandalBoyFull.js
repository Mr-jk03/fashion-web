import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const SandalBoyFull = () => {
    const[products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3000/SandalBoys')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error))
    })
  return (
    <div className='full'>

        <div className='title-best-saler'>dép và sandal nam</div>
        <div className='wrapper-best-saler'>
            <div className='row con-category'>
                {products.map((product,index) =>(
                    <div className='col-lg-3 col-md-5 col-sm-5 categories' key={index}>
                        <Link to='/'>
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
        </div>
        <hr></hr>
    </div>
  )
}
export default SandalBoyFull