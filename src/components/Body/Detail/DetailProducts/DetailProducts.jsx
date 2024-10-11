import React, { useState } from 'react'
import './DetailProducts.css'

const DetailProducts = ({product}) => {

    const [addClass, setAddclass] = useState('detail');

    const handleAddClass = (button) =>{
        setAddclass(button);
    }

  return (
    <div className='container'>
        <div className='row detail-nav'>
            <div className="col-xl-3 col-lg-4 col-md-5 col-8 detail-nav-button">
                <button
                    onClick={() =>handleAddClass('detail')}
                    className={addClass === 'detail' ? 'active' : ''}
                >Chi tiết sản phẩm</button>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-4 detail-nav-button">
                <button
                    onClick={() =>handleAddClass('comment')}
                    className={addClass === 'comment' ? 'active' : ''}
                >Bình Luận</button>
            </div>
        </div>
        <div className='row detail-body'>
            {addClass === 'detail' ?(
                <div>{product?.description}</div>
            ):(
                <div>Chưa có bình luận nào</div>
            )}
        </div>
    </div>
  )
}

export default DetailProducts
