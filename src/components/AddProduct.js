import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [product, setProduct] = useState({})

    const handleAddProduct = (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Product added successfully");
                    event.target.reset()
                }

            })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct)
    }

    return (
        <div>
            <Link to='/'>Products</Link>
            <form onSubmit={handleAddProduct}>
                <input onBlur={handleInputBlur} type="text" name="name" id="" placeholder='enter product name' /><br />
                <input onBlur={handleInputBlur} type="number" name="price" id="" placeholder='enter product price' /><br />
                <input onBlur={handleInputBlur} type="text" name="quantity" id="" placeholder='enter product quantity' /><br />
                <input onBlur={handleInputBlur} type='text' name='image' placeholder='enter image' />
                <br />
                <button type="submit">add product</button>

            </form>
        </div>
    );
};

export default AddProduct;