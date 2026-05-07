import { Link } from "react-router-dom";

const ItemGroup = ({ title, images, link }) => {
  return (
    <>
      <h3>{title}</h3>

      <div className="item-group">
        {images.map((image, index) => (
          <Link to="/Category" key={index} className="item">
            {image ? (
              <img src={image} alt={title} />
            ) : null}

            <p>{link}</p>
          </Link>
        ))}
      </div>

      <Link to="/Category">See more</Link>
    </>
  );
};

export default ItemGroup;