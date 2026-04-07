import React from 'react'
import { motion } from 'framer-motion'

function AboutOurStory() {
    return (
        <section className='min-h-[500px] text-center flex justify-center items-center flex-col gap-4'>
            <motion.h1
            initial={{opacity: 0, scale:0.8}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once:  true, amount: 0.75}}
            transition={{duration: 0.3}}
            className='w-[90%] head font-bold text-p text-4xl sm:text-5xl '
            >
                Our Story
            </motion.h1>

            <motion.p
                initial={{opacity: 0, scale:0.8}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once:  true, amount: 0.75}}
                transition={{duration: 0.3}}
                className='w-[90%] md:w-1/2 text-base sm:text-lg md:text-xl '
            >
                Founded in 2023, <strong className='accent-text'>NSK ENTERPRISES</strong> started with a simple mission — to bring premium products to your doorstep with zero hassle.
                Our journey began when we realized shopping online was often frustrating — delays, poor quality, and confusing service. We decided to change that by building a platform where customers come first.
            </motion.p>
        </section>
    )
}

export default AboutOurStory