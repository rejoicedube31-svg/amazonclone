import { useState, useEffect } from "react";

const useCart = () => {

  // 💾 LOAD FROM LOCALSTORAGE
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ➕ ADD TO CART
  const addToCart = (item) => {
    setCart((prevCart) => {
      const exists = prevCart.find((i) => i.id === item.id);

      if (exists) {
        return prevCart.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // ➖ REMOVE FROM CART
  const removeFromCart = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 🧹 CLEAR CART
  const clearCart = () => {
    setCart([]);
  };

  // 💰 TOTAL PRICE
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // 📦 CART COUNT
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // 🚨 EMPTY CART LOGIC (NEW)
  const isCartEmpty = cart.length === 0;

  const getEmptyCartMessage = () => {
    return "Your cart is empty. Start shopping to add items!";
  };

  // 💾 SAVE TO LOCALSTORAGE ON CHANGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalPrice,
    cartCount,
    isCartEmpty,
    getEmptyCartMessage
  };
};

export default useCart;