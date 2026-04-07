import React from 'react'
import AddToCartBtn from '../cart/AddToCartBtn'
import SeeDetailEyeIcon from './SeeDetailEyeIcon'
import AddToCartIcon from '../cart/AddToCartIcon'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


function ProductCard({ id,
    title,
    image,
    price }) {


    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        animate: {
            opacity: 1, y: 0,
            transition: {
                duration: 0.3
            }
        },

    }

    return (

        <motion.div
            variants={cardVariants}
            initial='hidden'
            animate='animate'

            key={id}
            className='prod-card flex flex-col items-center gap-2 text-center rounded-2xl box-shadow p-2 py-4'>
            <div className='prod-img-cont w-full h-[300px] relative overflow-hidden rounded cursor-pointer'>
                <Link to={`/product/${id}`}>
                    <img src={image} className='border w-full h-full transition duration-300 object-cover' alt="" />
                </Link>
                <div className=' accent-text flex flex-col gap-2 text-xl  absolute top-2 right-2'>
                    <button className='bg w-[35px] h-[35px]   transition  duration-200 ease-in rounded-full shadow-md shadow-gray-500 cursor-pointer'>
                        <SeeDetailEyeIcon id={id} />
                    </button>

                    <button className='bg w-[35px] h-[35px]   transition  duration-300 ease-in rounded-full shadow-md shadow-gray-500 cursor-pointer'>
                        <AddToCartIcon id={id} />
                    </button>
                </div>
            </div>

            <h1 className='font-bold text-lg'>
                {title}
            </h1>

            <h3 className='text-xl text-p font-semibold'>
                {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </h3>


            <AddToCartBtn id={id} />



        </motion.div>
    )
}

export default ProductCard