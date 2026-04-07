import React from 'react'
import { motion } from 'framer-motion'

function AnimatedPageEntryOnly({ children }) {

    const pageVariant = {
        rest: {
            opacity: 0,
            scale: 0.5,
            x: -50
        },
        in: {
            opacity: 1,
            scale: 1,
            x: 0
        },
    }

    return (
        <motion.div
            variants={pageVariant}
            initial={'rest'}
            animate={'in'}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPageEntryOnly