import React, { useState } from 'react'
import './BodyCart.css'
import {Link} from 'react-router-dom'
import fls1 from '../../Images/fls1.jpg'

const BodyCart = ({cartItems, setCartItems, onDelete }) => {

    const initialQuantities = cartItems.reduce((acc, item) => {
        acc[item.id] = 1; 
        return acc;
    }, {});
    const [quantities, setQuantities] = useState(initialQuantities);

    const handleDelete = (id) => {
        setQuantities((prevQuantities) => {
            const newQuantity = prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1;
            return { ...prevQuantities, [id]: newQuantity };
        });
    };

    const handleAdd = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1,
        }));
    };

    const TotalPrice = cartItems.reduce((acc, item) =>{
        return acc + item.price * quantities[item.id];
    }, 0)

    const handleRemoveItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems); 
        onDelete();
    };
  
  return (
    <div className='main-body-cart'>
        <div className='address'>
            <div className="container">
                <Link to={'/'}>Trang chủ</Link>
                <span className='text-cart'>Giỏ hàng</span>
            </div>
        </div>
        <div className="container">
            <div className="row tb-head">
                <div className='col-xl-5 col-lg-4'>Sản phẩm</div>
                <div className='col-xl-2 col-lg-2'>Đơn giá</div>
                <div className='col-xl-3 col-lg-2'>Số lượng</div>
                <div className='col-xl-1 col-lg-2'>Thành tiền</div>
                <div className='col-xl-1 col-lg-2'>Thao tác</div>
            </div>
            {cartItems.map((item, index) => (
                    <div className="row tb-body" key={index}>
                        <div className='col-xl-5 col-lg-4'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-4 col-md-2 col-sm-2 col-4 tb-body-img'>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className='col-xl-9 col-lg-8 col-md-10 col-sm-10 col-8 tb-body-text'>
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2'>{item.price} <sup>đ</sup></div>
                        <div className='col-xl-3 col-lg-2'>
                            <div className="quantity-input">
                                <button onClick={() => handleDelete(item.id)}>-</button>
                                <input 
                                    type="number" 
                                    value={quantities[item.id]} 
                                    className='input-total-pr' 
                                    readOnly 
                                />
                                <button onClick={() => handleAdd(item.id)}>+</button>
                            </div>
                        </div>
                        <div className='col-xl-1 col-lg-2 tt'>{item.price * quantities[item.id]} <sup>đ</sup></div>
                        <div className='col-xl-1 col-lg-2 btn-delete-cart'>
                            <button onClick={() => handleRemoveItem(item.id)}>Xoá</button>
                        </div>
                    </div>
                ))}

            <div className='row total-price-cart'>
                <div className="col-xl-6 col-lg-6"></div>
                <div className="col-xl-6 col-lg-6">
                    <div className='span-total'>
                        <span>Tổng tiền hàng</span>
                        <span>{TotalPrice.toLocaleString()} <sup>đ</sup></span>
                    </div>
                    <div className='span-total'>
                        <span>Giảm giá sản phẩm</span>
                        <span>-00 <sup>đ</sup></span>
                    </div>
                    <div className='span-total'>
                        <span>Khuyến mãi</span>
                        <span>0 <sup>%</sup></span>
                    </div>
                    <div className='span-total'>
                        <span>Phí vận chuyển</span>
                        <span>-00 <sup>đ</sup></span>
                    </div>
                    <div className='span-total-price'>
                        <span>TỔNG</span>
                        <span>{TotalPrice.toLocaleString()} <sup>đ</sup></span>
                    </div>
                </div>
            </div>
            <div className='row transport'>
                <div className="col-xl-12 transport-title">
                    <span>THÔNG TIN VẬN CHUYỂN</span>
                </div>
                <div className="col-xl-4 col-lg-4 input-np">
                    <input type="text" placeholder='Họ tên'/>
                </div>
                <div className="col-xl-4 col-lg-4 input-np">
                    <input type="text" placeholder='SĐT'/>
                </div>
                <div className="col-xl-4 col-lg-4"></div>
                <div className="col-xl-12 tp-address">
                    <textarea name="" placeholder='Địa chỉ nhận hàng' id=""></textarea>
                </div>

                <div className="col-xl-4 col-lg-4 tp-select">
                    <select name="" id="">
                        <option selected>-- Chọn tỉnh --</option>
                    </select>
                </div>
                <div className="col-xl-4 col-lg-4 tp-select">
                    <select name="" id="">
                        <option selected>-- Chọn Quận/huyện --</option>
                    </select>
                </div>
                <div className="col-xl-4 col-lg-4 tp-select">
                    <select name="" id="">
                        <option selected>-- Chọn Xã/phường --</option>
                    </select>
                </div>
                <div className='col-xl-12 tp-buton'>
                    <button>Đặt hàng</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default BodyCart