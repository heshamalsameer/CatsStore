import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Header/>
      <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/products' exact element={<Products/>}/>
          <Route path='/products/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
    </BrowserRouter>
)}

function AppWithStore() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default AppWithStore;
