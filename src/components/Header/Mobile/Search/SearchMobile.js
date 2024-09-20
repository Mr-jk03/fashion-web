import React from 'react'
import '../Search/SearchMobile.css'
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const SearchMobile = ({onCloseSearchMobile}) => {
  return (
    <div className='search-mobile'>
       <div className='main-search'>
            <input className='input-search-mobile' type='text' placeholder='Tìm kiếm...'/>
            <button className='btn-search-mobile'>
                <FiSearch />
            </button>
       </div>
          <i className='close-search-mb' onClick={onCloseSearchMobile}>
            <IoClose />
          </i>
    </div>
  )
}
export default SearchMobile
