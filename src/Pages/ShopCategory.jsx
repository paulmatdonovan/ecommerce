import React, { useContext } from 'react'
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {
    const { products } = useContext(ShopContext);

    return (
        <div className='shop-category'>
            <div className="shopcategory-indexSort">
                <p>
                    <span></span>
                </p>
                <div className="shopcategrory-sort">
                </div>
            </div>
            <div className="shopcategory-products">
                {products.map((item) => {
                    if (props.category === item.category) {
                        return <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
                    } else {
                        return null;
                    }
                })}
            </div>

        </div>
    )
}

export default ShopCategory