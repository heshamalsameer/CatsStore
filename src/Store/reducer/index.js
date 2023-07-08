import { AddToCart,DeletefromCart,clearCart } from "../action/Types";

export default function cartReducer(state,action){

    switch(action.type) {
        case AddToCart:
            return {
                cart : [
                    ...state.cart,
                    {
                        product : action.productInfo,
                        quantity : action.quantity
                    }
                ]
            }
        case DeletefromCart :{
            const item = action.index;
            const newStata = {...state};
            newStata.cart.splice(item,1);
            return newStata;
        }
        case clearCart:{
            const newStata = {...state};
            newStata.cart = [];
            return newStata;
        }
        default :
        return state
    }
}