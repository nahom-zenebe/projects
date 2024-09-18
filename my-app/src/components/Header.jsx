import React from 'react'
import './header.css'
import { IoBasketOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

function Header() {
  return (
    <div className="header">
      <img className='header_logo' alt='amazon image' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
 <div className='header_search'>
  <input className='header_searchInput' type='text'/>
  <IoMdSearch  className='header_searchIcon'/>
 </div>
 <div className='header_nav'>
  <div className='header_option' /*onClick={handleAuthentication}*/>
  <span className='header_optionLineOne'>Hello Guest</span>
  <span className='header_optionLineTwo'>Sign In</span>
  </div>

  <div className='header_option' /*onClick={handleAuthentication}*/>
  <span className='header_optionLineOne'>Returns</span>
  <span className='header_optionLineTwo'>& Orders</span>
  </div>

  <div className='header_option' /*onClick={handleAuthentication}*/>
  <span className='header_optionLineOne'>Your</span>
  <span className='header_optionLineTwo'>Prime</span>
  </div>
  <div className='header_optionBasket'>
  <IoBasketOutline className='basket' />
  <span className='header_optionLineTwo header_basketCount'>0</span>
  </div>

  
  </div>
    </div>
  )
}

export default Header