import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCartContext } from '../../contexts/CartContext'

import { IoClose } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuthContext } from '../../contexts/AuthContext';

function CartSidebar() {



    


    const {
        isCartSbOpen,
        setIsCartSbOpen,
        cartState,
        REMOVE_ITEM,
        QTY_INC,
        QTY_DEC,
        CLEAR_CART
    } = useCartContext()

    const {
        isAuthenticated
    } = useAuthContext()

    const navigate = useNavigate()

    const handleCheckout = () => {
        if (cartState.cart.length < 1) {
            toast.error('Your cart is empty!')
        }
        else if (!isAuthenticated) {
            toast.error('Please create an account first!')
            navigate('/login&SignUp')
        }
        else {
            navigate('/checkout')
        }
    }

    return (

        <motion.aside
            initial={{ opacity: 0, right: -300, scale: 0.5 }}
            animate={{ opacity: 1, right: 0, scale: 1 }}
            exit={{ opacity: 0, right: -300, scale: 0.5 }}
            transition={{ duration: 0.3, }}
            style={{ perspective: '5000px' }}
            className='w-[300px] h-[100vh] p-3 flex flex-col justify-between items-center gap-3 z-10 bg shadow-md shadow-[gray] fixed top-0 right-0'
        >
            <button
                className='w-max py-1 absolute top-3 right-3 flex rounded justify-center items-center transition duration-300 text-white text-2xl font-bold cursor-pointer accent'
                onClick={() => setIsCartSbOpen(false)}>
                <IoClose />
            </button>

            <h1 className='head text-xl font-bold'>
                Your Cart
            </h1>

            {/* CART ITEMS MAIN */}
            <div className='cart-main w-full h-[65vh] overflow-x-hidden overflow-y-scroll flex shadow  flex-col gap-2 items-center justify-start'>
                {/* <AnimatePresence mode='wait'> */}
                {
                    cartState.cart.length < 1 ?
                        <div>
                            No items to show
                        </div> :

                        cartState.cart.map((item, idx) => {
                            const {
                                id,
                                title,
                                image,
                                qty,
                                price
                            } = item
                            return (

                                <motion.div
                                    key={id}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 50, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: 'easeIn' }}
                                    className='w-full relative shadow-md flex gap-3 p-2 pr-7'>
                                    <button onClick={() => { REMOVE_ITEM(id) }} className='absolute top-2 text-xl cursor-pointer right-2'>
                                        <RxCross2 />
                                    </button>
                                    <img className='w-[50px] object-contain' src={image} alt="" />
                                    <div className='flex flex-col gap-1'>
                                        <h2 className='font-bold text-sm'>
                                            {title}
                                        </h2>
                                        <span>
                                            {Number(price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                        </span>

                                        {/* QUANTITY BUTTONS */}
                                        <div className='flex gap-2'>
                                            <button onClick={() => { QTY_DEC(id) }} className='accent cursor-pointer text-white px-1 rounded-full'>
                                                -
                                            </button>
                                            <p>
                                                {qty}
                                            </p>
                                            <button onClick={() => { QTY_INC(id) }} className='accent cursor-pointer text-white px-1 rounded-full'>
                                                +
                                            </button>

                                        </div>

                                    </div>

                                </motion.div>
                            )
                        })

                }
                {/* </AnimatePresence> */}
            </div>

            {/* CART BUTTONS */}
            <div className='w-full flex flex-col gap-2 items-center'>

                <button
                    className='primary p-1 transition duration-200 text-white rounded-full px-2 cursor-pointer'
                    onClick={() => { CLEAR_CART() }}>
                    Clear Cart
                </button>

                <p>
                    <span className='font-bold'>Sub Total: </span>
                    {new Intl.NumberFormat('en-US',
                        {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }
                    ).format(cartState.totalAmount)}
                </p>

                <p >
                    <span className='font-bold'>Total Quantity: </span>
                    {cartState.totalQty}
                </p>

                <button
                    onClick={() => { handleCheckout() }}
                    className='w-full cursor-pointer transition duration-200 accent px-2 py-1 text-white rounded '>
                    Proceed to Checkout
                </button>
            </div>




        </motion.aside>

    )
}

export default CartSidebar