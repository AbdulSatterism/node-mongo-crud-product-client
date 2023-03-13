import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Products from './Products';
import './Home.css'

const Home = () => {
    const products = useLoaderData();
    const [displayProduct, setDisplayProduct] = useState(products)
    return (
        <div >
            <div className='link'>
                <Link to='/addproduct'>Add Product</Link>
            </div>
            <div className="products">
                {
                    displayProduct.map(product => <Products
                        key={product._id}
                        product={product}
                        displayProduct={displayProduct}
                        setDisplayProduct={setDisplayProduct}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default Home;