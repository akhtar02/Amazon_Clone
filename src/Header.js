import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <div className = "header">
            <Link to ="/">
            <img className = "header_logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt =" " />
            </Link>
            <div className = "header_search">
                <input className = "header_searchInput" />
                <SearchIcon className ="header_searchIcon" />
            </div>
            
            <div className = "header_nav">
            <Link to ="Login">
                <span className = "header_optionLineOne">User</span>
                <psan className = "header_optionLineTwo">Login</psan>
            </Link>
            </div>
            <Link to='/orders'>
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              
            </span>
          </div>
        </Link>

        </div>
    )
}

export default Header
