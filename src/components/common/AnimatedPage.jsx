import React from 'react'
import { motion } from 'framer-motion'

function AnimatedPage({ children }) {

    const pageVariant = {
        rest: {
            opacity: 0,
            scale: 0.9,
            x: -200
        },
        in: {
            opacity: 1,
            scale: 1,
            x: 0
        },
        out: {
            opacity: 0,
            scale: 0.9,
            x: 200
        },
    }

    return (
        <motion.div
            variants={pageVariant}
            initial={'rest'}
            animate={'in'}
            exit={'out'}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage