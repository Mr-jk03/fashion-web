import React, { useEffect, useState, memo } from 'react';
import './Detail.css';
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { Link, useParams } from 'react-router-dom';
import DetailProducts from './DetailProducts/DetailProducts';
import SimilarProducts from './SimilarProducts/SimilarProducts';


const Detail = ({ onIncrease }) => {
    const [selectButton, setSelectButton] = useState(null);
    const { id, category } = useParams();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState(product?.image);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Mr-jk03/db/main/db.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                return response.json();
            })
            .then((data) => {
                // Lọc sản phẩm dựa trên id và category
                const productData = data[category]?.find(item => item.id === parseInt(id));
                if (productData) {
                    setProduct(productData);
                    setMainImage(productData.image);
                } else {
                    throw new Error('Product not found');
                }
                
            })
            .catch((error) => {
                console.error('Error fetching product:', error); 
            });
    }, [id, category]);
    

    const handleSizeClick = (size) => {
        setSelectButton(size);
    };

    const handleAddtoCart = () => {
        if (product) {
            onIncrease({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
            alert(`${product.name} đã được thêm vào giỏ hàng!`); // Thông báo cho người dùng
        }
    };

    const handleImageClick = (image) =>{
        setMainImage(image);
    }

    return (
        <div className='main-detail'>
            <div className='container'>
                <div className='row product-info'>
                    <div className='col-xl-6 col-lg-6 col-md-6 detail-img'>
                        <img src={mainImage} alt={product?.name} />
                        <div className='row img-description'>
                            {product?.images?.map((img, index) =>(
                                <div key={index} className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 img-des-con'>
                                    <img src={img}
                                        onClick={() => handleImageClick(img)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6'>
                        <div className='detail-text'>
                            <div className='product-name'>
                                <span>{product?.name}</span>
                            </div>
                            <span>Mã sản phẩm: {product?.id}</span>
                            <div className='row evalute'>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 evl-start'>
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStarOutline />
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 evl-text'>
                                    <span>136</span>
                                    <span>Đánh giá</span>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 evl-like'>
                                    <span>899</span>
                                    <span>Số lượt thích</span>
                                </div>
                            </div>
                            <div className='product-price'>
                                <span>{product?.price}<sup>đ</sup></span>
                            </div>
                            <div className='product-color'>
                                <div className='prd-color-text'>
                                    <span>Màu Sắc</span>
                                </div>
                                <div className='prd-color'>
                                    <span></span>
                                </div>
                            </div>
                            <div className='row product-size'>
                                <div className='col-xl-1 prd-size-text'>
                                    <span>Kích thước</span>
                                </div>
                                {product?.sizes?.map((size) => (
                                    <div className='col-xl-2 prd-size' key={size}>
                                        <button
                                            onClick={() => handleSizeClick(size)}
                                            style={{
                                                border: selectButton === size ? '1px solid #ed1c24' : 'none'
                                            }}
                                        >
                                            {size}
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <span className='size-caculation'>
                                <Link>Hướng dẫn tính size</Link>
                            </span>
                            <div className='buy-addcart'>
                                <div className='buy-product'>
                                    <button>Mua ngay</button>
                                </div>
                                <div className='addcart-product'>
                                    <button onClick={handleAddtoCart}>
                                        <TiShoppingCart />
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='detail-product'>
                {product && <DetailProducts product={product}/>}
            </div>
            <div className='similar-prd'>
                <SimilarProducts />
            </div>
        </div>
    );
};

export default memo(Detail);
