import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import HeroImg1 from '../../assets/images/Hero1.webp'
import HeroImg2 from '../../assets/images/Hero2.webp'
import HeroImg3 from '../../assets/images/Hero3.webp'
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { easeIn, motion } from 'framer-motion'




function Header() {


    return (
        <>
            <header className='full height flex text-center justify-center items-end pb-10 sm:pb-24  relative '>


                {/* HERO MAIN */}
                <div className='w-[90%] lg:w-[95%] 2xl:w-[1360px] flex flex-col justify-between gap-5'>

                    {/* MAN */}
                    <motion.img
                        className='mask-fade-bottom w-[70%] md:w-[45%] lg:w-[30%] xl:w-[25%] absolute -translate-x-1/2 -translate-y-1/2 -z-1 left-1/2
                        top-[20%] sm:top-[30%] '
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [1.25, 1, 1, 1.25],
                        }}
                        transition={{
                            duration: 4,
                            times: [0, 0.15, 0.85, 1],
                            repeat: Infinity,
                            repeatDelay: 8,
                            ease: "easeIn",
                            delay: 4
                        }}
                        src={HeroImg2}
                        alt=""
                    />

                    {/* MONITOR */}
                    <motion.img
                        className='w-[80%] md:w-[55%] lg:w-[55%] xl:w-[35%] absolute -translate-x-1/2 -translate-y-1/2 -z-1 left-1/2
                        top-[20%] sm:top-[30%] xl:top-[40%]'
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [1.25, 1, 1, 1.25],
                        }}
                        transition={{
                            duration: 4,
                            times: [0, 0.15, 0.85, 1],
                            repeat: Infinity,
                            repeatDelay: 8,
                            ease: "easeIn",
                        }}
                        src={HeroImg1}
                        alt=""
                    />


                    {/* JEWELLERY */}
                    <motion.img
                        className='w-[80%] md:w-[50%] lg:w-[50%] xl:w-[35%] absolute -translate-x-1/2 -translate-y-1/2 -z-1 left-1/2
                        top-[20%] sm:top-[30%] xl:top-[40%]'
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [1.25, 1, 1, 1.25],
                        }}
                        transition={{
                            duration: 4,
                            times: [0, 0.15, 0.85, 1],
                            repeat: Infinity,
                            repeatDelay: 8,
                            ease: "easeIn",
                            delay: 8
                        }}
                        src={HeroImg3}
                        alt=""
                    />



                    <motion.h1
                        className='head text-outline w-full text-5xl  sm:text-5xl md:text-7xl leading-snug font-black'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1, ease: 'easeIn', type: 'spring', stiffness: 50 }}
                    >
                        <p className=' '>All Your Favorite Products</p>
                        <p className="text-p ">At One Place</p>
                    </motion.h1>

                    <motion.p className='w-full lg:w-1/3 text-xl text-left lg:text-2xl'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.2, ease: 'easeIn', type: 'spring', stiffness: 50 }}
                    >
                        Discover the best categories, deals, and products personalized for your needs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1.4, ease: 'easeIn', type: 'spring', stiffness: 50 }}
                        className=' flex fade-left gap-3'
                    >
                        <a href="#featured-categories">
                            <motion.button
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className='head text-sm lg:text-[15px] primary px-3 shadow-gray-500 py-2 font-bold tracking-widest text-white cursor-pointer rounded mt-4'>
                                GET STARTED
                            </motion.button>
                        </a>
                        <Link to={'/shop'}>
                            <motion.button
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className='head text-sm lg:text-[15px] accent px-3 shadow-gray-500 py-2 font-bold tracking-widest text-white cursor-pointer rounded mt-4'>
                                SHOP NOW
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>



            </header>
        </>

    )
}

export default Header