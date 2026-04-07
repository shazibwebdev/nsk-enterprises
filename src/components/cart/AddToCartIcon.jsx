import React from 'react'
import { BsFillCartPlusFill } from "react-icons/bs";
import { useCartContext } from '../../contexts/CartContext';


function AddToCartIcon({ id }) {

    const {
        ADD_ITEM
    } = useCartContext()

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <BsFillCartPlusFill title='Add to Cart' onClick={(e) => {
                e.stopPropagation()
                ADD_ITEM(id)
            }} />
        </div>
    )
}

export default AddToCartIcon