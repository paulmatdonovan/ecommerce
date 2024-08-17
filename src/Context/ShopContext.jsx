import React, { useEffect, useState, createContext, useContext } from 'react';
import products from '../Components/Assets/all-products';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const contextValue = { products };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;




