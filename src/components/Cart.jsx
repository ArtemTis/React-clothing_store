import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, delCart } from '../redux/action';

const Cart = () => {

    const state = useSelector((state) => state.handleCart);
    console.log(state);
    const dispatch = useDispatch();

    const increaseCount = (product) => {
        dispatch(addCart(product));
        console.log(product);
    }

    const decreaseCount = (product) => {
        dispatch(delCart(product));
        console.log(product);
    }


    return (
        <>
            {state.length === 0 ? <h1 className='display-6 fw-bolder text-center mt-5'>Корзина пуста</h1> :
                state.map(item => (
                    <div className="cart-item">
                        <div className='container'>
                            <div className="row justify-content-center" key={item.id}>
                                <div className="col-md-4">
                                    <img src={item.image} alt={item.title} height="200px" width='180px' />
                                </div>
                                <div className="col-md-4">
                                    <h3>{item.title}</h3>
                                    <p className="lead fw-bold">
                                        {item.qty} X {item.price} = $
                                        {Math.floor((item.qty * item.price) * 100) / 100}
                                    </p>
                                    <button className="btn btn-outline-dark me-4"
                                        onClick={() => decreaseCount(item)}>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    <button className="btn btn-outline-dark"
                                        onClick={() => increaseCount(item)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Cart