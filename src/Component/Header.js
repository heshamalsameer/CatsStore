import React from 'react'
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

function Header() {
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light mt-1 mb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand">CatsStore</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/products' className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/cart' className="nav-link">Cart</Link>
                            </li>
                        </ul>
                    </div>
                <CartIcon/>
                </div>
            </nav>
    )
}

export default Header;