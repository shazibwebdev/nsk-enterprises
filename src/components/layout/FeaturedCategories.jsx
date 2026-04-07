import React, { useRef } from 'react'
import FeaturedCategoriesSlilder from '../product/FeaturedCategoriesSlilder'
import { motion, useScroll, useTransform } from 'framer-motion'

function FeaturedCategories() {






  return (
    <motion.section

      className=' sticky top-[60px] text-center flex flex-col items-center justify-center gap-5 '
      id='featured-categories'

    >

      <motion.h1
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: 'easeInOut',type: 'spring',stiffness: 100 }}
        
        className='w-[90%] head font-bold text-p text-4xl sm:text-5xl'
        >
        Our Featured Categories
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='w-[90%] text-base sm:text-lg md:text-xl mb-5'
        >
        Shop top-rated categories tailored for your needs
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='w-[90%] flex justify-center items-center'>
        <FeaturedCategoriesSlilder />
      </motion.div>
    </motion.section>
  )
}

export default FeaturedCategories

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const ScrollSection = ({ title, bgColor, textColor }) => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   const x = useTransform(scrollYProgress, [0, 0.5, 1], [500, 0, 0]);
//   const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [90, 0, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

//   return (
//     <section
//       ref={ref}
//       className={`h-screen sticky top-0 flex items-center justify-center ${bgColor} ${textColor}`}
//     >
//       <motion.h1
//         style={{ x, rotate, opacity }}
//         className="text-7xl font-bold"
//       >
//         {title}
//       </motion.h1>
//     </section>
//   );
// };

// const FeaturedCategories = () => {
//   return (
//     <div className="relative">
//       <ScrollSection title="Home" bgColor="bg-black" textColor="text-white" />
//       {/* <ScrollSection title="About" bgColor="bg-white" textColor="text-black" />
//       <ScrollSection title="Services" bgColor="bg-neutral-100" textColor="text-black" />
//       <ScrollSection title="Contact" bgColor="bg-black" textColor="text-white" /> */}
//     </div>
//   );
// };

// export default FeaturedCategories;
