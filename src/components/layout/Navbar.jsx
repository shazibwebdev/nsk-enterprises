import React, { useEffect, useRef, useState } from 'react';
import logo from "../../assets/images/NSK-ENTERPRISES-Logo.png";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useCartContext } from '../../contexts/CartContext';
import { FaRegUser } from "react-icons/fa";
import { useAuthContext } from '../../contexts/AuthContext';
import { UserLock } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { useAppContext } from '../../contexts/AppContext';
// import { Classic } from "@theme-toggles/react"



function Navbar() {




  const {
    setIsCartSbOpen,
    cartState
  } = useCartContext()

  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen
  } = useAppContext()

  const {
    isAuthenticated
  } = useAuthContext()

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {

    const HandleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', HandleScroll)

    return (
      () => {
        window.removeEventListener('scroll', HandleScroll)
      }
    )
  }, [])


  const navVariant = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        // delayChildren: 0.1,
        // staggerChildren: 0.2
      }
    },
    exit: { y: -30, opacity: 0 }

  }

  // const navChildVariant = {
  //   initial: { opacity: 0, y: -60 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.3, ease: 'ease' },
  // }




  return (
    <motion.nav
      className={`${isScrolled ? 'bg h-[60px] shadow-md' : 'h-[80px]'} transition-all duration-300 w-full 2xl:w-[1536px] px-5 md:px-10 left-1/2 -translate-x-1/2 fixed z-5 flex justify-between items-center `}
      variants={navVariant}
      initial='initial'
      animate='animate'
      exit={'exit'}
    >

      {/* Logo */}
      <motion.div
        className='h-full flex'
      // variants={navChildVariant}

      >
        <NavLink className=' nav-ele fade-down flex items-center' to='/'>
          <img className='h-full object-contain rounded cursor-pointer' src={logo} alt="Logo" />
          <h1 className='text-xl font-semibold hidden sm:flex accent-text'>
            NSK ENTERPRISES
          </h1>
        </NavLink>
      </motion.div>







      {/* Page Links */}
      <motion.ul
        className='hidden  sm:flex nav-ele fade-down gap-6 text-lg'
      // variants={navChildVariant}

      >

        {['Home', 'Shop', 'About', 'Contact'].map((page) => {
          const path = page === 'Home' ? '/' : `/${page.toLowerCase()}`;
          return (
            <motion.li
              className='relative' key={page}
            // variants={navChildVariant}
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'nav-li border-b-2 pb-[2px] text-p  transition duration-300'
                    : 'nav-li pb-[2px] transition duration-300'
                }
              >
                {page}
              </NavLink>
              <hr className={`border-[1.5px] transition-all duration-300 absolute right-0 top-[95%] w-0 opacity-0 rounded`} />


            </motion.li>

          );
        })}
      </motion.ul>

      {/* Icons */}
      <motion.ul
        className='flex text-xl fade-down gap-2'
      // variants={navChildVariant}
      >

        <li
          title='Cart'
          onClick={() => { setIsCartSbOpen(true) }} className='relative cursor-pointer'>
          <FaCartShopping />
          {/* CART ITEMS COUNT */}
          <div className='absolute rounded-full -top-3 accent text-white px-1 text-sm -right-3'>
            {
              cartState.cart.length
            }
          </div>
        </li>


        {
          isAuthenticated ? (
            <li
              title='Account'
              className='cursor-pointer ml-1.5'>

              <Link to={'/user-dashboard/overview'}
                className=''>
                <FaRegUser />
              </Link>

            </li>

          )
            : (

              <li
                title='Log In / Sign Up'
                className='cursor-pointer ml-1.5'>
                <Link to={'/login&SignUp'}>
                  <UserLock />
                </Link>
              </li>
            )

        }

        <li
          title='Menu'
          className='sm:hidden cursor-pointer '
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <CgMenuRight />
        </li>


      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;
