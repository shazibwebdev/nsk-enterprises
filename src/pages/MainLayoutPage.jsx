import React, { useEffect, useRef } from 'react'
import Navbar from '../components/layout/Navbar'
import { AnimatePresence } from 'framer-motion'
import CartSidebar from '../components/cart/CartSidebar'
import { Outlet, useLocation } from 'react-router-dom'
import { useCartContext } from '../contexts/CartContext'
import Footer from '../components/layout/Footer'
import { useAppContext } from '../contexts/AppContext'
import MobileMenu from '../components/layout/MobileMenu'

function MainLayoutPage() {

    const {
        isCartSbOpen,
        setIsCartSbOpen
    } = useCartContext()

    const {
        isMobileMenuOpen,
        setIsMobileMenuOpen
      } = useAppContext()

    let location = useLocation()

    useEffect(() => {
        setIsCartSbOpen(false);
    }, [location.pathname]);

    return (
        <>
            <Navbar />

            <AnimatePresence mode="wait">
                {
                    isCartSbOpen && <CartSidebar />
                }
            </AnimatePresence>

            <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />


            <div className='mt-[80px]'>
                <Outlet />
            </div>

            <Footer />

        </>
    )
}

export default MainLayoutPage