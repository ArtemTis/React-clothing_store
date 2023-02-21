import React from 'react'
import { Link } from 'react-router-dom'

const ShowProduct = ({product, addProduct}) => {
    return (
        <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height='550px' width='500px' style={{objectFit: 'contain'}}/>
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>
                    $ {product.price}
                </h3>
                <p className="lead">{product.description}</p>
                {/* onClick={() => addProduct(product)} */}
                <button className='btn btn-outline-dark px-4 py-2' >Add to Cart</button>
                <Link to='/cart' className='btn btn-dark ms-2 px-3 py-2'>Go to Cart</Link>
            </div>
        </>
    )
}

export default ShowProduct