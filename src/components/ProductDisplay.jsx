import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductDisplay = () => {
    const [productList, setProductList] = useState()

    const handleDelete = (id) => {
        // 1. delete the item from the database
        //2. update the list at the parent
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProductList(res.data))
            .catch(err => console.log(err))
    }, [productList])
    return (
        <div>
            <h1>All products</h1>
            {
                productList ?
                    productList.map((product, i) => {
                        return (
                            <li key={i}><Link to={`/products/${product._id}`}>{product.title}</Link> <Link to={`/products/${product._id}/edit`}>Edit Item</Link> <button onClick={() => handleDelete(product._id)}>Delete</button> </li>
                        )
                    }) :
                    <p>...Loading...</p>
            }
        </div>
    )
}

export default ProductDisplay