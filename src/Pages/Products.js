import React, { useEffect, useState } from 'react'
import ProductItem from '../Component/ProductItem';
import getAll from '../Api/Products';

function Products() {

    const [products,setproducts] = useState([]);
    
    useEffect(() => {
        getAll()
        .then( data => {
            setproducts(data);
        })
        },[])

    return(
        <div>
            <h1>Products</h1>

            <div className='row'>
                {products.map( Product =>
                    <div key={Product.id} className='col-4'>
                        <ProductItem {...Product}/>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Products;
