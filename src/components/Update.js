import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedProduct = useLoaderData();

    const [product, setProduct] = useState(storedProduct)

    const handleAddProduct = (event) => {
        event.preventDefault();
        // console.log(product)
        fetch(`http://localhost:5000/products/${storedProduct._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert("Product updated successfully")
                }
            })
        // fetch(`http://localhost:5000/products/${storedProduct._id}`, {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(product)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.modifiedCount > 0) {
        //             alert("Product updated successfully")
        //         }
        //     })
    }

    const handleUpdate = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct)
    }
    return (
        <div>
            <Link to='/'>Home</Link>
            <h3>Please update: {storedProduct.name} </h3>
            <form onSubmit={handleAddProduct}>
                <input onChange={handleUpdate} defaultValue={storedProduct.name} type="text" name="name" id="" placeholder='enter product name' /><br />
                <input onChange={handleUpdate} defaultValue={storedProduct.price} type="number" name="price" id="" placeholder='enter product price' /><br />
                <input onChange={handleUpdate} defaultValue={storedProduct.quantity} type="text" name="quantity" id="" placeholder='enter product quantity' /><br />
                <input onChange={handleUpdate} defaultValue={storedProduct.image} type='text' name='image' placeholder='enter image' />
                <br />
                <button type="submit">update product</button>

            </form>
        </div>
    );
};

export default Update;