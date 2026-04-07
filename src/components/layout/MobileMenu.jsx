import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { X, User, UserLock } from 'lucide-react';
import { useAuthContext } from '../../contexts/AuthContext';

const MobileMenu = ({ isOpen, setIsOpen }) => {
    const { isAuthenticated } = useAuthContext();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const menuVariant = {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: '100%', opacity: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        onClick={() => setIsOpen(false)}
                        className='fixed inset-0 bg-black/50 z-40'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Sidebar */}
                    <motion.div
                        variants={menuVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className='fixed top-0 right-0 w-[80vw] max-w-xs h-full bg-white z-50 shadow-lg flex flex-col p-6'
                    >
                        {/* Header */}
                        <div className='flex justify-between items-center mb-6'>
                            <h1 className='text-xl font-bold'>Menu</h1>
                            <button onClick={() => setIsOpen(false)}>
                                <X className='w-6 h-6' />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className='flex flex-col gap-4'>
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-lg font-medium hover:text-indigo-600 transition ${isActive ? 'text-indigo-600' : 'text-gray-700'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}

                            {/* Account Section */}
                            {isAuthenticated ? (
                                <Link
                                    to='/user-dashboard/overview'
                                    onClick={() => setIsOpen(false)}
                                    className='flex items-center gap-2 text-lg font-medium hover:text-indigo-600 text-gray-700'
                                >
                                    <User className='w-5 h-5' /> Dashboard
                                </Link>
                            ) : (
                                <Link
                                    to='/login&SignUp'
                                    onClick={() => setIsOpen(false)}
                                    className='flex items-center gap-2 text-lg font-medium hover:text-indigo-600 text-gray-700'
                                >
                                    <UserLock className='w-5 h-5' /> Login / Signup
                                </Link>
                            )}
                        </div>

                        {/* Footer */}
                        <div className='mt-auto pt-6 border-t'>
                            <p className='text-sm text-gray-400'>© 2025 NSK Enterprises</p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
