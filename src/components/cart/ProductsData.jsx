import React from 'react'
import { useState } from 'react'

const FetchAllProds = async () => {
    const [AllProds, setAllProds] = useState([])
    try {
        const resp = await fetch('https://fakestoreapi.com/products')
        const data = await resp.json()
        if (data) {
            return data
        }
    }
    catch (err) {
        console.error(err.message);
    }
}
// FetchAllProds()
export default FetchAllProds