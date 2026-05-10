import { useCartContext } from "../../features/cart/cartContext";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SubFooter from "../../components/SubFooter";

const Cart = () => {
  const {
    cart,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart
  } = useCartContext();

  return (
    <>
      <NavBar />

      <div className="cart-page">

        <h2>Your Cart</h2>

        <div className="cart-layout">

          {/* LEFT SIDE */}
          <div className="cart-items">

            {/* EMPTY CART BUTTON */}
            {cart.length > 0 && (
              <button
                className="clear-cart-btn"
                onClick={clearCart}
              >
                Empty Cart
              </button>
            )}

            {cart.length === 0 ? (
              <p className="empty-cart-msg">
                Your cart is empty
              </p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="cart-item">

                  <div className="cart-info">
                    <h4>{item.title}</h4>
                    <p>R {item.price}</p>
                  </div>

                  {/* + / - CONTROLS */}
                  <div className="qty-controls">

                    <button onClick={() => removeFromCart(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => addToCart(item)}>
                      +
                    </button>

                  </div>

                  {/* SUBTOTAL */}
                  <div className="item-subtotal">
                    R {(item.price * item.quantity).toFixed(2)}
                  </div>

                </div>
              ))
            )}

          </div>

          {/* RIGHT SIDE SUMMARY */}
          <div className="cart-summary">

            <h3>Order Summary</h3>

            <p>
              Subtotal ({cart.reduce((t, i) => t + i.quantity, 0)} items)
            </p>

            <h2>
              R {Number(totalPrice).toFixed(2)}
            </h2>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;