import React from 'react'
import { getById } from '../Api/Products';
import {addToCart} from '../Store/action/Actions'
import {connect} from 'react-redux';
import { useParams } from 'react-router';

function Product(props) {
    let params = useParams();
    let id = params.id;
    const [product,setproduct] = React.useState({});
    const [loading,setLoading] = React.useState(true);
    const [quantity,setquantity] = React.useState(0);

    getById(parseInt(id))
    .then(item => {
        setproduct(item);
        setLoading(false);
    });


    const handelquantity = (event)=>{
        if(event.target.value < 0 ) return;
        setquantity(event.target.value);
    }
    

function addToCart() {
    if (+quantity !== 0){
    props.addToCart(product,quantity);
    alert('Added to cart successfully');
}else {
    alert('Please choose the quantity before sending to the cart')
}

}

    if(loading)return 'loading...'
    
    return (
        <div>
            <div className='row'>
                <div className='col-6'>
                    <img className="card-img-top" src={product.image} alt='...' />
                </div>
                <div className='col-6'>
                    <h1>{product.name}</h1>
                    <p>Price: {product.price}$</p>
                    <p>{product.description}</p>
                    <br/><br/>

                    <input type="Number" value={quantity} onChange={handelquantity}/><br/>
                    <h5 className='mt-4 mb-4'>Total Price: {quantity * product.price} </h5>
                    <button className='btn btn-primary' onClick={addToCart}> Add to Cart</button>
                </div>
            </div>
        </div>
    )
    }

    const mapDispatshToprops = (dispatsh) => {
        return {
            addToCart : (productInfo,quantity) => dispatsh(addToCart(productInfo,quantity) )
        };
    }
    export default connect(null,mapDispatshToprops)(Product);
    