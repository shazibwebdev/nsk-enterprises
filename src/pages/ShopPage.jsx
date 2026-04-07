import React  from 'react'
import { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import ShopProductsShow from '../features/shop/ShopProductsShow'
import Loader from '../components/common/Loader'
import { useAppContext } from '../contexts/AppContext'
import AnimatedPage from '../components/common/AnimatedPage'

function ShopPage() {
    
    return (
        <AnimatedPage className=''>
            <ShopProductsShow />
        </AnimatedPage>
    )
}

export default ShopPage