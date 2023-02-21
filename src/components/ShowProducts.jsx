import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const ShowProducts = ({filter, data, setFilter}) => {

    const filterProduct = (cat) => {
        const updateList = data.filter(item => item.category === cat);
        setFilter(updateList);
    }

    return (
        <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-2" onClick={()=> setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("men's clothing")}>Men's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("women's clothing")}>Women's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("electronics")}>Electronic</button>
            </div>
            {filter.map(product => {
                return (
                    <Fragment key={product.id}>
                        <div className="col-md-3 mb-4">
                            <div className="card h-100 text-center p-4">
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy now</Link>
                                    </div>
                            </div>
                        </div>
                    </Fragment>
                )
            })}
        </>
    )
}

export default ShowProducts