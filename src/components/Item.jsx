import { useCartContext } from '../features/cart/cartContext.jsx'

const Item = ({ image, title, rating, sales, price }) => {
  
  //UseCart context to injet the addToCart function into this component*/
  const { addToCart } = useCartContext();
    return (
    <>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{rating /*Will use css stars*/ }</p>
      <p>{sales}</p>
      <h3>${price}</h3>
      <button onClick={() => addToCart({ title, rating, sales, price })}>Add to Cart</button>
    </>
  )
}

export default Item
