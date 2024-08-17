import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';


const Product = () => {
    const { products } = useContext(ShopContext);
    const { productID } = useParams();
    const product = products.find((e) => e.id === Number(productID));

    return (
        <div>
            <ProductDisplay product={product} />
        </div>
    )
}

export default Product