import React, { createContext, useState } from 'react';
import products from '../Components/Assets/all-products';

export const ShopContext = createContext();
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < products.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        // this for loop is for an object
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }

        }
        return totalItem;
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number.parseFloat(item));
                totalAmount += itemInfo.price * cartItems[item];
                console.log(itemInfo.price)
            }
        }
        return totalAmount;
    }



    const contextValue = { getTotalCartItems, getTotalCartAmount, products, cartItems, removeFromCart, addToCart };


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;




