import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { motion } from 'framer-motion'

function ProductDetailSkeleton() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='w-[90%] height m-auto flex flex-col sm:flex-row items-center justify-center gap-5'
        >
            {/* IMAGE SKELETON */}
            <div className='max-h-[50vh] sm:max-h-[70vh] max-w-[150px] sm:max-w-[250px] w-full'>
                <Skeleton height='100%' width='100%' borderRadius={12} />
            </div>

            {/* TEXT SKELETON */}
            <div className='sm:w-1/2 w-full flex flex-col gap-4 mt-6 sm:mt-0'>
                <Skeleton height={30} width='80%' />
                <Skeleton height={20} width='40%' />
                <Skeleton height={100} width='100%' />
                <Skeleton height={25} width='60%' />
                <Skeleton height={30} width='50%' />
                <Skeleton height={45} width='50%' borderRadius={10} />
            </div>
        </motion.section>
    )
}

export default ProductDetailSkeleton
