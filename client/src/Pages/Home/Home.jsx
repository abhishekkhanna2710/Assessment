import React from 'react'
import { useState, useEffect } from 'react';
import "./Home.css"

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(8);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('http://localhost:5000/api/products');
            // const response = await fetch('https://assessment-f5mu.onrender.com/api/products');
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(filter.toLowerCase());
    });

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    //  current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // pagination section
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <h2 style={{ textAlign: "center" }}>Products Section</h2>
            <div className='Sorting_Algorithm'>

                <div className="Searching_Name">
                    <div className="input-group-append">
                        <input type="text" placeholder="Search products by name" onChange={(e) => setFilter(e.target.value)} />
                        <button className="btn btn-primary" type="button">Search</button>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="sortOrder">Sort by price:</label>
                    <select id="sortOrder" className="form-control" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="">Sort Prices</option>
                        <option value="asc">Low to high</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </div>
            <div className="ProductsMain">
                {currentProducts.map(product => (

                    <div className="card">
                        <div className='imageClass'>
                            <img src={product.image_url} className="card-img-top" alt={product.name} />
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{product.name}</h3>
                            <p className="card-text">{product.description}</p>
                        </div>
                        <div className="displays">
                            <span className='price'>$ {product.price}</span> <br />
                            <span >{product.quantity} Stock</span>
                        </div>
                    </div>

                ))}
            </div>
            <div className="pagination">
                {sortedProducts.length > productsPerPage &&
                    <nav>
                        <ul className="pagination">
                            {Array(Math.ceil(sortedProducts.length / productsPerPage)).fill().map((_, i) => (
                                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                    <button onClick={() => paginate(i + 1)} className="page-link">
                                        {i + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                }
            </div>
        </div>
    )
}

export default Home;
