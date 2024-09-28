import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        fetch("https://server-3-8ydy.onrender.com/products")
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
        if (!currentUser) {
            alert("Please log in to add items to the cart")
            return;
        }
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
    const handleLogin = (user) => {
        setCurrentUser(user);
        setCartItems({})
    }
    const handleLogout = () => {
        setCurrentUser(null);
        setCartItems({});
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
        addToCart,
        removeFromCart,
        setCurrentUser,
        currentUser,
        handleLogin,
        handleLogout,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
