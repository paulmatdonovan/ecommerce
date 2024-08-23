import React, { useContext } from 'react'
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {

    const { product } = props;

    const { addToCart } = useContext(ShopContext);

    return (
        <div className='productdisplay'>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplayrightdescription"><p>{product.description}</p></div>

                <div className='productdisplay-prices'>${product.price}</div>

                <button onClick={() => { addToCart(product.id) }}>Add to cart</button>
            </div>
        </div >
    )
}

export default ProductDisplay