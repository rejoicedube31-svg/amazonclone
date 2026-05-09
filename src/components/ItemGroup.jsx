import { Link } from "react-router-dom";

const ItemGroup = ({ title, images, link }) => {
  return (

    <section className="item-section">

      <h3>{title}</h3>

      <div className="item-group">

        {images.map((image, index) => (

          <Link to="/category" key={index} className="item">

            <img src={image} alt={title} />

            <p>{link}</p>

          </Link>

        ))}

      </div>

    </section>

  );
};

export default ItemGroup;