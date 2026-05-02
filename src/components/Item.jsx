const Item = ({ image, title, rating, sales, price }) => {
  
  //UseCart context to injet the addToCart function into this component*/
  
    return (
    <>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{rating /*Will use css stars*/ }</p>
      <p>{sales}</p>
      <h3>${price}</h3>
      <button>Add to Cart</button>
    </>
  )
}

export default Item
