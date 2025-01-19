import React from 'react'
import { FaSearch } from "react-icons/fa";


import './Searchbar.css'
const Searchbar = () => {
  return (
    <div className='search' style={{ 
      backgroundImage: `url("./img/search.png")` 
    }}>
 <div className='search-container'>
  <form>
    <input type='text'name="" placeholder='Search...' className='input' />
      <button className='button' type='submit'><FaSearch/>
</button>

  </form>
 </div>
    </div>
  )
}

export default Searchbar

