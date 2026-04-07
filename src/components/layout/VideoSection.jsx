import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import video2 from '../../assets/videos/Video-section-vid-2.mp4'

const VideoSection = () => {

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
            className="w-full py-20 flex flex-col items-center justify-center text-center overflow-hidden">
            <h2
                // initial={{ opacity: 0, y: 30 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.6 }}
                className="text-4xl head md:text-5xl font-bold text-white mb-4"
            >
                Timeless Jewelry
            </h2>

            <p
                // initial={{ opacity: 0, y: 30 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8 }}
                className="w-[90%] text-lg md:text-xl text-slate-300 max-w-2xl mb-10"
            >
                Elegant, handcrafted pieces designed to make every moment sparkle.
            </p>

            <div className="relative w-[90%] h-[50vh] md:h-[70vh] border-9 max-w-5xl rounded-xl overflow-hidden shadow-xl">
                <motion.video
                    src={video2}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >

                </motion.video>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
                    <h3 className="text-2xl md:text-5xl font-semibold text-white mb-4">
                        Where Elegance Meets Craftsmanship
                    </h3>
                    <p className="text-slate-200 text-base md:text-lg max-w-xl">
                        Discover premium rings, necklaces, and bracelets that reflect your style.
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default VideoSection;
