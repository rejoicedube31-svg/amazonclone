import { Link } from "react-router-dom";

const ItemGroup = ({ title, images, link, subtitle }) => {
  return (
    <section className="item-section">
      <h3>{title}</h3>

      <div className="item-group">
        {images.map((image, index) => (
          <Link to="/Category" key={index} className="item">
            {image ? (
              <img src={image} alt={title} />
            ) : null}

            <p>{subtitle}</p>
          </Link>
        ))}

        <Link to="/Category">{link} </Link>
      </div>

      
    </section>
  );
};

export default ItemGroup;