import { useCartContext } from '../features/cart/cartContext.jsx'

const Item = ({ image, title, rating, sales, price, id }) => {
  
  const { cart, addToCart, removeFromCart } = useCartContext();

  // check if item is already in cart
  const cartItem = cart.find((item) => item.id === id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="product-card">

      <img src={image} alt={title} />
      
      <h4>{title}</h4>
      
      <p>{rating}</p>
      
      <p>{sales}</p>
      
      <h3>R {price}</h3>

      {/* SUBTOTAL PREVIEW */}
      {quantity > 0 && (
        <p className="item-subtotal">
          Subtotal: R {(price * quantity).toFixed(2)}
        </p>
      )}

      {/* QUANTITY CONTROLS */}
      <div className="item-controls">

        <button onClick={() => removeFromCart(id)}>
          −
        </button>

        <span>{quantity}</span>

        <button onClick={() =>
          addToCart({ id, title, rating, sales, price, image })
        }>
          +
        </button>

      </div>

      {/* FIRST TIME ADD BUTTON */}
      {quantity === 0 && (
        <button
          className="add-btn"
          onClick={() =>
            addToCart({ id, title, rating, sales, price, image })
          }
        >
          Add to Cart
        </button>
      )}

    </div>
  )
}

export default Item