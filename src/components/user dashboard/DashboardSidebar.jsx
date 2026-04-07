import React, { useEffect, useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Settings,
  ShoppingCart,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthContext } from '../../contexts/AuthContext';
import AnimatedPage from '../common/AnimatedPage';

const DashboardSidebar = () => {
  const { currentUser, handleLogOut } = useAuthContext();

  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Detect screen size for mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setShowMobileMenu(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    {
      path: '/user-dashboard/overview',
      label: 'Overview',
      icon: LayoutDashboard
    },
    {
      path: '/user-dashboard/orders',
      label: 'My Orders',
      icon: ShoppingBag
    },
  ];

  return (
    <AnimatedPage>

      <div className="w-full 2xl:w-[1536px] flex m-auto">
        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md "
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X /> : <Menu />}
          </button>
        )}

        {/* Sidebar */}
        <motion.div
          initial={{ x: isMobile ? '-100%' : 0 }}
          animate={{
            x: isMobile ? (showMobileMenu ? 0 : '-100%') : 0,
            width: open ? 260 : 80
          }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="z-40 fixed md:static left-0 top-0 bg-white h-screen shadow-lg flex flex-col justify-between"
        >
          {/* Sidebar Top */}
          <div>
            <div className="flex items-center justify-between p-4 ">
              {open && (
                <h1 className="w-full text-center font-bold text-lg">
                  {currentUser?.username || 'User'}
                </h1>
              )}
              {!isMobile && (
                <button
                  onClick={() => setOpen(!open)}
                  className="p-2 rounded-md hover:bg-gray-100"
                >
                  {open ? <ChevronLeft /> : <ChevronRight />}
                </button>
              )}
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1 mt-4">
              {menuItems.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 mx-3 px-3 py-3 rounded-lg text-sm font-medium transition ${isActive
                      ? 'bg-indigo-500 text-white'
                      : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                    }`
                  }
                  onClick={() => isMobile && setShowMobileMenu(false)}
                >
                  <Icon className="w-5 h-5" />
                  {open && <span>{label}</span>}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Footer Buttons */}
          <div className="flex flex-col gap-2 p-4 ">
            <Link to="/shop" onClick={() => isMobile && setShowMobileMenu(false)}>
              <button className="flex items-center gap-3 w-full px-3 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition">
                <ShoppingCart className="w-5 h-5" />
                {open && <span>Continue Shopping</span>}
              </button>
            </Link>

            <button
              onClick={() => {
                handleLogOut();
                isMobile && setShowMobileMenu(false);
              }}
              className="flex items-center gap-3 w-full px-3 py-3 rounded-lg border border-red-300 text-red-600 hover:bg-red-50 transition"
            >
              <LogOut className="w-5 h-5" />
              {open && <span>Logout</span>}
            </button>
          </div>
        </motion.div>

        {/* Main Outlet */}
        <div className="w-full flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </AnimatedPage>

  );
};

export default DashboardSidebar;
