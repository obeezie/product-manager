import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ItemView = () => {
    const [product, setProduct] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(product)

    return (
        <div>
            {
                product ?
                    <div>
                        <h1>Title: {product.title}</h1>
                        <h1>Price: ${product.price}</h1>
                        <h1>Description: {product.description}</h1>

                    </div> :
                    <h1>Loading....</h1>
            }
        </div>
    )
}

export default ItemView