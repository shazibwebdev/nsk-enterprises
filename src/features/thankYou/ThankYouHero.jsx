import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { useAuthContext } from '../../contexts/AuthContext'

function ThankYouHero() {

    const navigate = useNavigate()

    const {
        isAuthenticated
    } = useAuthContext()

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, delay: 0.3 } }
    }

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.3 }
        })
    }

    return (
        <div className='height flex justify-center items-center bg-gradient-to-br from-[#e0f7fa] to-[#fff] p-5'>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center gap-6 max-w-[500px] w-full'
            >

                {/* Checkmark Animation */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.3 }}
                    className='text-green-500'
                >
                    <CheckCircle2 size={80} />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    custom={1}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className='text-3xl font-bold text-center text-gray-800'
                >
                    Thank You for Your Order!
                </motion.h1>

                <motion.p
                    custom={2}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className='text-center text-gray-600'
                >
                    We appreciate your purchase. You will receive an email confirmation shortly.
                </motion.p>

                {/* Button */}
                <div className='flex flex-wrap gap-2 justify-center'>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/shop')}
                        className='cursor-pointer accent text-white px-6 py-3 rounded-full font-semibold shadow-md transition'
                    >
                        Continue Shopping
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/user-dashboard/overview')}
                        className='cursor-pointer primary text-white px-6 py-3 rounded-full font-semibold shadow-md transition'
                    >
                        Go to Dashboard
                    </motion.button>
                </div>


            </motion.div>
        </div>
    )
}

export default ThankYouHero
