import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const EditItemForm = () => {


    //Inputs
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const navigate = useNavigate()
    const { id } = useParams()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                const product = res.data
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
            })
            .catch(err => console.log(err))
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, { title, price, description })
            .then(res => navigate("/products"))
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

export default EditItemForm