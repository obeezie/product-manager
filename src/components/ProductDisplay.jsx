import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductDisplay = () => {
    const [productList, setProductList] = useState()

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
                            <li key={i}><Link to={`/products/${product._id}`}>{product.title}</Link></li>
                        )
                    }) :
                    <p>...Loading...</p>
            }
        </div>
    )
}

export default ProductDisplay