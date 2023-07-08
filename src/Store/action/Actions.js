import {AddToCart} from './Types'
import { DeletefromCart } from './Types'
import { clearCart } from './Types'

export function addToCart(productInfo,quantity) {

    return(
        {
            type: AddToCart,
            productInfo,
            quantity
        }
    )
}


export function CreatedeletefromCartAction(index) {
    return(
        {
            type: DeletefromCart, 
            index: index
        }
    )
}

export function deletefromCart(index) {
    return (dispatch) => {
        dispatch(CreatedeletefromCartAction(index))
    }
}

export function ClearCart() {

    return(
        {
            type: clearCart
        }
    )
}