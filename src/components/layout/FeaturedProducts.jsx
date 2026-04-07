import React, { useRef } from 'react'
import FeaturedProductsSlider from '../product/FeaturedProductsSlider'
import { useScroll, motion, useTransform } from 'framer-motion'

function FeaturedProducts() {

    const ref = useRef(null)

    const {
        scrollYProgress
    } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 0.475, 1], [0.75, 1, 1])
    const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], ['30px', '0px', '0px'])

    return (
        <motion.section
            ref={ref}
            style={{ scale, borderRadius }}
            className=' sticky top-[60px] text-center flex flex-col items-center justify-center gap-3 '>

            <h1
                className='w-[90%] head font-bold text-p text-4xl md:text-5xl    '
            >
                Top Picks For You
            </h1>

            <p
                className='w-[90%] text-md md:text-xl mb-5'
            >
                High-quality. Best-selling. Trusted by thousands.
            </p>

            <div className='w-[90%]'>

            <FeaturedProductsSlider />
            </div>
        </motion.section>
    )
}

export default FeaturedProducts