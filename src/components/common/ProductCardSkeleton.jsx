import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';

function ProductCardSkeleton() {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.2}}
        exit={{opacity: 1}}
        className='sm:w-3/4 flex flex-col gap-4 items-center p-3'>
            <Skeleton width={225} height={200} borderRadius={10} />
            <Skeleton width={225} height={50} />
            <Skeleton width={125} height={40} />
            <Skeleton width={225} height={40} />
        </motion.div>
    )
}

export default ProductCardSkeleton