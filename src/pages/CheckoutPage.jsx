import React, { useEffect, useRef, useState } from 'react'
import { useCartContext } from '../contexts/CartContext'
import { useAuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import AnimatedPage from '../components/common/AnimatedPage'
import PlaceOrderBtn from '../components/common/PlaceOrderBtn'
import { AnimatePresence, motion, useTransform } from 'framer-motion'
import { RxCross2 } from 'react-icons/rx'
import { SquareX, X } from 'lucide-react'

function CheckoutPage() {

  const {
    cartState,
    checkoutRegister,
    checkoutHandleSubmit,
    checkoutReset,
    checkoutErros,
    onCheckoutSubmit,
    isCheckoutFormValid,
    checkoutState,
    checkoutFormData,
    QTY_INC,
    QTY_DEC,
    REMOVE_ITEM,
    IsOrderConfirmed,
    setIsOrderConfirmed
  } = useCartContext()

  const {
    currentUser
  } = useAuthContext()

  const [isApplyChangesClicked, setIsApplyChangesClicked] = useState(false)

  useEffect(()=>{
    setIsApplyChangesClicked(false)
  },[])

  useEffect(() => {
    if (currentUser) {
      checkoutReset({
        username: currentUser.username,
        email: currentUser.email,
        shippingAddress: checkoutFormData.shippingAddress,
        shippingOption: checkoutFormData.shippingOption || 'Standard',
        paymentMethod: checkoutFormData.paymentMethod || 'Cash on Delivery',
        coupon: checkoutFormData.coupon || ''
      })
    }
  }, [currentUser])


  const navigate = useNavigate()

  const orderVariants = {
    initial: {
      scale: 0
    },
    animate: {
      scale: 1.025,
      transition: {
        duration: 0.3
      }
    }
  }



  const [isPlaceOrderClicked, setIsPlaceOrderClicked] = useState(false)

  useEffect(() => {
    if (!IsOrderConfirmed) return
    const timeout = setTimeout(() => {
      setIsPlaceOrderClicked(false)
      setIsOrderConfirmed(false)
      navigate('/thankYou')
    }, 8500);

    return () => {
      clearTimeout(timeout)
    }
  }, [IsOrderConfirmed])

  if (cartState.cart.length < 1) {
    return (
      <>
        <div className='relative height flex flex-col justify-center items-center gap-5'>
          <h1 className='text-2xl font-bold'>
            Your cart is empty!
          </h1>
          <button
            className='accent text-white p-2 rounded font-bold text-xl cursor-pointer'
            onClick={() => navigate('/shop')}>
            GO TO SHOP
          </button>
        </div>
      </>

    )
  }

  return (
    <AnimatedPage>

      <div className='height relative grid grid-cols-1 md:grid-cols-2 gap-6 p-5'>
        {/* overlay */}
        <AnimatePresence mode='wait'>
          {
            isPlaceOrderClicked && (
              <div
                onClick={() => {
                  !IsOrderConfirmed && setIsPlaceOrderClicked(false)
                }}
                className={`w-screen h-screen flex justify-center items-center z-5 bg-black/50 fixed top-0 left-0`}>

              </div>
            )
          }
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isPlaceOrderClicked && (
            <motion.div
              className='w-screen h-screen flex justify-center items-center z-50 fixed top-0 left-0'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                !IsOrderConfirmed && setIsPlaceOrderClicked(false)
              }}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className='relative w-[300px] md:w-[400px] h-[400px] flex flex-col gap-3 justify-center items-center rounded-2xl bg-white'
              >
                {
                  !IsOrderConfirmed && (
                    <button
                      onClick={() => {
                        !IsOrderConfirmed && setIsPlaceOrderClicked(false)
                      }}
                      className='absolute cursor-pointer top-3 right-3'>
                      <X />
                    </button>
                  )
                }

                {
                  !IsOrderConfirmed && (
                    <h1 className='text-xl text-black'>
                      Are you sure to proceed?
                    </h1>
                  )
                }

                <div
                  onClick={() => setIsOrderConfirmed(true)}
                  className={`mt-2 ${isCheckoutFormValid ? 'cursor-pointer' : 'cursor-not-allowed brightness-75'}`}
                  disabled={!isCheckoutFormValid}
                >
                  <PlaceOrderBtn />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>



        {/* SHIPPING INFO */}
        <div className=' p-5 border-2 border-[gray]  flex flex-col gap-3 rounded-2xl'>
          <h1 className='text-xl font-bold'>
            Shipping Info
          </h1>

          <form onSubmit={checkoutHandleSubmit(onCheckoutSubmit)} className='flex flex-col gap-3'>

            {/* Name */}
            <div className='flex flex-col'>
              <input
                {...checkoutRegister('username')}
                className='h-[40px] border pl-2 rounded '
                placeholder='Name'

                type="text" />
              {checkoutErros.username && <p className='text-[red] text-sm'> {checkoutErros.username.message} </p>}

            </div>

            {/* E-mail */}
            <div className='flex flex-col'>
              <input
                {...checkoutRegister('email')}
                className='h-[40px] border pl-2 rounded '

                placeholder='E-mail'
                type="text" />
              {checkoutErros.email && <p className='text-[red] text-sm'> {checkoutErros.email.message} </p>}
            </div>

            {/* shipping address */}
            <div className='flex flex-col'>
              <input
                {...checkoutRegister('shippingAddress')}
                className='h-[40px] border pl-2 rounded '
                placeholder='Shipping address'
                type="text" />
              {checkoutErros.shippingAddress && <p className='text-[red] text-sm'> {checkoutErros.shippingAddress.message} </p>}
            </div>


            {/* PAYMENT METHOD SELECTION */}
            <div className='flex flex-col'>
              <h1 className='font-bold'>
                Payment Method
              </h1>
              <div>
                <input id='cod' value={'Cash on Delivery'} {...checkoutRegister('paymentMethod')} type="radio" />
                <label htmlFor="cod"> Cash on Delivery </label>
              </div>
              <div>
                <input id='credit/debit' value={'Credit / Debit card'} {...checkoutRegister('paymentMethod')} type="radio" />
                <label htmlFor="credit/debit"> Credit / Debit card </label>
              </div>
              {checkoutErros.paymentMethod && <p className='text-[red] text-sm'> {checkoutErros.paymentMethod.message} </p>}
            </div>


            {/* SHIPPING OPTIONS SELECTION */}
            <div className='flex flex-col'>
              <h1 className='font-bold'>
                Shipping Options
              </h1>
              <div>
                <input id='standard' value={'Standard'} {...checkoutRegister('shippingOption')} type="radio" />
                <label htmlFor="standard"> Standard </label>
              </div>
              <div>
                <input id='express' value={'Express'} {...checkoutRegister('shippingOption')} type="radio" />
                <label htmlFor="express"> Express </label>
              </div>
              {checkoutErros.shippingOption && <p className='text-[red] text-sm'> {checkoutErros.shippingOption.message} </p>}
            </div>


            <div className='flex flex-col'>
              <input
                {...checkoutRegister('coupon')}
                className='w-full  sm:w-[300px] border-2 border-[gray] rounded pl-2 h-[40px]'
                placeholder='Add discount coupon' type="text" />
              {checkoutErros.coupon && <p className='text-[red] text-sm'> {checkoutErros.coupon.message} </p>}
            </div>

            <button
              className={`py-2 font-semibold ${isCheckoutFormValid ? 'cursor-pointer' : 'cursor-not-allowed brightness-75'} primary transition duration-200  rounded text-white text-lg`}
              type='submit'
              onClick={()=>{setIsApplyChangesClicked(true)}}
              disabled={isCheckoutFormValid ? false : true}>
              Apply changes
            </button>
          </form>

        </div>

        {/* ORDER SUMMARY */}
        <div id='orderSummary' className='sticky top-[60px] p-5 border-2 border-[gray] rounded-2xl flex flex-col gap-3'>
          <h1 className='font-bold text-xl'>
            Order Summary
          </h1>

          {/* SUMMARY */}
          {
            cartState.cart.length >= 1 && (
              cartState.cart.map(item => {

                const {
                  id,
                  title,
                  image,
                  price,
                  qty
                } = item

                return (
                  <motion.div
                    key={id}
                    variants={orderVariants}
                    whileHover={orderVariants.animate}
                    className='flex  shadow-md bg-[aqua] p-1 rounded-md shadow-[gray] items-center gap-5 relative'>

                    <button onClick={() => { REMOVE_ITEM(id) }} className='absolute top-2 text-xl cursor-pointer right-2'>
                      <RxCross2 />
                    </button>

                    {/* Img */}
                    <div className='w-max relative'>
                      <img className='w-[50px] h-[50px] object-contain' src={image} alt="" />

                      <p className='w-[20px] h-[20px] accent rounded-full
                    text-white text-sm
                    flex justify-center items-center
                    absolute -top-2 -right-2'>
                        {qty}
                      </p>
                    </div>

                    {/* TEXT MAIN */}
                    <div className='w-full pr-3 flex flex-col gap-2 p-1 sm:p-2'>
                      <h1 className=' font-bold'>
                        {title}
                      </h1>

                      <div className='flex gap-2'>

                        <div className='flex gap-2'>
                          <button onClick={() => { QTY_DEC(id) }} className='accent cursor-pointer text-white px-1 rounded-full'>
                            -
                          </button>
                          <p>
                            {qty}
                          </p>
                          <button onClick={() => { QTY_INC(id) }} className='accent cursor-pointer text-white px-1 rounded-full'>
                            +
                          </button>
                        </div>

                        <p>
                          x {price} =
                        </p>
                        <p className='font-bold'>
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2
                          }).format(qty * price)}
                        </p>

                      </div>


                    </div>


                  </motion.div>
                )
              })
            )
          }



          {/* Grand Total */}
          <div className='flex flex-col items-center'>
            <h1 className='flex gap-2'>
              <span className='font-bold'>
                Total Amount:
              </span>

              <span>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2
                }).format(cartState.totalAmount)}
              </span>
            </h1>

            <h1 className='w-max flex gap-2'>
              <span className='font-bold'>
                Discount:
              </span>
              <span>
                {checkoutState.discount}%
              </span>
            </h1>


            <h1 className='flex gap-2'>
              <span className='font-bold'>
                Shipping Cost:
              </span>
              <span>
                {checkoutState.shippingCost === 0 ? 'Free shipping' : `$${checkoutState.shippingCost}`}
              </span>
            </h1>

            <h1 className='w-max flex gap-2 text-xl primary text-white p-2 mt-2 rounded transition duration-300'>
              <span className='font-bold'>
                Grand Total:
              </span>

              <span>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2
                }).format(checkoutState.grandTotal)}
              </span>
            </h1>

            <button
              className={`py-2 px-3 ${isApplyChangesClicked ? 'cursor-pointer' : 'cursor-not-allowed brightness-75'} accent mt-3 font-semibold transition duration-200  rounded text-white text-lg`}
              disabled={isApplyChangesClicked ? false : true}
              title={`${isApplyChangesClicked ? 'Place Order' : 'Click on Apply changes'}`}
              onClick={() => { setIsPlaceOrderClicked(true) }}>
              Place Order
            </button>

          </div>
        </div>
      </div>
    </AnimatedPage>

  )
}

export default CheckoutPage