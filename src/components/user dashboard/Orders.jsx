import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import OrderShow from './OrderShow'

function Orders() {
  const { currentUser } = useAuthContext()

  const [allOrders, setAllOrders] = useState(JSON.parse(localStorage.getItem('allOrders')) || [])

  // useEffect(() => {
  //   const ordersFromLocal = JSON.parse(localStorage.getItem('allOrders')) || []
  //   if (currentUser?.allOrders) {
  //     setCurrentUserAllOrders(currentUser.allOrders)
  //   } else if (ordersFromLocal.length > 0) {
  //     setCurrentUserAllOrders(ordersFromLocal)
  //   }
  // }, [currentUser])

  return (
    <div className='w-full p-6 flex flex-col gap-5 items-center min-h-screen'>
      <h1 className='font-bold text-2xl'>Your Orders</h1>

      <div className='w-full md:w-3/4 h-[85vh] overflow-y-scroll flex flex-col gap-4'>
        {allOrders.length < 1 ? (
          <div className='text-gray-600 text-center border border-gray-200 rounded-xl p-6'>
            No orders to show for now
          </div>
        ) : (
          allOrders
            .map((order, idx) => <OrderShow key={idx} order={order} />)
        )}
      </div>
    </div>
  )
}

export default Orders
