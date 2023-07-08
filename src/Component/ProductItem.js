import React from 'react'
import { Link } from 'react-router-dom';

function ProductItem(props) {
    return(
        <div className="card mb-4">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.price}$</p>
                <Link to={"/products/" + props.id} className="btn btn-primary">Details</Link>
            </div>
        </div>
    )
}

export default ProductItem;