import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
                // Initialize the cartItems state based on the fetched products
                const initialCart = {};
                data.forEach(product => {
                    initialCart[product.id] = 0;
                });
                setCartItems(initialCart);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const addToCart = (itemId) => {
        if (!currentUser) {
            alert("Please log in to add items to the cart.");
            return;
        }
        fetch(`http://localhost:3000/users/${currentUser.id}/cart`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId, quantity: 1 })
        })
            .then(res => res.json())
            .then((data) => {
                setCartItems((prevCart) => [...prevCart, data]);
                console.log(cartItems);

            })


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

    // Function to handle user logout
    const handleLogout = () => {
        setCurrentUser(null);
        setCartItems({});
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        products,
        cartItems,
        removeFromCart,
        addToCart,
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
