import { Link } from 'react-router-dom'
import  Category from '../app/pages/Category.jsx'

const ItemGroup = ({ title, images, link }) => {
  return (
      <>
            <h3>{title}</h3>

            <div className="item-group">
                {images.map((image, index) => (
                    <a href="" key={index}>
                        <Link to="/Category">
                            <img src={image} alt="" />
                        </Link>
                        <p>{link}</p>
                    </a>
                ))}
            </div>


      </>
    )
}

export default ItemGroup;