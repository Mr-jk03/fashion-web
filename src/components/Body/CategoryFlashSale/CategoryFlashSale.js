import React, { useEffect, useState } from 'react';
import './CategoryFlashSale.css';
import { Link } from 'react-router-dom';

const CategoryFlashSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Mr-jk03/db/main/db.json')
      .then(response => response.json())
      .then(data => {
        const bestSalser = data.FlashSale
        setProducts(bestSalser)})
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className='main-category-fl-sale'>
      <div className='row con-category'>
        {products.slice(0,4).map((product, index) => (
          <div className='col-lg-3 col-md-5 col-sm-5 col-5 categories' key={index}>
            <Link to={`/detail/FlashSale/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className='info-product'>
              <div className='price-product'>
                <span>{product.price.toLocaleString('en-US')} <sup>đ</sup></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='see-more-category'>
        <Link to='/'>Xem tất cả</Link>
      </div>
      <hr></hr>
    </div>
  );
};

export default CategoryFlashSale;
