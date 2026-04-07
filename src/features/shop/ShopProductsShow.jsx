import React, { useEffect } from 'react'
import { useAppContext } from '../../contexts/AppContext'
import ProductCard from '../../components/product/ProductCard'
import { AnimatePresence, motion } from 'framer-motion'
import Select from '../../components/common/Select'
import ProductCardSkeleton from '../../components/common/ProductCardSkeleton'



function ShopProductsShow() {

  const {
    APIData,
    FetchData,
    activeFilter,
    error,
    loading
  } = useAppContext()

  useEffect(() => {
    FetchData(activeFilter)
  }, [activeFilter])

  const containerVariants = {
    hidden: {},
    animate: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }


  if (error) return <div className='height flex justify-center items-center text-2xl font-bold'>{error}</div>

  return (
    <motion.div
      className='w-full 2xl:w-[1536px] m-auto flex flex-col items-center gap-6 text-center pt-3 pb-18 px-2 lg:px-7 min-h-[100vh]' >


      <h1
        className='head w-[90%] text-p text-2xl sm:text-3xl lg:text-4xl font-bold'>
        Explore Our Premium Products
      </h1>

      {/* MAIN */}
      <div className='flex flex-col sm:flex-row gap-5 sm:gap-0'>

        <div className='sm:w-1/4 fade-up-hero-head text-xl font-bold'>
          FILTER
          <Select />
        </div>


        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='animate'
          viewport={{ once: true, amount: 0.2 }}
          className='sm:w-3/4 grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

          <AnimatePresence>

            {
              loading ?
                Array(8).fill().map((ele, idx) => {
                  return <ProductCardSkeleton key={idx} />
                })

                :

                APIData.map((item, idx) => {
                  const {
                    id
                  } = item
                  // console.log(id);

                  return (
                    < ProductCard key={id} {...item} idx={idx} />
                  )
                })
            }
          </AnimatePresence>

        </motion.div>

      </div>

    </motion.div>
  )
}

export default ShopProductsShow