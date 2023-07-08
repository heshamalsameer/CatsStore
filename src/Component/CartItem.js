import React from 'react';
import { deletefromCart } from '../Store/action/Actions';
import { connect } from 'react-redux';

function CartItem(props) {

    return(
        <div className="card mb-4">
            <img src={props.product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.product.name}</h5>
                <p>
                {props.product.price}$<br/>
                Quantity: {props.quantity} <br/>
                Total: {props.product.price * props.quantity}
                </p>
                <button className="btn btn-danger " onClick={() => props.deletefromCart(props.index)}>
                    <i className='fa fa-trash me-2' />Delete
                </button>
            </div>
        </div>
    )
}


export default connect(null,{deletefromCart})(CartItem);