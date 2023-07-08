import React from 'react'
import CartItem from '../Component/CartItem';
import {connect} from 'react-redux';
import { ClearCart } from '../Store/action/Actions';


class Cart extends React.Component{


    placeOrder = () => {
        //send the request to the server(backend)
        //clear cart
        this.props.clearCart();
        
        alert('We recieved your order,and we are working on it..')
    }
    render(){
    return(
        <div>
            <h1>Cart</h1>
            <p>you have {this.props.TotalQuantity} items in your shopping cart</p>

            <div className='row'>
                {this.props.CartItem.map(( item,index)=>
                    <div key={index} className='col-3'>
                        <CartItem {...item} index={index}/>
                    </div>
                )}
            </div>

            <h3>
                TotalPrice: {this.props.TotalPrice}$
            </h3><br/>

            <button className='btn btn-primary btn-block' style={{width :'100%'}} onClick={() => this.placeOrder()}>
                Place Order
            </button>

        </div>


    )
}
}

const mapDispatshToprops = (dispatsh) => {
    return {
        clearCart : () => dispatsh(ClearCart())
    };
}

const mapStateToprops = (state) => {
    return {
        CartItem : state.cart,
        TotalQuantity: state.cart.reduce((total,item) => total + parseInt(item.quantity),0),
        TotalPrice: state.cart.reduce((total,item) => total + item.product.price * item.quantity,0)
    };
}
export default connect(mapStateToprops,mapDispatshToprops)(Cart);
