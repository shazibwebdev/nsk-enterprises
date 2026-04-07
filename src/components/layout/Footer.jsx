import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const footerVariants = {
    hidden: { opacity: 0.5, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
            staggerChildren: 0.2,
        },
    },
}

const Footer = () => {
    return (
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full bg-neutral-950 text-neutral-300"
        >
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <motion.div variants={footerVariants} className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-white">NSK Enterprises</h2>
                    <p className="text-sm text-neutral-400">
                        Delivering premium products with unmatched quality and trust. Your satisfaction is our priority.
                    </p>
                    <h2 className="hover:text-white text-[lightgray] text-sm uppercase">Director: Muhammad Shafiq Mustfai</h2>
                    <h2 className="hover:text-white text-[lightgray] text-sm ">Contact: <span className='cursor-pointer'>0322-7861858</span></h2>
                    <h2 className="hover:text-white text-[lightgray] text-sm ">Address: F#9, Sanawar Centre, Morr Samanabad,Lahore.</h2>
                    <div className="flex gap-4 mt-2">
                        <Link to="#">
                            <Facebook className="hover:text-white" size={20} />
                        </Link>
                        <Link to="#">
                            <Instagram className="hover:text-white" size={20} />
                        </Link>
                        <Link to="#">
                            <Twitter className="hover:text-white" size={20} />
                        </Link>
                        <Link to="#">
                            <Linkedin className="hover:text-white" size={20} />
                        </Link>
                    </div>

                </motion.div>


                {/* Support Links */}
                <motion.div variants={footerVariants} className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold text-white">Support</h3>
                    <Link to="#" className="hover:text-white text-sm">FAQs</Link>
                    <Link to="#" className="hover:text-white text-sm">Shipping Info</Link>
                    <Link to="#" className="hover:text-white text-sm">Returns</Link>
                    <Link to="#" className="hover:text-white text-sm">Order Status</Link>
                </motion.div>

                {/* Company Links */}
                <motion.div variants={footerVariants} className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold text-white">Company</h3>

                    <Link to="/about" className="hover:text-white text-sm">About Us</Link>
                    <Link to="#" className="hover:text-white text-sm">Careers</Link>
                    <Link to="#" className="hover:text-white text-sm">Blog</Link>
                    <Link to="/contact" className="hover:text-white text-sm">Contact</Link>

                </motion.div>
                <motion.div variants={footerVariants} className="flex flex-col gap-4">
                    
                </motion.div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-neutral-700 py-6 text-center text-sm text-neutral-500">
                © {new Date().getFullYear()} NSK Enterprises. All rights reserved.
            </div>
        </motion.footer>
    )
}

export default Footer
