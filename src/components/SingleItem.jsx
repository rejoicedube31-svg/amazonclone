import { Link } from "react-router-dom";

const SingleItem = ({ title, image, link }) => {
  return (
    <section className="item-section">

    
      <Link to="/category" className="single-item">

        <h3>{title}</h3>

        {image && (
          <img src={image} alt={title} />
        )}

        <p>{link}</p>

      </Link>

      <Link to="/category">See more</Link>

    </section>
  );
};

export default SingleItem;