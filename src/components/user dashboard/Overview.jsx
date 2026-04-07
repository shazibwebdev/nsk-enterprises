import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import OverviewCard from './OverviewCard'

function Overview() {
  const { currentUser, setCurrentUser } = useAuthContext()

  const [allOrders, setAllOrders] = useState(JSON.parse(localStorage.getItem('allOrders')) || [])

  const [timeOfDay, setTimeOfDay] = useState('')

  useEffect(() => {
    const now = new Date()
    const hours = now.getHours()

    const greeting =
      hours >= 5 && hours < 12
        ? 'Good Morning'
        : hours >= 12 && hours < 17
          ? 'Good Afternoon'
          : hours >= 17 && hours < 21
            ? 'Good Evening'
            : 'Hello'

    setTimeOfDay(greeting)
  }, [])

  //  Calculations
  const totalOrders = allOrders.length
  const totalPendingOrders = allOrders.filter(
    (order) => order.orderDetail.status === 'pending'
  ).length
  const totalDeliveredOrders = allOrders.filter(
    (order) => order.orderDetail.status === 'delivered'
  ).length

  return (
    <div className='w-full min-h-screen flex flex-col p-4 gap-4 justify-center items-center'>
      <h1 className='font-bold text-3xl'>
        {timeOfDay}, {currentUser?.username}
      </h1>

      <p className='text-lg'>Welcome back! Here’s your account overview.</p>

      <div className='w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <OverviewCard title={'Total Orders'} no={totalOrders} />
        <OverviewCard title={'Orders in Progress'} no={totalPendingOrders} />
        <OverviewCard title={'Delivered Orders'} no={totalDeliveredOrders} />
      </div>
    </div>
  )
}

export default Overview
