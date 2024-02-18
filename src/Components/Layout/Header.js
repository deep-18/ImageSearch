import React, { Fragment } from "react";
import "../../Style/header.css"

const Header = (isAuth) => {
    const guestLinks = (
        <div className="navbar-links">
            <a>Home</a>
            <a>Menu</a>
            <a>About</a>
            <a>Shop</a>
            <a>Blog</a>
            <a>Team</a>
            <a>Contact</a>
        </div>
    )
    return(
        <Fragment>
            <nav className="hero">
                <div className="logo"><b>Burger World</b></div>
                {guestLinks}
                <diV className="user-profile">{isAuth? <a>Login</a> : <a>Register</a>}</diV>
            </nav>
        </Fragment>
    )
}

export default Header;