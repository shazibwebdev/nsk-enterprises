import { useRef } from 'react'
import React from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'


function WhyChooseUsItem({ feature, icon }) {
    const ref = useRef(null)

    const {
        scrollYProgress
    } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const color = useTransform(scrollYProgress, [0, 0.3, 1], ['#FFFFFF', '#000000', '#000000'])

    return (
        <motion.li
            ref={ref}
            style={{ color }}
            className='why-choose-us-li relative flex justify-center gap-2 items-center
            
            '
        >


            <span className='flex items-center gap-[2px] text-5xl md:text-7xl'>
                <span className=''>{icon}</span>

                <span className='tracking-wide tall-font'>
                    <div className="flex gap-3 flex-wrap justify-center">
                        {feature.split(' ').map((word, wordIdx) => (
                            <div key={wordIdx} className="inline-flex gap-[1px]">
                                {Array.from(word).map((letter, idx) => (
                                    <motion.span
                                        key={idx}
                                        initial={{ scaleY: 1 }}
                                        whileHover={{ scaleY: 1.35 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut', }}
                                        className="inline-block"
                                        style={{ originY: 'top' }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </div>
                        ))}
                    </div>


                </span>
            </span>


        </motion.li>




    )
}

export default WhyChooseUsItem