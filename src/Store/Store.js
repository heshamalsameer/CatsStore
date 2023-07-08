import {applyMiddleware, compose, legacy_createStore as createstore} from 'redux'
import thunk from 'redux-thunk'
import cartReducer from './reducer';
import throttle from 'lodash.throttle';

function loadState() {
    try{
        const state = localStorage.getItem('cart');

        if(state !==null) {
            return JSON.parse(state);
        }
        
    } catch(e) {

    }

    return {
        cart: []
    }
}

function saveState(state) {
    localStorage.setItem('cart',JSON.stringify(state));
}

const store = createstore(cartReducer,loadState(),compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

store.subscribe(throttle(() =>{
    saveState(store.getState());
}),2000)

export default store;