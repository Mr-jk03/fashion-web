import React, { useEffect, useState, memo } from 'react';
import './Detail.css';
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { Link, useParams } from 'react-router-dom';

const Detail = ({ onIncrease }) => {
    const [selectButton, setSelectButton] = useState(null);
    const { id, category } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); // Trạng thái loading
    const [error, setError] = useState(null); // Trạng thái lỗi

    useEffect(() => {
        fetch(`http://localhost:3000/${category}/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                return response.json();
            })
            .then((data) => {
                setProduct(data);
                setLoading(false); // Dừng trạng thái loading
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
                setError(error.message);
                setLoading(false); // Dừng trạng thái loading
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

    if (loading) return <div>Loading...</div>; // Hiển thị trạng thái loading
    if (error) return <div>Error: {error}</div>; // Hiển thị lỗi nếu có

    return (
        <div className='main-detail'>
            <div className='container'>
                <div className='row product-info'>
                    <div className='col-xl-6 col-lg-6 col-md-6 detail-img'>
                        <img src={product?.image} alt={product?.name} />
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6'>
                        <div className='detail-text'>
                            <div className='product-name'>
                                <span>{product?.name}</span>
                            </div>
                            <span>Mã sản phẩm: {product?.id}</span>
                            <div className='evalute'>
                                <div className='evl-start'>
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStarOutline />
                                </div>
                                <div className='evl-text'>
                                    <span>136</span>
                                    <span>Đánh giá</span>
                                </div>
                                <div className='evl-like'>
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
                            <div className='product-size'>
                                <div className='prd-size-text'>
                                    <span>Kích thước</span>
                                </div>
                                {[45, 46, 47].map((size) => (
                                    <div className='prd-size' key={size}>
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
        </div>
    );
};

export default memo(Detail);
