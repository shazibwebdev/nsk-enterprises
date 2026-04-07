import React from 'react'
import { motion } from 'framer-motion'

function OverviewCard({ title, no }) {


    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className='h-[100px] flex cursor-pointer justify-center items-center rounded shadow-lg bg-gradient-to-tr from-blue-500 to-purple-500
             shadow-[gray]'>

            <div className='flex gap-2 items-center'>
                <h1 className=' font-bold text-lg'>
                    {title}
                </h1>

                <motion.span
                    whileHover={{ scale: 1.2 }}
                    className='w-[25px] h-[25px] bg-[green] text-white p-2 rounded-full
                flex justify-center items-center
                '>
                    {no}
                </motion.span>
            </div>
        </motion.div>
    )
}

export default OverviewCard