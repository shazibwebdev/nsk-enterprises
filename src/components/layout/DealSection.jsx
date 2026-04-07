import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AddToCartBtn from '../cart/AddToCartBtn'
import products from '../../data/products'

const dealProd = products.find(p => p.id === 14)

const DealSection = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 0.475, 1], [0.75, 1, 1])
    const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], ['30px', '0px', '0px'])

    return (
        <motion.section
            ref={ref}
            style={{ scale, borderRadius }}
            className="sticky top-[60px] text-center flex flex-col items-center justify-center gap-1 px-4 md:px-8 lg:px-16 py-10"
        >
            {/* Header */}
            <div className="w-[90%] text-center">
                <h1 className=" head font-bold text-4xl sm:text-5xl leading-tight text-p">
                    🔥 Deal of The Day
                </h1>
                <p className="text-base sm:text-lg md:text-md text-neutral-600">
                    Don't miss out on our exclusive offers, valid for a limited time only.
                </p>
            </div>

            {/* Content */}
            <div className="w-[90%] flex flex-col md:flex-row items-center justify-center gap-1 md:gap-12 lg:gap-16">
                {/* Product Image */}
                <div className="w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] p-4 bg-white rounded-3xl flex items-center justify-center shadow-md">
                    <img
                        src={dealProd?.image}
                        alt={dealProd?.title}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-4 max-w-md">
                    <h2 className=" text-lg sm:text-xl lg:text-2xl font-bold text-neutral-800">
                        {dealProd?.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-700">
                        Experience immersive sound with <span className="font-semibold text-[#22c55e]">50% OFF</span> today only. Limited stock available.
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="text-2xl sm:text-3xl font-bold text-[#22c55e]">
                            {dealProd?.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </span>
                        <span className="text-lg sm:text-xl line-through text-neutral-500">
                            {dealProd && (dealProd.price * 2).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </span>
                    </div>

                    <AddToCartBtn id={dealProd?.id} />
                </div>
            </div>
        </motion.section>
    )
}

export default DealSection
