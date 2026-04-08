import React from 'react'
import { motion, scale } from 'framer-motion'
import { useCartContext } from '../../contexts/CartContext'

function AddToCartBtn({id}) {

    const {
        ADD_ITEM
    } = useCartContext()
    return (
        <motion.button
            initial={{ y: 0 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            className='head text-sm lg:text-[15px] accent px-3  shadow-gray-500 py-2 font-bold tracking-widest text-white cursor-pointer rounded mt-2'
            onClick={()=>{ ADD_ITEM(id) }}
            >
            ADD TO CART
        </motion.button>
    )
}

export default AddToCartBtn