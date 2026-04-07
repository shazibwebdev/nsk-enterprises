import React from 'react';
import { motion } from 'framer-motion';
import { Truck, BadgeCheck, Clock } from 'lucide-react';

const OrderShow = ({ order }) => {
    const {
        formData,
        orderDetail,
        orderedProducts
    } = order;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[whitesmoke] shadow-md rounded-xl p-5 w-full"
        >
            {/* Order Header */}
            <div className='mb-4 border-b pb-3'>

                <div className="flex items-center justify-between ">
                    <div>
                        <h2 className="font-semibold text-lg">
                            Order #{orderDetail.orderId}
                        </h2>
                        <p className="text-sm text-gray-500">
                            Status: {orderDetail.status === 'pending' ? (
                                <span className='text-orange-500 flex items-center gap-1'><Clock className='w-4 h-4' /> Pending</span>
                            ) : (
                                <span className='text-green-600 flex items-center gap-1'><BadgeCheck className='w-4 h-4' /> Delivered</span>
                            )}
                        </p>
                    </div>
                    <div className='text-right'>
                        <p className='text-sm'>Shipping: <span className='font-medium'>{orderDetail.shippingOption}</span></p>
                        <p className='text-sm'>Payment: <span className='font-medium'>{formData.paymentMethod}</span></p>
                    </div>
                </div>
                <p className='text-sm'>
                    Address: {formData.shippingAddress}
                </p>
            </div>

            {/* Products */}
            <div className='space-y-4'>
                {orderedProducts.map(product => (
                    <div key={product.id} className="flex items-center gap-4">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-16 h-16 object-contain rounded-md "
                        />
                        <div className='flex-1'>
                            <h3 className="font-medium">{product.title}</h3>
                            <p className="text-sm text-gray-500">
                                {product.qty} x ${product.price}
                            </p>
                        </div>
                        <div className='text-right font-semibold'>
                            ${Number(product.qty * product.price).toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Summary */}
            <div className='border-t pt-3 mt-4 space-y-1'>
                <div className='flex justify-between text-sm'>
                    <span>Subtotal:</span>
                    <span>${orderDetail.subtotal}</span>
                </div>
                <div className='flex justify-between text-sm'>
                    <span>Shipping:</span>
                    <span>{orderDetail.shippingCost === 0 ? 'Free' : `$${orderDetail.shippingCost}`}</span>
                </div>
                {orderDetail.discount > 0 && (
                    <div className='flex justify-between text-sm'>
                        <span>Discount:</span>
                        <span>-${orderDetail.discount}</span>
                    </div>
                )}
                <div className='flex justify-between font-semibold border-t pt-2'>
                    <span>Grand Total:</span>
                    <span>{
                        new Intl.NumberFormat('en-US',
                            {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }
                        ).format(orderDetail.grandTotal)
                    }</span>
                </div>
            </div>
        </motion.div>
    );
};

export default OrderShow;
