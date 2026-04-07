import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";


function SeeDetailEyeIcon({ id }) {
    return (
        <Link
        className='w-full h-full flex justify-center items-center' to={`/product/${id}`}>
            <FaRegEye title='See Detail' />
        </Link>
    )
}

export default SeeDetailEyeIcon