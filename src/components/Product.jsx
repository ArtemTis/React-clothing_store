import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ShowProduct from './ShowProduct';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import { useDispatch } from 'react-redux';
// import {addCart} from '../redux/action'

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false)
        }

        getProduct()
    }, [id])

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={550}  width={500}/>
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={90} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={70} />
                    <Skeleton height={160} />
                    <div className="d-flex">
                        <Skeleton height={50} width={120} />
                        <Skeleton height={50} width={120} style={{ marginLeft: 6 }} />
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct product={product}/>}
                </div>
            </div>

        </div>
    )
}

export default Product