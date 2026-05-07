import useCart from "../hooks/useCart.jsx";
import { CartContext } from "../features/cart/cartContext.jsx";

export function CartProvider({ children }) {
    const cartService = useCart();

    return (
        <CartContext.Provider value={cartService}>
            {children}
        </CartContext.Provider>
    )
}