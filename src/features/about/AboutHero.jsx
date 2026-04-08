import { motion } from 'framer-motion'
import React from 'react'
import aboutHeroImg from '../../assets/images/About-hero-img.webp'

function AboutHero() {
    return (
        <header
            style={{ backgroundImage: `url(${aboutHeroImg})` }}
            className={`height bg-cover bg-center `}>

            {/* overlay */}
            <div className='w-full height bg-[#00000023] text-center flex justify-center items-center flex-col gap-3'>
                <motion.h1
                    className='w-[90%] head text-outline text-5xl  sm:text-5xl md:text-7xl leading-snug font-black'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.75, ease: 'easeIn', type: 'spring', stiffness: 50 }}
                >
                    <p>Empowering Your Lifestyle With</p>
                    <p className="text-p ">Quality Products</p>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5, ease: 'easeIn', type: 'spring', stiffness: 50 }}
                    className='text-base text-white sm:text-lg md:text-xl mb-5'
                >
                    We make online shopping effortless, fast, and trustworthy.
                </motion.p>

            </div>

        </header>
    )
}

export default AboutHero