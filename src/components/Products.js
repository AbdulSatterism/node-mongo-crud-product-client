import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Products = ({ product, displayProduct, setDisplayProduct }) => {
    const { name, price, _id, image, quantity } = product;

    const handleDelete = (product) => {
        const agree = window.confirm(`Are you sure want to delete ${product._id}`);
        if (agree) {
            fetch(`http://localhost:5000/products/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('product deleted successfully');
                        const remainingProduct = displayProduct.filter(pd => pd._id !== _id);
                        setDisplayProduct(remainingProduct)
                    }
                })
        }
        // console.log(product)
        // const agree = window.confirm(`Are you sure want to delete ${product._id}`)
        // if (agree) {
        //     fetch(`http://localhost:5000/products/${_id}`, {
        //         method: "DELETE"
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data.deletedCount > 0) {
        //                 alert("product delete successfully");
        //                 const remainingProduct = displayProduct.filter(prd => prd._id !== _id);
        //                 setDisplayProduct(remainingProduct)
        //             }
        //         })
        // }
    }

    return (
        <div className='product'>
            <div className="">
                <img src={image} alt="" />
            </div>
            <div className="product-info">
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleDelete(product)}>Delete</button>
                <Link to={`/update/${_id}`}><button>update</button></Link>
            </div>

        </div>
    );
};

export default Products;