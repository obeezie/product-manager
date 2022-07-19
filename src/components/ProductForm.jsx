import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`, { title, price, description })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Product Manager</h1>
                <label htmlFor="title">Title : </label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="price">Price :</label>
                <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label htmlFor='description'>Description : </label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Submit Product</button>
            </form>
        </div>
    )
}

export default ProductForm