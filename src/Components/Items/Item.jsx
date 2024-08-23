import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}>
                <img src={props.image} alt='' />
            </Link>
            <Link to={`/product/${props.id}`}>
                <p>{props.name}</p>
            </Link>
            <div className='item-prices' >
                {props.price}
            </div>
        </div>
    )
}

export default Item