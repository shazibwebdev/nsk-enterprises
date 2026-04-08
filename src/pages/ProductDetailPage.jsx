import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext'
import Loader from '../components/common/Loader'
import ProductCard from '../components/product/ProductCard'
import AddToCartBtn from '../components/cart/AddToCartBtn'
import AnimatedPage from '../components/common/AnimatedPage'
import products from '../data/products'

function ProductDetailPage() {

    const param = useParams()

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const [similarProds, setSimilarProds] = useState([])
    const { setActiveFilter } = useAppContext()

    useEffect(() => {
        setLoading(true)
        setError(null)
        try {
            const found = products.find(p => p.id === Number(param.id))
            if (found) {
                setProduct(found)
            } else {
                setError('Product not found')
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }, [param.id])

    useEffect(() => {
        if (!product.id) return
        const similar = products.filter(p => p.id !== product.id && p.category === product.category)
        setSimilarProds(similar)
    }, [product])







    if (loading) return <Loader />

    return (
        <AnimatedPage>

            <section className='flex flex-col gap-10 items-center'>
                <div className='w-[90%] m-auto flex flex-col sm:flex-row items-center justify-center gap-5 '>

                    {/* IMAGE MAIN */}
                    <div className='max-h-[60vh] rounded-xl overflow-hidden sm:max-h-[80vh] w-full sm:w-[45%] flex items-center justify-center'>
                        <img className='w-full  h-full object-contain' src={product.image} alt="" />
                    </div>

                    {/* DETAIL MAIN */}
                    <div className='sm:w-1/2 flex flex-col gap-3'>
                        <h1 className='font-bold head text-p text-xl sm:text-2xl'>
                            {product.title}
                        </h1>

                        <p>
                            <span className='font-bold'>Category:</span> {product.category}
                        </p>

                        <p className=''>
                            <span className='font-bold'>Description:</span> {product.description}
                        </p>

                        <p >
                            <span className='font-bold'>Rating:</span> {`${product.rating.rate} (Based on ${product.rating.count} reviews)`}
                        </p>

                        <p className='text-xl '>
                            <span className='font-bold'>Price:</span> {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </p>


                        <AddToCartBtn id={product.id} />
                    </div>

                </div>


                {/* SIMILAR PRODUCTS */}
                <div className='w-[90%] flex flex-col gap-6'>
                    <h1 className='head text-p font-bold text-xl sm:text-3xl'>
                        Similar Products You might Like
                    </h1>

                    {/* PRODUCTS */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {
                            similarProds.map(prod => {
                                const { id } = prod
                                return (
                                    <ProductCard key={id} {...prod} />
                                )
                            })
                        }
                        <div className='w-full h-[300px] flex flex-col items-center justify-center'>
                            <div className=''>

                            </div>
                            <p className='text-xl'>
                                Wanna Explore More?
                            </p>
                            <Link onClick={() => { setActiveFilter('all') }} to={'/shop'}>
                                <button className='head text-sm lg:text-[15px] accent px-3 hover:-translate-y-[6px] transition duration-300 shadow-gray-500 py-2 font-bold tracking-widest text-white cursor-pointer rounded mt-2'>
                                    BACK TO SHOP
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </section>


        </AnimatedPage>
    )
}

export default ProductDetailPage