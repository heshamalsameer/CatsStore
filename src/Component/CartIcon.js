import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import "../App.css";

function CartIcon(props){
    return (
        <Link to={"/cart"}>
        <div className='cart-icon'>
            <i className='icon fa fa-shopping-cart'></i>
            <span className="badge bg-danger">{props.TotalQuantity}</span>
        </div>
        </Link>
    )
}

const mapStateToprops = (state) => {
    return {
        TotalQuantity: state.cart.reduce((total,item) => total + parseInt(item.quantity),0)
    };
}
export default connect(mapStateToprops)(CartIcon);