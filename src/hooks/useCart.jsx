import { useState } from "react";

const useCart = () => {
    //Storage in local storage
    const [cart, setCart] = useState([
        {id: 1, title: "Item 1", price: 1000},
        {id: 2, title: "Item 2", price: 5800}
    ]);
    
    //Service functions to distribute to the application
    const addToCart = (item) => {
        
        setCart((prevCart) => [...prevCart, item]);
    }

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId)
    );
}

    const clearCart = () => {
        setCart([]);
    }

    let totalPrice = cart.reduce((total, item) => total + item.price, 0);

    //Exposed function names and variables
    return {cart, addToCart, removeFromCart, clearCart, totalPrice};

}

export default useCart;