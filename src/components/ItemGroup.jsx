const ItemGroup = ({ title, images, link }) => {
  return (
      <>
            <h3>{title}</h3>
            <div className="item-group">
                {images.map((image, index) => (
                    <a href="" key={index}>
                        <img src={image} alt="" />
                        <p>{link}</p>
                    </a>
                ))}
            </div>


      </>
    )
}

export default ItemGroup;