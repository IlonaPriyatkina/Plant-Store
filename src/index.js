import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/header/Header'
import reportWebVitals from './reportWebVitals'
import ShopGallery from './components/gallery/ShopGallery'
import Basket from './components/basket/Basket'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import SignUp from './components/signUp/SignUp'

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} />
        <Route path='/shop' element={<ShopGallery />} />
        {/* <Route path='/basket' element={<Basket />} /> */}
        <Route path='/registration' element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>,

  document.getElementById('root')
)

reportWebVitals()
