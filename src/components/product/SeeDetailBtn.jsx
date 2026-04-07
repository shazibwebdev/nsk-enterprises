import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function SeeDetailBtn({ id }) {
    return (
        <Link to={`/product/${id}`}>
            <motion.button
                initial={{ y: 0 }}
                whileTap={{ scale: 0.5 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeIn' }}
                className='head text-sm lg:text-[15px] secondary px-3 shadow-gray-500 py-2 font-bold tracking-widest text-white cursor-pointer rounded mt-2'>
                SEE DETAILS
            </motion.button>
        </Link>
    )
}

export default SeeDetailBtn

