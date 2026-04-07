import { motion } from 'framer-motion'
import React from 'react'


function ContactHero() {
    return (
        <header className='height bg-[url(src/assets/images/Contact-hero-img.webp)] bg-cover bg-bottom '>
            {/* overlay */}
            <div className='w-full height bg-[#00000079] text-center flex justify-center items-center flex-col gap-3'>
                <motion.h1
                    className='w-[90%] head text-outline text-5xl  sm:text-5xl md:text-7xl leading-snug font-black'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.75, ease: 'easeIn', type: 'spring', stiffness: 50 }}
                    >
                    <p>Get in </p>
                    <p className="text-p ">Touch</p>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5, ease: 'easeIn', type: 'spring', stiffness: 50 }}
                    className='text-base text-white sm:text-lg md:text-xl mb-5'
                >
                    Have questions, concerns, or just want to chat? Our team is ready to assist you with anything—from product queries to order support.
                </motion.p>

            </div>

        </header>
    )
}

export default ContactHero