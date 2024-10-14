import React, { useEffect, useState } from 'react'
import './SimilarProducts.css'
import {Link} from 'react-router-dom'



const SimilarProducts = () => {

    const [products, setProduct] = useState([]);

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/Mr-jk03/db/main/db.json')
        .then(response => response.json())
        .then(data =>{
            const FlaseSale = data.FlashSale
            setProduct(FlaseSale)})
        .catch(error => console.log('Error fetching products:', error))
    }, [])

  return (
    <div className='container main-similars'>
        <div className='container'>
            <span>CÓ THỂ BẠN CŨNG THÍCH</span>
            <div className='row'>
                {products.map((product,index) =>(
                    <div key={index} className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 sml-img'>
                        <Link to={`/detail/FlashSale/${product.id}`}>
                            <img src={product.image}/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}


export default SimilarProducts