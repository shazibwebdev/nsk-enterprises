import React, { useRef } from 'react'
import aboutVideo from '../../assets/videos/About-Video.mp4'
import { motion, useScroll, useTransform } from 'framer-motion'

function AboutVideo() {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const radius = useTransform(scrollYProgress, [0, 0.25, 0.4, 1], [250, 450, 1700, 1700])

    return (
        <div
            ref={ref}
            className='relative w-full h-[550px] overflow-hidden flex items-center justify-center'
        >
            {/* Background Video */}
            <video
                src={aboutVideo}
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-full object-cover object-center'
            ></video>

            <div className="absolute inset-0 bg-black/30 z-[2]"></div>

            {/* Transparent Growing Circle */}
            <motion.div
                style={{
                    width: radius,
                    height: radius,
                }}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent ring-[1000px] ring-white z-[3]'
            ></motion.div>
        </div>
    )
}

export default AboutVideo
