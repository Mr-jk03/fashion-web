import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import './Search.css'


const Search = ({onToggleSearch}) => {
  const handleShowSearch = ()=> {
    onToggleSearch(true);
  }
  return (
    <div className='search'>
        <input className='search-pc' type='text' placeholder='Tìm kiếm....'/>
        <button className='btn-search' onClick={handleShowSearch} >
            <FiSearch/>
        </button>
    </div>
  )
}
export default Search
