import React from 'react'
import './Header.css'
// import logo from '../images/amazon-logo.png';
import {Link} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import  {useStateValue} from './StateProvider'
function Header() {
    const [{user}] = useStateValue();
    return (
        <nav className='header'>
            <Link to='/'>
            <img className="header__logo" src="
https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Logo" />
            </Link>

            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
            <Link to='/login' className='header__link'>
            <div className="header__option">
            <span className="header__optionLineOne" >Hello,{user}</span>
            <span className="header__optionLineTwo">Sign In</span>
            </div>
            </Link>

            <Link to='/' className='header__link'>
            <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">Orders</span>
            </div>
            </Link>

            <Link to='/login' className='header__link'>
            <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            </div>
            </Link>

           <Link to="/checkout"  className='header__link'>
               <div className="header__optionBasket">
                <ShoppingBasketIcon/>
                <span className="header__optionLineTwo header__BasketCount">{basket?.length}</span>
               </div>
           </Link>




            </div>

            
        </nav >
    )
}

export default Header
