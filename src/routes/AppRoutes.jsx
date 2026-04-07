import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Shop from '../pages/ShopPage'
import About from '../pages/AboutPage'
import Contact from '../pages/ContactPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import CheckoutPage from '../pages/CheckoutPage'
import LoginSignUpPage from '../pages/LoginSignUpPage'
import UserDashboard from '../pages/UserDashboard'
import MainLayoutPage from '../pages/MainLayoutPage'
import HomePage from '../pages/HomePage'
import Orders from '../components/user dashboard/Orders'
import Overview from '../components/user dashboard/Overview'
import Profile from '../components/user dashboard/Profile'
import ShopPage from '../pages/ShopPage'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
import ThankYouPage from '../pages/ThankYouPage'

function AppRoutes() {
  const location = useLocation()

  return (

    <LayoutGroup>

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          <Route path='/' element={<MainLayoutPage />}>
            <Route index element={<HomePage />}></Route>
            <Route path='/shop' element={<ShopPage />}></Route>
            <Route path='/product/:id' element={<ProductDetailPage />}></Route>
            <Route path='/checkout' element={<CheckoutPage />}></Route>
            <Route path='/login&SignUp' element={<LoginSignUpPage />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/thankYou' element={<ThankYouPage />}></Route>
          </Route>


          {/* USER DASHBOARD ROUTE AND NESTED ROUTING */}
          <Route path='/user-dashboard' element={<UserDashboard />}>
            <Route path='overview' element={<Overview />}></Route>
            <Route path='orders' element={<Orders />}></Route>
            <Route path='profile' element={<Profile />}></Route>
          </Route>



        </Routes>
      </AnimatePresence>


    </LayoutGroup>

  )
}

export default AppRoutes