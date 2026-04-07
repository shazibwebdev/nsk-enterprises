import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ContactSchema } from '../../schemas/ContactSchema'


function ContactForm() {


    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        resolver: yupResolver(ContactSchema),

    })

    const onsubmit = (data) => {
        console.log('contact form data:', data);

    }


    const inputVariants = {
        initial: {
            opacity: 0,
            y: 50,
            scale: 1.2
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section className='bg-[#e1e8eb] height flex flex-col justify-center items-center gap-4'>
            <motion.h1
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='head font-bold text-4xl md:text-5xl text-p'>
                Contact Form
            </motion.h1>

            {/* CONTACT FORM */}
            <form
                onSubmit={handleSubmit(onsubmit)}
                className='w-[90%]  sm:w-3/4 md:w-1/2 flex flex-col items-center gap-3 md:gap-5'>

                {/* NAME */}
                <motion.div
                    variants={inputVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}
                    className='w-full flex flex-col gap-1'>
                    <label htmlFor="name">
                        Name *
                    </label>
                    <input
                        {...register('name')}
                        className='w-full h-[40px] rounded pl-2 border-2 border-[gray]'
                        placeholder='Enter your Name...' type="text" id="name" />
                    {errors.name && (<p className='text-[red] text-sm'>{errors.name.message}</p>)}
                </motion.div>

                {/* EMAIL */}
                <motion.div
                    variants={inputVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}

                    className='w-full flex flex-col gap-1'>
                    <label htmlFor="email">
                        E-mail *
                    </label>
                    <input
                        {...register('email')}
                        className='w-full h-[40px] rounded pl-2 border-2 border-[gray]'
                        placeholder='Enter your Email...' type="text" id="email" />
                    {errors.email && (<p className='text-[red] text-sm'>{errors.email.message}</p>)}
                </motion.div>

                {/* PHONE */}
                <motion.div
                    variants={inputVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}

                    className='w-full flex flex-col gap-1'>
                    <label htmlFor="phone">
                        Phone No. (Optional)
                    </label>
                    <input
                        {...register('phone')}
                        className='w-full h-[40px] rounded pl-2 border-2 border-[gray]'
                        placeholder='Enter your Phone no...' type="text" id="phone" />
                    {errors.phone && (<p className='text-[red] text-sm'>{errors.phone.message}</p>)}
                </motion.div>

                {/* SUBJECT */}
                <motion.div
                    variants={inputVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}

                    className='w-full flex flex-col gap-1'>
                    <label htmlFor="subject">
                        Subject *
                    </label>
                    <input
                        {...register('subject')}
                        className='w-full h-[40px] rounded pl-2 border-2 border-[gray]'
                        placeholder='Enter Subject...' type="text" id="subject" />
                    {errors.subject && (<p className='text-[red] text-sm'>{errors.subject.message}</p>)}
                </motion.div>

                {/* MESSAGE */}
                <motion.div

                    variants={inputVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}
                    className='w-full flex flex-col gap-1'>
                    <label htmlFor="message">
                        Message *
                    </label>

                    <textarea
                        {...register('message')}
                        className='w-full h-[150px] rounded pl-2 border-2 border-[gray]'
                        placeholder='Enter your Message...' id='message' ></textarea>
                    {errors.message && (<p className='text-[red] text-sm'>{errors.message.message}</p>)}
                </motion.div>

                <button type='submit'
                    className='accent text-white text-2xl px-2 py-1 rounded cursor-pointer transition duration-300 ease-in-out'
                >
                    Submit
                </button>

            </form>
        </section>
    )
}

export default ContactForm