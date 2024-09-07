import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((r) => r.json())
            .then((data) => {
                setProducts(data);
                console.log(products)
                const initialCart = {};
                data.forEach(product => {
                    initialCart[product.id] = 0;
                });
                setCartItems(initialCart);
                setLoading(false);

            });
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartItems = () => {

        return Object.values(cartItems).reduce((total, num) => total + num, 0);
    };


    // Get total cart amount - function
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = products.find((product) => product.id === Number.parseFloat(itemId));
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[itemId];
                }
            }
        }
        return totalAmount;
    };

    if (loading) {
        return <div>Loading...</div>;
    }


    // Function to handle user logout

    const contextValue = {

        getTotalCartItems,
        getTotalCartAmount,
        products,
        cartItems,
        removeFromCart,
        addToCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
